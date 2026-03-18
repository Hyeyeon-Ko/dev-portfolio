import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import type { ContactFormData } from "../../types/contact";
import Dialog from "../ui/Dialog";
import { useDialog } from "../../hooks/useDialog";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID as string;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string;

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_MESSAGE_LENGTH = 2000;

const EMPTY: ContactFormData = { name: "", email: "", subject: "", message: "" };

type Errors = Partial<Record<keyof ContactFormData, string>>;

function validate(data: ContactFormData): Errors {
  const errors: Errors = {};
  if (!data.name.trim()) errors.name = "성함을 입력해주세요.";
  if (!data.email.trim()) {
    errors.email = "이메일을 입력해주세요.";
  } else if (!EMAIL_REGEX.test(data.email)) {
    errors.email = "올바른 이메일 형식이 아닙니다.";
  }
  if (!data.subject.trim()) errors.subject = "주제를 입력해주세요.";
  if (!data.message.trim()) {
    errors.message = "내용을 입력해주세요.";
  } else if (data.message.length > MAX_MESSAGE_LENGTH) {
    errors.message = `내용은 ${MAX_MESSAGE_LENGTH}자 이하로 입력해주세요.`;
  }
  return errors;
}

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState<ContactFormData>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [isSending, setIsSending] = useState(false);
  const [honeypot, setHoneypot] = useState("");
  const { dialogProps, alert } = useDialog();

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // 봇 방지: honeypot 필드에 값이 있으면 조용히 무시
    if (honeypot) return;

    const validationErrors = validate(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    if (!formRef.current) return;

    setIsSending(true);
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, { publicKey: PUBLIC_KEY });
      setFormData(EMPTY);
      await alert("메시지가 전송됐습니다!", {
        type: "success",
        message: "빠른 시일 내에 답변 드리겠습니다.",
      });
    } catch {
      await alert("전송에 실패했습니다.", {
        type: "error",
        message: "잠시 후 다시 시도하거나 이메일로 직접 연락해주세요.",
      });
    } finally {
      setIsSending(false);
    }
  };

  const inputClass = (field: keyof ContactFormData) =>
    [
      "bg-white/50 border focus:ring-4 focus:ring-primary/10 transition-all rounded-2xl px-5 py-4 outline-none placeholder:text-slate-300 font-medium w-full",
      errors[field]
        ? "border-rose-400 focus:border-rose-400"
        : "border-slate-200 focus:border-primary",
    ].join(" ");

  return (
    <>
      <Dialog {...dialogProps} />
      <div className="glass-card rounded-[3rem] p-8 md:p-14 shadow-2xl shadow-slate-200/50">
        <h2 className="text-2xl font-black mb-10 flex items-center gap-4">
          <div className="size-8 flex items-center justify-center bg-primary/10 rounded-lg">
            <span className="material-symbols-outlined text-primary text-[18px]">send</span>
          </div>
          메시지 보내기
        </h2>

        <form ref={formRef} onSubmit={onSubmit} className="space-y-8" noValidate>
          {/* 허니팟 - 봇 방지용 (화면에서 숨김) */}
          <input
            type="text"
            name="website"
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
            tabIndex={-1}
            aria-hidden="true"
            style={{ display: "none" }}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col gap-2.5">
              <label className="text-sm font-bold text-slate-600 uppercase tracking-widest ml-1">성함</label>
              <input
                name="from_name"
                value={formData.name}
                onChange={(e) => {
                  setFormData((p) => ({ ...p, name: e.target.value }));
                  if (errors.name) setErrors((p) => ({ ...p, name: undefined }));
                }}
                className={inputClass("name")}
                placeholder="Your name"
                type="text"
              />
              {errors.name && <p className="text-xs text-rose-500 ml-1">{errors.name}</p>}
            </div>
            <div className="flex flex-col gap-2.5">
              <label className="text-sm font-bold text-slate-600 uppercase tracking-widest ml-1">이메일 주소</label>
              <input
                name="from_email"
                value={formData.email}
                onChange={(e) => {
                  setFormData((p) => ({ ...p, email: e.target.value }));
                  if (errors.email) setErrors((p) => ({ ...p, email: undefined }));
                }}
                className={inputClass("email")}
                placeholder="example@email.com"
                type="email"
              />
              {errors.email && <p className="text-xs text-rose-500 ml-1">{errors.email}</p>}
            </div>
          </div>

          <div className="flex flex-col gap-2.5">
            <label className="text-sm font-bold text-slate-600 uppercase tracking-widest ml-1">주제</label>
            <input
              name="subject"
              value={formData.subject}
              onChange={(e) => {
                setFormData((p) => ({ ...p, subject: e.target.value }));
                if (errors.subject) setErrors((p) => ({ ...p, subject: undefined }));
              }}
              className={inputClass("subject")}
              placeholder="Subject"
              type="text"
            />
            {errors.subject && <p className="text-xs text-rose-500 ml-1">{errors.subject}</p>}
          </div>

          <div className="flex flex-col gap-2.5">
            <div className="flex justify-between items-center ml-1">
              <label className="text-sm font-bold text-slate-600 uppercase tracking-widest">내용</label>
              <span
                className={`text-xs font-medium ${
                  formData.message.length > MAX_MESSAGE_LENGTH ? "text-rose-500" : "text-slate-400"
                }`}
              >
                {formData.message.length} / {MAX_MESSAGE_LENGTH}
              </span>
            </div>
            <textarea
              name="message"
              value={formData.message}
              onChange={(e) => {
                setFormData((p) => ({ ...p, message: e.target.value }));
                if (errors.message) setErrors((p) => ({ ...p, message: undefined }));
              }}
              className={`${inputClass("message")} resize-none`}
              placeholder="Tell me more about your idea..."
              rows={6}
            />
            {errors.message && <p className="text-xs text-rose-500 ml-1">{errors.message}</p>}
          </div>

          <button
            type="submit"
            disabled={isSending}
            className="w-full bg-primary text-white py-5 rounded-2xl font-bold text-lg shadow-xl shadow-primary/30 hover:shadow-2xl hover:-translate-y-1 active:translate-y-0 transition-all flex items-center justify-center gap-3 group disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
          >
            {isSending ? "전송 중..." : "보내기"}
            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
              {isSending ? "hourglass_empty" : "arrow_forward"}
            </span>
          </button>
        </form>
      </div>
    </>
  );
}
