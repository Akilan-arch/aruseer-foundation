import { createClient, createAdminClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export default async function AdminPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/admin/login");

  const adminSupabase = createAdminClient();
  const { data: adminUser } = await adminSupabase
    .from("admin_users")
    .select("role, is_active")
    .eq("email", user.email!)
    .single();

  if (!adminUser?.is_active) redirect("/admin/denied");

  return (
    <div style={{ minHeight: "100vh", background: "#F8F7FF", fontFamily: "Inter, sans-serif" }}>
      <div style={{ background: "#0F172A", padding: "1.25rem 2rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div style={{ width: "32px", height: "32px", background: "#EDE9FE", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: 800, color: "#7C3AED", fontFamily: "Georgia, serif" }}>AF</div>
          <span style={{ color: "white", fontWeight: 600, fontSize: "15px" }}>Aruseer Admin</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <span style={{ color: "#64748B", fontSize: "13px" }}>{user.email}</span>
          <span style={{ background: "#EDE9FE", color: "#7C3AED", fontSize: "11px", fontWeight: 600, padding: "3px 10px", borderRadius: "999px" }}>{adminUser.role}</span>
          <form action="/auth/signout" method="POST">
            <button type="submit" style={{ background: "transparent", color: "#94A3B8", padding: "7px 14px", borderRadius: "7px", fontWeight: 500, fontSize: "13px", border: "1px solid #334155", cursor: "pointer", fontFamily: "Inter, sans-serif" }}>Sign Out</button>
          </form>
        </div>
      </div>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "2.5rem 1.5rem" }}>
        <h1 style={{ fontFamily: "Georgia, serif", fontSize: "1.8rem", fontWeight: 700, color: "#0F172A", marginBottom: "0.5rem" }}>Dashboard</h1>
        <p style={{ color: "#64748B", fontSize: "14px", marginBottom: "2rem" }}>Welcome back. Logged in as <strong>{adminUser.role.replace("_", " ")}</strong>.</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1.25rem" }}>
          {[
            { label: "Role", value: adminUser.role.replace("_", " "), color: "#8B5CF6" },
            { label: "Status", value: "Active", color: "#10B981" },
            { label: "Foundation", value: "Aruseer", color: "#0EA5E9" },
          ].map(stat => (
            <div key={stat.label} style={{ background: "white", border: "1px solid #E2E8F0", borderRadius: "12px", padding: "1.5rem" }}>
              <div style={{ color: "#94A3B8", fontSize: "12px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "6px" }}>{stat.label}</div>
              <div style={{ fontWeight: 700, fontSize: "16px", color: stat.color }}>{stat.value}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}