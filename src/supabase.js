import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ljxgppmoqypbyusrjcln.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxqeGdwcG1vcXlwYnl1c3JqY2xuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc5NzU3NTAsImV4cCI6MjA3MzU1MTc1MH0.V4J_ooLBvAFBcOMTsZ9oyDwI8Vq44Mz6yLu8odwg6W4";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
