
"use client";

import { Dialog } from "@base-ui/react/dialog";
import { Bot, MessageCircle, Send, X } from "lucide-react";
import { useChat } from "@ai-sdk/react";
import { z } from "zod/v4";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Spinner } from "./ui/spinner";
import { cn } from "@/lib/utils";

const inputSchema = z.object({
  input: z
    .string()
    .trim()
    .min(1, "Pesan tidak boleh kosong")
    .max(2000, "Pesan maksimal 2000 karakter"),
});

type InputForm = z.infer<typeof inputSchema>;

export function AiAgentPopup() {
  const { messages, sendMessage, status, error } = useChat();

  const isLoading =
    status === "submitted" || status === "streaming";

  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm<InputForm>({
    resolver: zodResolver(inputSchema),
    defaultValues: {
      input: "",
    },
  });

  function onSubmit(values: InputForm) {
    if (isLoading) return;

    void sendMessage({
      text: values.input,
    });

    reset();
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger
        className="fixed right-4 bottom-24 z-40 flex size-12 items-center justify-center rounded-full border border-[#EB9900]/60 bg-[#EB9900] text-[#100d0a] shadow-lg shadow-black/30 transition-colors hover:bg-[#ffc04d] md:right-8 md:bottom-8"
        aria-label="Buka AI assistant"
      >
        <MessageCircle
          aria-hidden="true"
          className="size-5"
        />
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Backdrop className="fixed inset-0 z-[60] bg-black/60" />

        <Dialog.Popup
          className="fixed right-4 bottom-24 left-4 z-[70] mx-auto flex h-[min(36rem,75dvh)] max-w-sm flex-col overflow-hidden rounded-2xl border border-[#E5C5A3]/20 bg-[#15110d] text-[#E5C5A3] shadow-2xl focus:outline-none md:right-8 md:bottom-8 md:left-auto md:w-full"
        >
          {/* HEADER */}
          <div className="flex shrink-0 items-center gap-3 border-b border-[#E5C5A3]/15 p-5">
            <div className="flex size-10 items-center justify-center rounded-xl bg-[#EB9900]/10 text-[#EB9900]">
              <Bot
                aria-hidden="true"
                className="size-5"
              />
            </div>

            <div className="min-w-0 flex-1">
              <Dialog.Title className="font-mono text-sm font-bold">
                AI Assistant
              </Dialog.Title>

              <Dialog.Description className="mt-1 font-mono text-xs text-[#E5C5A3]/60">
                Portfolio Rissz
              </Dialog.Description>
            </div>

            <Dialog.Close
              aria-label="Tutup AI assistant"
              className="rounded-lg p-2 text-[#E5C5A3]/70 hover:bg-[#E5C5A3]/10 hover:text-[#E5C5A3]"
            >
              <X
                aria-hidden="true"
                className="size-5"
              />
            </Dialog.Close>
          </div>

          {/* CHAT HISTORY */}
          <div className="flex min-h-0 flex-1 flex-col gap-3 overflow-y-auto p-4 font-mono text-xs leading-6">
            {/* Greeting */}
            <div className="self-start rounded-xl rounded-tl-none border border-[#E5C5A3]/10 bg-[#0d0b09] p-4">
              Halo! Saya Zagoour AI. Ada yang bisa
              saya bantu terkait portfolio ini?
            </div>

            {/* Messages */}
            {messages.map((message) => (
              <div
                key={message.id}
                className={cn(
                  "flex w-full",
                  message.role === "user"
                    ? "justify-end"
                    : "justify-start"
                )}
              >
                <div
                  className={cn(
                    "min-w-0 max-w-[85%] rounded-2xl px-3 py-2 break-words",
                    message.role === "user"
                      ? "rounded-br-none bg-[#EB9900] text-[#100d0a]"
                      : "rounded-bl-none border border-[#E5C5A3]/10 bg-[#0d0b09] text-[#E5C5A3]"
                  )}
                >
                  <p className="font-bold">
                    {message.role === "user"
                      ? "User:"
                      : "AI:"}
                  </p>

                  {message.parts.map((part, i) => {
                    switch (part.type) {
                      case "text":
                        return (
                          <div
                            className="whitespace-pre-wrap"
                            key={`${message.id}-${i}`}
                          >
                            {part.text}
                          </div>
                        );

                      case "tool-weather":
                        return (
                          <pre
                            key={`${message.id}-${i}`}
                            className="whitespace-pre-wrap break-all"
                          >
                            {JSON.stringify(part, null, 2)}
                          </pre>
                        );

                      default:
                        return null;
                    }
                  })}
                </div>
              </div>
            ))}

            {/* AI STATUS - DI LUAR MAP */}
            {status === "submitted" ? (
              <div
                role="status"
                className="flex w-fit items-center gap-2 self-start rounded-xl border border-[#E5C5A3]/10 bg-[#0d0b09] px-3 py-2 text-[#E5C5A3]/70"
              >
                <Spinner className="size-3 shrink-0 text-[#EB9900]" />
                <span>AI sedang berpikir...</span>
              </div>
            ) : status === "streaming" ? (
              <div
                role="status"
                className="flex w-fit items-center gap-2 self-start rounded-xl border border-[#E5C5A3]/10 bg-[#0d0b09] px-3 py-2 text-[#E5C5A3]/70"
              >
                <Spinner className="size-3 shrink-0 text-[#EB9900]" />
                <span>AI sedang mengetik...</span>
              </div>
            ) : null}

            {/* ERROR */}
            {error && (
              <p
                role="alert"
                className="self-start text-red-500"
              >
                Gagal mendapatkan respons AI.
              </p>
            )}
          </div>

          {/* FORM - TETAP DI BAWAH */}
          <form
            id="rhf-ai"
            onSubmit={handleSubmit(onSubmit)}
            className="shrink-0 space-y-3 border-t border-[#E5C5A3]/15 p-4"
          >
            <Input
              {...register("input")}
              aria-invalid={!!errors.input}
              placeholder="Tulis pesan kepada AI"
              className="w-full rounded-lg border border-[#E5C5A3]/30 bg-[#0d0b09] p-2 font-mono text-xs"
            />

            {errors.input && (
              <p
                role="alert"
                className="font-mono text-xs text-red-500"
              >
                {errors.input.message}
              </p>
            )}

            <Button
              disabled={isLoading}
              type="submit"
              className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-lg bg-[#EB9900] px-4 font-bold text-[#100d0a] hover:bg-[#ffc04d] disabled:opacity-60"
            >
              {isLoading ? (
                <>
                  <Spinner className="size-4" />
                  Mengirim...
                </>
              ) : (
                <>
                  Kirim Pesan
                  <Send size={18} />
                </>
              )}
            </Button>
          </form>
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
