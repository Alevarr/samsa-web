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

const DashboardPage = () => {
  const [isSubmitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<MessageForm>({
    resolver: zodResolver(messageFormSchema),
  });

  const onSubmit = (data: MessageForm) => {
    setSubmitting(true);
    const body = {
      text: data.messsage,
      model_id: "eleven_multilingual_v2",
      voice_settings: { stability: 0.5, similarity_boost: 0.75, style: 0.4 },
    };
    fetch("https://api.elevenlabs.io/v1/text-to-speech/kwajW3Xh5svCeKU5ky2S", {
      method: "POST",
      headers: {
        "xi-api-key": "sk_eaecaa437c09d848e8bfa50284c036294acbde1684589562",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }).then(async (res) => {
      setSubmitting(false);
      if (!res.ok) {
        console.error(res.statusText);
        toast.error(`Произошла ошибка: ${res.statusText}`);
        return;
      }
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const audio = new Audio(url);
      audio.play();
    });
  };

  return (
    <main className="flex flex-col w-full h-screen items-center justify-center p-8 gap-8">
      <Face className="shrink-0" />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex gap-4 w-full max-w-3xl py-4 px-2 rounded-md"
      >
        <Textarea
          {...register("messsage")}
          label="Сообщение"
          isInvalid={!!errors?.messsage}
          errorMessage={errors?.messsage?.message}
          classNames={{
            innerWrapper: "h-[300px]",
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
        {/* <Button
          type="submit"
          isDisabled={isSubmitting}
          startContent={
            isSubmitting ? (
              <Spinner color="white" size="lg" />
            ) : (
              <Send size={24} />
            )
          }
          color="primary"
          size="lg"
        >
          Отправить
        </Button> */}
      </form>
    </main>
  );
};

export default DashboardPage;