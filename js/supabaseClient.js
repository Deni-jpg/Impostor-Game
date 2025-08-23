import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const supabaseUrl = "https://euqtttqkxrgdpjfruxmd.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV1cXR0dHFreHJnZHBqZnJ1eG1kIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU4OTQyNzEsImV4cCI6MjA3MTQ3MDI3MX0.CEylCj2rSiASA1BZhnUBhAhVnjXNQzRB3aXsLGkkYyA";

export const supabase = createClient(supabaseUrl, supabaseKey)
