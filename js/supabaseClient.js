import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';
import { sbURL, sbKEY } from './config.js';

export const supabase = createClient(sbURL, sbKEY)
