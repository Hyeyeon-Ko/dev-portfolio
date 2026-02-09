import { useState } from "react";
import type { ContactFormData } from "../../types/contact";

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Demo only
    alert(`메시지 전송 완료! (Demo)\nFrom: ${formData.name}`);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
  };

  return (
    <div className="glass-card rounded-[3rem] p-8 md:p-14 shadow-2xl shadow-slate-200/50">
      <h2 className="text-2xl font-black mb-10 flex items-center gap-4">
        <div className="size-8 flex items-center justify-center bg-primary/10 rounded-lg">
          <span className="material-symbols-outlined text-primary text-[18px]">
            send
          </span>
        </div>
        메시지 보내기
      </h2>

      <form onSubmit={onSubmit} className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col gap-2.5">
            <label className="text-xs font-black text-slate-500 uppercase tracking-widest ml-1">
              성함
            </label>
            <input
              name="name"
              value={formData.name}
              onChange={onChange}
              className="bg-white/50 border border-slate-200 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all rounded-2xl px-5 py-4 outline-none placeholder:text-slate-300 font-medium"
              placeholder="Your name"
              type="text"
              required
            />
          </div>

          <div className="flex flex-col gap-2.5">
            <label className="text-xs font-black text-slate-500 uppercase tracking-widest ml-1">
              이메일 주소
            </label>
            <input
              name="email"
              value={formData.email}
              onChange={onChange}
              className="bg-white/50 border border-slate-200 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all rounded-2xl px-5 py-4 outline-none placeholder:text-slate-300 font-medium"
              placeholder="example@email.com"
              type="email"
              required
            />
          </div>
        </div>

        <div className="flex flex-col gap-2.5">
          <label className="text-xs font-black text-slate-500 uppercase tracking-widest ml-1">
            주제
          </label>
          <input
            name="subject"
            value={formData.subject}
            onChange={onChange}
            className="bg-white/50 border border-slate-200 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all rounded-2xl px-5 py-4 outline-none placeholder:text-slate-300 font-medium"
            placeholder="Subject"
            type="text"
            required
          />
        </div>

        <div className="flex flex-col gap-2.5">
          <label className="text-xs font-black text-slate-500 uppercase tracking-widest ml-1">
            내용
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={onChange}
            className="bg-white/50 border border-slate-200 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all rounded-2xl px-5 py-4 outline-none placeholder:text-slate-300 font-medium resize-none"
            placeholder="Tell me more about your idea..."
            rows={6}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-primary text-white py-5 rounded-2xl font-bold text-lg shadow-xl shadow-primary/30 hover:shadow-2xl hover:-translate-y-1 active:translate-y-0 transition-all flex items-center justify-center gap-3 group"
        >
          보내기
          <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
            arrow_forward
          </span>
        </button>
      </form>
    </div>
  );
}
