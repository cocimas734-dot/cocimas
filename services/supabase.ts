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

export const subscribeToNewsletter = async (email: string) => {
    const { data, error } = await supabase
        .from('suscriptores')
        .insert([{ email }]);

    if (error) {
        if (error.code === '23505') { // Código de error de duplicado en Postgres
            return { success: false, message: 'Este correo ya está suscrito.' };
        }
        console.error('Error subscribing to newsletter:', error);
        return { success: false, message: 'Ocurrió un error al procesar tu suscripción.' };
    }

    return { success: true, message: '¡Te has suscrito correctamente!' };
};
