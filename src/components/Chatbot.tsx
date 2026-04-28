"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";

interface Message {
  from: "bot" | "user";
  text: string;
  options?: string[];
  showContact?: boolean;
}

const QA: Record<string, { answer: string; options?: string[]; showContact?: boolean }> = {
  "What is Aruseer Foundation?": {
    answer: "Aruseer Foundation is a new, independent education charity based in Tamil Nadu, India. We help children from financially struggling families continue their education by supporting school fees, books, uniforms, and emergency education needs.",
    options: ["How can I donate?", "How do I request aid?", "Where does my donation go?"],
  },
  "How can I donate?": {
    answer: "You can donate via bank transfer or UPI. Visit our Donate page for full details including our account number and UPI ID. Online payment integration is coming soon.",
    options: ["Where does my donation go?", "How much should I donate?", "Is my donation safe?"],
  },
  "Where does my donation go?": {
    answer: "100% of your donation goes directly to education support — school fees, books, uniforms, or emergency aid for children in Tamil Nadu. We do not deduct admin or overhead costs.",
    options: ["How can I donate?", "How do I request aid?", "Will I get an update?"],
  },
  "How much should I donate?": {
    answer: "Any amount helps. ₹500 can cover books and stationery. ₹1,000 can support a uniform. ₹2,500+ can contribute towards school fees. Every rupee makes a difference.",
    options: ["How can I donate?", "Where does my donation go?"],
  },
  "Is my donation safe?": {
    answer: "Yes. We do not store any payment or card data. Donations are made directly via bank transfer or UPI. We will always send you a confirmation and update on how your donation was used.",
    options: ["How can I donate?", "Will I get an update?"],
  },
  "Will I get an update?": {
    answer: "Yes. Once your donation is received and allocated, we will send you an update explaining how it was used. Transparency is one of our core commitments.",
    options: ["How can I donate?", "What else do you support?"],
  },
  "How do I request aid?": {
    answer: "Visit our Contact page and select the 'Request Education Aid' tab. Fill in your details, your child's school information, and the type of support needed. We will review and respond personally.",
    options: ["Who can request aid?", "How long does it take?", "Is my information safe?"],
  },
  "Who can request aid?": {
    answer: "Any family in Tamil Nadu struggling to afford school fees, books, uniforms, or other education essentials. We also support children at risk of dropping out due to sudden financial hardship.",
    options: ["How do I request aid?", "What does aid cover?"],
  },
  "What does aid cover?": {
    answer: "We aim to support school fee payments, books and stationery, school uniforms and essentials, and emergency aid for families facing sudden financial crises affecting their child's education.",
    options: ["How do I request aid?", "Who can request aid?"],
  },
  "How long does it take?": {
    answer: "We aim to respond to all requests within a few days. Processing time depends on verification and available funds. We will keep you informed at every step.",
    options: ["How do I request aid?", "Is my information safe?"],
  },
  "Is my information safe?": {
    answer: "Absolutely. All information shared with us is kept strictly confidential. We will never share your details with anyone outside the foundation.",
    options: ["How do I request aid?", "Who can request aid?"],
  },
  "How can I volunteer?": {
    answer: "We welcome volunteers for community outreach, request verification, tutoring, admin support, digital communication, and fundraising. Visit our Volunteer page to learn more and get in touch.",
    options: ["What is Aruseer Foundation?", "How can I donate?"],
  },
  "Where are you based?": {
    answer: "We are based in Tamil Nadu, India. We currently focus on supporting children and families within Tamil Nadu, starting locally before expanding.",
    options: ["What is Aruseer Foundation?", "How do I contact you?"],
  },
  "How do I contact you?": {
    answer: "You can reach us at info@aruseerfoundation.org or call +91 98765 43210. You can also use the Contact page on our website to send a message or submit an aid request.",
    options: ["How do I request aid?", "How can I volunteer?"],
    showContact: true,
  },
  "What else do you support?": {
    answer: "Right now we focus on three areas: school fee support, books and uniform support, and emergency education aid. As we grow, we aim to expand our programmes responsibly.",
    options: ["How can I donate?", "How do I request aid?"],
  },
};

const INITIAL_OPTIONS = [
  "What is Aruseer Foundation?",
  "How can I donate?",
  "How do I request aid?",
  "How can I volunteer?",
  "How do I contact you?",
];

const FALLBACK = {
  answer: "I am sorry, I do not have an answer for that right now. Please reach out to our team directly and we will be happy to help.",
  showContact: true,
};

export default function Chatbot({ locale }: { locale: string }) {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      from: "bot",
      text: "Hi! I am the Aruseer Foundation assistant. How can I help you today?",
      options: INITIAL_OPTIONS,
    },
  ]);
  const [input, setInput] = useState("");
  const [unread, setUnread] = useState(1);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) {
      setUnread(0);
      bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [open, messages]);

  const handleOption = (option: string) => {
    const userMsg: Message = { from: "user", text: option };
    const qa = QA[option];
    const botMsg: Message = qa
      ? { from: "bot", text: qa.answer, options: qa.options, showContact: qa.showContact }
      : { from: "bot", text: FALLBACK.answer, showContact: true };
    setMessages(prev => [...prev, userMsg, botMsg]);
    if (!open) setUnread(u => u + 1);
  };

  const handleInput = () => {
    if (!input.trim()) return;
    const userText = input.trim();
    setInput("");
    const match = Object.keys(QA).find(k => k.toLowerCase().includes(userText.toLowerCase()) || userText.toLowerCase().includes(k.toLowerCase().split(" ").slice(1, 3).join(" ")));
    const qa = match ? QA[match] : null;
    const botMsg: Message = qa
      ? { from: "bot", text: qa.answer, options: qa.options, showContact: qa.showContact }
      : { from: "bot", text: FALLBACK.answer, showContact: true };
    setMessages(prev => [...prev, { from: "user", text: userText }, botMsg]);
  };

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setOpen(o => !o)}
        style={{
          position: "fixed", bottom: "1.5rem", right: "1.5rem", zIndex: 1000,
          width: "56px", height: "56px", borderRadius: "50%",
          background: open ? "#64748B" : "#8B5CF6",
          border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
          boxShadow: "0 4px 24px rgba(139,92,246,0.4)", transition: "background 0.2s",
        }}
      >
        {open ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
        ) : (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
          </svg>
        )}
        {!open && unread > 0 && (
          <div style={{ position: "absolute", top: "2px", right: "2px", width: "18px", height: "18px", borderRadius: "50%", background: "#EF4444", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ color: "white", fontSize: "11px", fontWeight: 700 }}>{unread}</span>
          </div>
        )}
      </button>

      {/* Chat Window */}
      {open && (
        <div style={{
          position: "fixed", bottom: "5rem", right: "1.5rem", zIndex: 999,
          width: "340px", maxHeight: "520px", background: "white",
          borderRadius: "16px", boxShadow: "0 8px 40px rgba(0,0,0,0.15)",
          border: "1px solid #EDE9FE", display: "flex", flexDirection: "column",
          fontFamily: "Inter, sans-serif",
        }}>

          {/* Header */}
          <div style={{ background: "#0F172A", borderRadius: "16px 16px 0 0", padding: "1rem 1.25rem", display: "flex", alignItems: "center", gap: "10px" }}>
            <div style={{ width: "36px", height: "36px", background: "#EDE9FE", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <span style={{ color: "#7C3AED", fontWeight: 800, fontSize: "13px", fontFamily: "Georgia, serif" }}>AF</span>
            </div>
            <div>
              <div style={{ color: "white", fontWeight: 600, fontSize: "14px" }}>Aruseer Foundation</div>
              <div style={{ color: "#8B5CF6", fontSize: "12px" }}>Ask us anything</div>
            </div>
          </div>

          {/* Messages */}
          <div style={{ flex: 1, overflowY: "auto", padding: "1rem", display: "flex", flexDirection: "column", gap: "0.875rem" }}>
            {messages.map((msg, i) => (
              <div key={i}>
                <div style={{
                  display: "flex", justifyContent: msg.from === "user" ? "flex-end" : "flex-start",
                }}>
                  <div style={{
                    maxWidth: "82%", padding: "0.75rem 1rem", borderRadius: msg.from === "user" ? "12px 12px 2px 12px" : "12px 12px 12px 2px",
                    background: msg.from === "user" ? "#8B5CF6" : "#F8F7FF",
                    color: msg.from === "user" ? "white" : "#0F172A",
                    fontSize: "13.5px", lineHeight: 1.6,
                    border: msg.from === "bot" ? "1px solid #EDE9FE" : "none",
                  }}>
                    {msg.text}
                  </div>
                </div>
                {msg.showContact && (
                  <div style={{ marginTop: "0.5rem" }}>
                    <Link href={`/${locale}/contact`} style={{ display: "inline-block", background: "#0EA5E9", color: "white", padding: "7px 14px", borderRadius: "8px", fontSize: "12px", fontWeight: 600, textDecoration: "none" }}>
                      Contact Our Team
                    </Link>
                  </div>
                )}
                {msg.options && (
                  <div style={{ display: "flex", flexDirection: "column", gap: "6px", marginTop: "0.5rem" }}>
                    {msg.options.map(opt => (
                      <button key={opt} onClick={() => handleOption(opt)} style={{
                        background: "white", border: "1px solid #DDD6FE", borderRadius: "8px",
                        padding: "8px 12px", fontSize: "12.5px", color: "#7C3AED", fontWeight: 500,
                        cursor: "pointer", textAlign: "left", fontFamily: "Inter, sans-serif",
                        transition: "background 0.15s",
                      }}>
                        {opt}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div style={{ padding: "0.75rem 1rem", borderTop: "1px solid #F1F5F9", display: "flex", gap: "8px" }}>
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === "Enter" && handleInput()}
              placeholder="Type your question..."
              style={{
                flex: 1, padding: "9px 12px", border: "1px solid #E2E8F0", borderRadius: "8px",
                fontSize: "13px", fontFamily: "Inter, sans-serif", outline: "none", color: "#0F172A",
              }}
            />
            <button onClick={handleInput} style={{
              background: "#8B5CF6", border: "none", borderRadius: "8px", padding: "9px 14px",
              cursor: "pointer", display: "flex", alignItems: "center",
            }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
                <path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z"/>
              </svg>
            </button>
          </div>

          {/* Reset */}
          <div style={{ textAlign: "center", padding: "0 1rem 0.75rem" }}>
            <button onClick={() => setMessages([{ from: "bot", text: "Hi! I am the Aruseer Foundation assistant. How can I help you today?", options: INITIAL_OPTIONS }])} style={{ background: "none", border: "none", color: "#94A3B8", fontSize: "12px", cursor: "pointer", fontFamily: "Inter, sans-serif" }}>
              Start over
            </button>
          </div>
        </div>
      )}
    </>
  );
}