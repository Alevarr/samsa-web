import Chat from "@/components/Chat";
import Face from "@/components/face/face";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Input, Spinner, Textarea } from "@nextui-org/react";
import { Send } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const messageFormSchema = z.object({
  messsage: z.string().min(1, { message: "Поле не может быть пустым" }),
});

type MessageForm = z.infer<typeof messageFormSchema>;

const essayFormSchema = z.object({
  messsage: z.string().min(1, { message: "Поле не может быть пустым" }),
});

type EssayForm = z.infer<typeof essayFormSchema>;

const API_URL = "https://bica-project.tw1.ru";

const DashboardPage = () => {
  const [isSubmitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<MessageForm>({
    resolver: zodResolver(messageFormSchema),
  });

  const {
    register: essayRegister,
    handleSubmit: essayHandleSubmit,
    formState: { errors: essayErrors },
  } = useForm<EssayForm>({
    resolver: zodResolver(essayFormSchema),
  });

  // const onSubmit = (data: MessageForm) => {
  //   setSubmitting(true);
  //   const body = {
  //     text: data.messsage,
  //     model_id: "eleven_multilingual_v2",
  //     voice_settings: { stability: 0.5, similarity_boost: 0.75, style: 0.4 },
  //   };
  //   fetch("https://api.elevenlabs.io/v1/text-to-speech/kwajW3Xh5svCeKU5ky2S", {
  //     method: "POST",
  //     headers: {
  //       "xi-api-key": "sk_eaecaa437c09d848e8bfa50284c036294acbde1684589562",
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(body),
  //   }).then(async (res) => {
  //     setSubmitting(false);
  //     if (!res.ok) {
  //       console.error(res.statusText);
  //       toast.error(`Произошла ошибка: ${res.statusText}`);
  //       return;
  //     }
  //     const blob = await res.blob();
  //     const url = URL.createObjectURL(blob);
  //     const audio = new Audio(url);
  //     audio.play();
  //   });
  // };
  const onSubmit = (data: MessageForm) => {
    setSubmitting(true);
    const body = {
      input_text: data.messsage,
    };
    fetch(`${API_URL}/getAnswerDialog`, {
      method: "POST",
      // headers: {
      //   "xi-api-key": "sk_eaecaa437c09d848e8bfa50284c036294acbde1684589562",
      //   "Content-Type": "application/json",
      // },
      body: JSON.stringify(body),
    }).then(async (res) => {
      setSubmitting(false);
      if (!res.ok) {
        console.error(res.statusText);
        toast.error(`Произошла ошибка: ${res.statusText}`);
        return;
      }
      const text = await res.json();
      console.log(text);
      // const blob = await res.blob();
      // const url = URL.createObjectURL(blob);
      // const audio = new Audio(url);
      // audio.play();
    });
  };
  const onEssaySubmit = (data: EssayForm) => {
    setSubmitting(true);
    const body = {
      input_text: data.messsage,
    };
    fetch(`${API_URL}/getAnswerEssay`, {
      method: "POST",
      // headers: {
      //   "xi-api-key": "sk_eaecaa437c09d848e8bfa50284c036294acbde1684589562",
      //   "Content-Type": "application/json",
      // },
      body: JSON.stringify(body),
    }).then(async (res) => {
      setSubmitting(false);
      if (!res.ok) {
        console.error(res.statusText);
        toast.error(`Произошла ошибка: ${res.statusText}`);
        return;
      }
      const text = await res.json();
      console.log(text);
      // const blob = await res.blob();
      // const url = URL.createObjectURL(blob);
      // const audio = new Audio(url);
      // audio.play();
    });
  };

  const messages = [
    { belongsToUser: false, message: "Hello! How can I help you today?" },
    { belongsToUser: true, message: "Hi! I have a question about my order." },
    { belongsToUser: false, message: "Sure, please tell me your order ID." },
    { belongsToUser: true, message: "It's #12345." },
    { belongsToUser: false, message: "Hello! How can I help you today?" },
    { belongsToUser: true, message: "Hi! I have a question about my order." },
    { belongsToUser: false, message: "Sure, please tell me your order ID." },
    { belongsToUser: true, message: "It's #12345." },
    { belongsToUser: false, message: "Hello! How can I help you today?" },
    { belongsToUser: true, message: "Hi! I have a question about my order." },
    { belongsToUser: false, message: "Sure, please tell me your order ID." },
    { belongsToUser: true, message: "It's #12345." },
    { belongsToUser: false, message: "Hello! How can I help you today?" },
    { belongsToUser: true, message: "Hi! I have a question about my order." },
    { belongsToUser: false, message: "Sure, please tell me your order ID." },
    { belongsToUser: true, message: "It's #12345." },
  ];

  return (
    <main className="flex flex-col sm:flex-row w-full h-screen items-stretch justify-stretch p-8 gap-0">
      <form
          onSubmit={essayHandleSubmit(onEssaySubmit)}
          className="flex gap-4 sm:w-1/2 max-w-3xl py-4 px-2 rounded-md h-full"
        >
          <Textarea
            {...essayRegister("messsage")}
            label="Эссе"
            isInvalid={!!essayErrors?.messsage}
            errorMessage={essayErrors?.messsage?.message}
            disableAutosize
            classNames={{
              inputWrapper: "!h-full",

            }}
            endContent={
              <Button
                type="submit"
                isDisabled={isSubmitting}
                startContent={
                  isSubmitting ? (
                    <Spinner color="white" size="sm" />
                  ) : (
                    <Send size={18} />
                  )
                }
                color="primary"
                isIconOnly
                className="rounded-full self-end"
              />
            }
          />
        </form>
      <div className="flex flex-col max-h-full sm:w-1/2 py-4 px-2 justify-stretch gap-4">
        <Face className="shrink-0" />
        <Chat messages={messages} />
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4 w-full rounded-md"
        >
          <Textarea
            {...register("messsage")}
            label="Сообщение"
            isInvalid={!!errors?.messsage}
            errorMessage={errors?.messsage?.message}
            disableAutosize
            endContent={
              <Button
                type="submit"
                isDisabled={isSubmitting}
                startContent={
                  isSubmitting ? (
                    <Spinner color="white" size="sm" />
                  ) : (
                    <Send size={18} />
                  )
                }
                color="primary"
                isIconOnly
                className="rounded-full self-end"
              />
            }
          />
        </form>
      </div>
    </main>
  );
};

export default DashboardPage;
