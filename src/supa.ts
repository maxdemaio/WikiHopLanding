import { PostgrestSingleResponse, createClient } from "@supabase/supabase-js";
import type { Database } from "../database.types";

export interface Challenge {
  created_at: string;
  from: string;
  id: string;
  is_approved: boolean;
  published_at: string | null;
  to: string;
}

export const supabase = createClient<Database>(
  import.meta.env.PUBLIC_SUPABASE_URL,
  import.meta.env.PUBLIC_SUPABASE_KEY
);

export async function getChallenge(
  req: Request
): Promise<PostgrestSingleResponse<Challenge[]>> {
  // sort descending based on published date
  // then grab the top most row
  return await supabase
    .from("challenges")
    .select()
    .order("published_at", { ascending: false });
}
