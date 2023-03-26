import { createClient } from '@supabase/supabase-js';

import type { Database } from '@utils/database';

const supabaseUrl: string = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey: string = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabaseServiceKey: string = process.env.SUPABASE_SERVICE_KEY!;

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);

export const getServiceSupabase = () => createClient<Database>(supabaseUrl, supabaseServiceKey);
