import { createClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";

const APPROVED_ADMINS: Record<string, string> = {
  "akilan2384@gmail.com": "super_admin",
};

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get("code");
  if (code) {
    const supabase = await createClient();
    const { data: { user }, error } = await supabase.auth.exchangeCodeForSession(code);
    console.log("User email:", user?.email);
    if (!error && user?.email) {
      const role = APPROVED_ADMINS[user.email];
      console.log("Role found:", role);
      if (role) return NextResponse.redirect(origin + "/admin");
      else return NextResponse.redirect(origin + "/admin/denied");
    }
  }
  return NextResponse.redirect(origin + "/admin/login?error=auth_failed");
}