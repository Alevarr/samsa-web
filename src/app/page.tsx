"use client";
import { sendDialog, sendEssay } from "@/actions/api.action";
import Chat from "@/components/Chat";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Input, Spinner, Textarea } from "@nextui-org/react";
import { set } from "animejs";
import { Send } from "lucide-react";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import Face, { type ExpressionEnum } from "../components/face/Face";

const messageFormSchema = z.object({
  messsage: z.string().min(1, { message: "Поле не может быть пустым" }),
});

type MessageForm = z.infer<typeof messageFormSchema>;

const essayFormSchema = z.object({
  messsage: z.string().min(1, { message: "Поле не может быть пустым" }),
});

type EssayForm = z.infer<typeof essayFormSchema>;

type MessageHistoryItem = {
  belongsToUser: boolean;
  message: string;
};

const expressionMap: Array<ExpressionEnum> = [
  "sad",
  "angry",
  "happy",
  "surprised",
];

const Page = () => {
  const [messages, setMessages] = useState<MessageHistoryItem[]>([]);

  const [isSubmittingDialog, startSubmittingDialog] = useTransition();
  const [isSubmittingEssay, startSubmittingEssay] = useTransition();

  const [expression, setExpression] = useState<ExpressionEnum>();

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

  const runSpeech = async (text: string) => {
    const body = {
      text,
      model_id: "eleven_multilingual_v2",
      voice_settings: { stability: 0.5, similarity_boost: 0.75, style: 0.4 },
    };
    const res = await fetch(
      "https://api.elevenlabs.io/v1/text-to-speech/kwajW3Xh5svCeKU5ky2S",
      {
        method: "POST",
        headers: {
          "xi-api-key": "sk_eaecaa437c09d848e8bfa50284c036294acbde1684589562",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      },
    );

    if (!res.ok) {
      console.error(res.statusText);
      toast.error(`Произошла ошибка: ${res.statusText}`);
      return;
    }
    const blob = await res.blob();
    const url = URL.createObjectURL(blob);
    const audio = new Audio(url);
    audio.play();
  };
  const onSubmit = (data: MessageForm) => {
    setMessages((prev) => [
      ...prev,
      { belongsToUser: true, message: data.messsage },
    ]);
    startSubmittingDialog(async () => {
      const res = await sendDialog(data.messsage);
      if (res.error) {
        console.error(res.error);
        toast.error("Произошла ошибка");
        return;
      }
      const { answer_text, emotion } = res.data;

      setMessages((prev) => [
        ...prev,
        { belongsToUser: false, message: answer_text },
      ]);
      await runSpeech(answer_text);
      setExpression(expressionMap[emotion]);
    });
  };
  const onEssaySubmit = (data: EssayForm) => {
    setMessages((prev) => [
      ...prev,
      { belongsToUser: true, message: data.messsage },
    ]);
    startSubmittingEssay(async () => {
      const res = await sendEssay(data.messsage);
      if (res.error) {
        console.error(res.error);
        toast.error("Произошла ошибка");
        return;
      }
      const { answer_text, emotion } = res.data;
      await runSpeech(answer_text);
      setMessages((prev) => [
        ...prev,
        { belongsToUser: false, message: answer_text },
      ]);
    });
  };

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
            input: "h-full",
            inputWrapper: "!h-full",
          }}
          endContent={
            <Button
              type="submit"
              isDisabled={isSubmittingEssay}
              startContent={
                isSubmittingEssay ? (
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
        <Face expression={expression} className="shrink-0" />
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
                isDisabled={isSubmittingDialog}
                startContent={
                  isSubmittingDialog ? (
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

export default Page;
