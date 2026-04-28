import { createServerClient } from "@supabase/ssr";
import { createClient as createSupabaseClient } from "@supabase/supabase-js";
import { cookies } from "next/headers";

export async function createClient() {
  const cookieStore = await cookies();
  return createServerClient(
    "https://vzrgwbidejufcideatmx.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ6cmd3YmlkZWp1ZmNpZGVhdG14Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzczNTE1OTgsImV4cCI6MjA5MjkyNzU5OH0.MIVlrx8BZw_wHnhFKucyHOdo-0W30GA9U5MLz0ftTIw",
    {
      cookies: {
        getAll() { return cookieStore.getAll(); },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            );
          } catch {}
        },
      },
    }
  );
}

export function createAdminClient() {
  return createSupabaseClient(
    "https://vzrgwbidejufcideatmx.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ6cmd3YmlkZWp1ZmNpZGVhdG14Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3NzM1MTU5OCwiZXhwIjoyMDkyOTI3NTk4fQ.1HxMejqRQzYFTeEs8Dor9gK4OKjw-q_dPWQyVSrDftU",
    {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
      },
    }
  );
}