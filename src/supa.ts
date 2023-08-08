import { createClient } from "@supabase/supabase-js";
import type { Database } from "../database.types";

export const supabase = createClient<Database>(
  import.meta.env.PUBLIC_SUPABASE_URL,
  import.meta.env.PUBLIC_SUPABASE_KEY
);

export async function getChallenge(req: Request) {
  const today = new Date();
  // sort descending based on published date
  // then grab the top most row
  // .eq("created_at", today)
  return await supabase
    .from("challenges")
    .select()
    .order("published_at", { ascending: false });
}
