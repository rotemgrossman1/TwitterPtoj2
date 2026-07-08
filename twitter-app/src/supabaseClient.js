import { createClient } from '@supabase/supabase-js'

// Hardcoded securely with your brand-new database credentials
const supabaseUrl = 'https://fgalhbgbxphhgccczsqb.supabase.co'
const supabaseAnonKey = 'sb_publishable_j3m4Ai9vg3TlLt7U5ZW7yg_kRKcrkYi'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)