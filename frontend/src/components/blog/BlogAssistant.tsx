import { useEffect, useRef, useState } from "react";
import type { ChatMessage, Post } from "../../types/blog";

type Props = {
  posts: Post[];
};

export default function BlogAssistant({ posts }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsLoading(true);

    // TODO: 나중에 서버/서버리스로 붙여서 키 숨기고 연동
    // 지금은 mock 응답
    const mock = `현재는 AI 연동 전이라서, 검색/필터 기능만 제공 중입니다.\n\n원하면 "블로그 포스트(${posts.length}개) 기반 Q&A"를 백엔드로 안전하게 연결해줄게요.`;

    setTimeout(() => {
      setMessages((prev) => [...prev, { role: "assistant", content: mock }]);
      setIsLoading(false);
    }, 600);
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      {isOpen ? (
        <div className="w-[350px] h-[500px] glass-card rounded-3xl flex flex-col overflow-hidden shadow-2xl border-white/60">
          <div className="bg-gradient-to-r from-primary to-accent p-4 text-white flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined">smart_toy</span>
              <span className="font-bold text-sm">Blog Assistant</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 rounded-full p-1">
              <span className="material-symbols-outlined text-sm">close</span>
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
            {messages.length === 0 && (
              <div className="text-center text-slate-400 py-10">
                <p className="text-sm">안녕하세요! 블로그 내용에 대해 질문해보세요.</p>
              </div>
            )}

            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={[
                    "max-w-[80%] rounded-2xl p-3 text-sm whitespace-pre-line",
                    msg.role === "user" ? "bg-primary text-white" : "bg-white/80 text-slate-800",
                  ].join(" ")}
                >
                  {msg.content}
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white/80 rounded-2xl p-3 text-sm text-slate-400 italic">생각 중...</div>
              </div>
            )}
          </div>

          <div className="p-4 bg-white/40 border-t border-white/20 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="질문을 입력하세요..."
              className="flex-1 bg-white/60 border-none rounded-xl text-sm focus:ring-2 focus:ring-primary/50"
            />
            <button
              onClick={handleSend}
              disabled={isLoading}
              className="bg-primary text-white size-10 rounded-xl flex items-center justify-center disabled:opacity-50"
            >
              <span className="material-symbols-outlined text-sm">send</span>
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="size-16 rounded-full bg-gradient-to-br from-primary to-accent text-white shadow-2xl shadow-primary/40 flex items-center justify-center hover:scale-110 transition-transform"
        >
          <span className="material-symbols-outlined text-3xl">auto_awesome</span>
        </button>
      )}
    </div>
  );
}
