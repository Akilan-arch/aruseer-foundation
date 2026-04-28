"use client";
import { createClient } from "@/lib/supabase/client";

export default function DeniedPage() {
  const handleSignOut = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    window.location.href = "/admin/login";
  };
  return (
    <div style={{ minHeight: "100vh", background: "#0F172A", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "Inter, sans-serif" }}>
      <div style={{ background: "white", borderRadius: "16px", padding: "3rem", width: "380px", textAlign: "center" }}>
        <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🔒</div>
        <h1 style={{ fontFamily: "Georgia, serif", fontSize: "1.5rem", fontWeight: 700, color: "#0F172A", marginBottom: "0.75rem" }}>Access Denied</h1>
        <p style={{ color: "#64748B", fontSize: "14px", lineHeight: 1.7, marginBottom: "2rem" }}>Your Google account is not approved for admin access.</p>
        <button onClick={handleSignOut} style={{ background: "#8B5CF6", color: "white", padding: "12px 24px", borderRadius: "8px", fontWeight: 600, fontSize: "14px", border: "none", cursor: "pointer", fontFamily: "Inter, sans-serif" }}>Sign Out</button>
      </div>
    </div>
  );
}