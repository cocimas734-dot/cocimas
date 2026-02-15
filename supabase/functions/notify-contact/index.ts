import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')

serve(async (req) => {
    try {
        const payload = await req.json()
        const { record } = payload

        console.log(`Enviando notificación para: ${record.email}`)

        const res = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${RESEND_API_KEY}`,
            },
            body: JSON.stringify({
                from: 'COCIMÁS <onboarding@resend.dev>',
                to: ['cocimas734@gmail.com'],
                subject: `📬 Nuevo mensaje: ${record.first_name} ${record.last_name}`,
                html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: auto; border: 1px solid #eee; padding: 20px;">
            <h2 style="color: #FFBE26; text-transform: uppercase;">Nuevo mensaje de contacto</h2>
            <p>Has recibido un nuevo mensaje a través de la web <strong>cocimas.vercel.app</strong>:</p>
            <div style="background: #f9f9f9; padding: 15px; border-radius: 5px;">
              <p><strong>Nombre:</strong> ${record.first_name} ${record.last_name}</p>
              <p><strong>Email:</strong> ${record.email}</p>
              <p><strong>Teléfono:</strong> ${record.phone || 'No proporcionado'}</p>
              <p><strong>Mensaje:</strong></p>
              <p style="white-space: pre-wrap;">${record.message}</p>
            </div>
            <p style="font-size: 12px; color: #888; margin-top: 20px;">
              Fecha: ${new Date(record.created_at).toLocaleString('es-VE')}
            </p>
          </div>
        `,
            }),
        })

        const data = await res.json()
        return new Response(JSON.stringify(data), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        })
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        })
    }
})
