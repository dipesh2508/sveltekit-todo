import { createClient } from '@supabase/supabase-js'

const SupabaseURL = import.meta.env.VITE_PUBLIC_SUPABASE_URL;
const SupabaseAnonKey = import.meta.env.VITE_PUBLIC_SUPABASE_ANON_KEY;

// Create a single supabase client for interacting with your database
export const supabase = createClient(SupabaseURL, SupabaseAnonKey);