import { createClient } from '@supabase/supabase-js'
export const supabaseUrl = 'https://jbbgjpffalxjypuaecdz.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpiYmdqcGZmYWx4anlwdWFlY2R6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTg3MjQ2NzYsImV4cCI6MjAzNDMwMDY3Nn0.8-ftxfxtvNOwjqJAQjq40ixnsIlzkAUZeWzfAZNzvqA';
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;
