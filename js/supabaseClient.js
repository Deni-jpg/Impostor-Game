import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

const sbURL = import.meta.env.VITE_SUPABASE_URL;
const sbKEY = import.meta.env.VITE_SUPABASE_KEY;

export const supabase = createClient(sbURL, sbKEY)
