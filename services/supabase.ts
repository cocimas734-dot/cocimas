import { createClient } from '@supabase/supabase-js';

const supabaseUrl = (import.meta as any).env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = (import.meta as any).env.VITE_SUPABASE_ANON_KEY || '';

if (!supabaseUrl || !supabaseAnonKey) {
    console.warn('Supabase credentials missing. Check your .env or Vercel environment variables.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export const getPublishedNews = async () => {
    const { data, error } = await supabase
        .from('noticias')
        .select('*')
        .eq('estado', 'PUBLICADO')
        .order('created_at', { ascending: false });

    if (error) {
        console.error('Error fetching news:', error);
        return [];
    }
    return data;
};
export const getNewsById = async (id: string | number) => {
    const { data, error } = await supabase
        .from('noticias')
        .select('*')
        .eq('id', id)
        .single();

    if (error) {
        console.error('Error fetching news by id:', error);
        return null;
    }
    return data;
};
