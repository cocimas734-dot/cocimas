import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')

serve(async (req) => {
    try {
        // Resend envía los correos entrantes como webhook con este formato:
        // { type: 'email.received', created_at: '...', data: { from, to, subject, ... } }
        const event = await req.json()

        console.log('📧 Webhook recibido:', JSON.stringify(event, null, 2))

        // Verificar que sea un evento de correo recibido
        if (event.type !== 'email.received') {
            console.log('⚠️ Evento ignorado, no es email.received:', event.type)
            return new Response(JSON.stringify({ message: 'Event type not supported' }), {
                status: 200,
                headers: { 'Content-Type': 'application/json' }
            })
        }

        // Extraer información del correo entrante desde event.data
        const emailData = event.data || {}
        const from = emailData.from || 'Desconocido'
        const to = emailData.to || []
        const subject = emailData.subject || 'Sin asunto'
        // Resend puede enviar html_body, html, o body
        const htmlContent = emailData.html_body || emailData.html || emailData.body || ''
        const textContent = emailData.text || ''

        console.log(`📬 Procesando correo de: ${from} para: ${to}`)
        console.log(`📋 Datos disponibles:`, Object.keys(emailData))

        // Reenviar el correo a cocimas734@gmail.com usando texto plano
        const emailBody = `
CORREO REENVIADO DESDE INFO@COCIMAS.SBS

De: ${from}
Para: ${Array.isArray(to) ? to.join(', ') : to}
Asunto: ${subject}

--- CONTENIDO DEL MENSAJE ---

${textContent || htmlContent || 'Sin contenido'}

---
Este correo fue reenviado automáticamente.
        `.trim()

        const res = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${RESEND_API_KEY}`,
            },
            body: JSON.stringify({
                from: 'Cocimas Reenvio <onboarding@resend.dev>',
                to: ['cocimas734@gmail.com'],
                subject: `Reenvio: ${subject}`,
                text: emailBody
            }),
        })

        const data = await res.json()

        if (res.ok) {
            console.log('✅ Correo reenviado exitosamente:', data)
            return new Response(JSON.stringify({
                success: true,
                message: 'Correo procesado y reenviado',
                resendResponse: data
            }), {
                status: 200,
                headers: { 'Content-Type': 'application/json' }
            })
        } else {
            console.error('❌ Error al reenviar correo:', data)
            return new Response(JSON.stringify({
                success: false,
                error: 'Error al reenviar correo',
                details: data
            }), {
                status: 500,
                headers: { 'Content-Type': 'application/json' }
            })
        }
    } catch (error) {
        console.error('❌ Error en webhook:', error.message, error.stack)
        return new Response(JSON.stringify({
            error: error.message,
            stack: error.stack,
            success: false
        }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        })
    }
})
