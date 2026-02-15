# Diagnóstico: Correo de Prueba No Funcionó

## Posibles Causas

### 1. ❌ Webhook NO configurado en Resend
**Más probable**: Si no configuraste el webhook en Resend, los correos nunca llegarán a la Edge Function.

**Solución**:
1. Ve a https://resend.com/webhooks
2. Verifica si existe un webhook con la URL: `https://jwooqmczjrfjkjtxclwa.supabase.co/functions/v1/resend-inbound`
3. Si NO existe, créalo:
   - Endpoint URL: `https://jwooqmczjrfjkjtxclwa.supabase.co/functions/v1/resend-inbound`
   - Events: ✓ email.received
   - Status: Active

### 2. ❌ "Enable Receiving" NO activado
Si el toggle "Enable Receiving" no está activado en el dominio, Resend no aceptará correos entrantes.

**Solución**:
1. Ve a https://resend.com/domains
2. Haz clic en `cocimas.sbs`
3. Activa el toggle "Enable Receiving" (debe estar en verde)

### 3. ❌ API Key de Resend no configurada
La Edge Function necesita la API key para reenviar correos.

**Verificar**:
```bash
npx supabase secrets list --project-ref jwooqmczjrfjkjtxclwa
```

**Configurar** (si falta):
```bash
npx supabase secrets set RESEND_API_KEY=tu_api_key_de_resend --project-ref jwooqmczjrfjkjtxclwa
```

### 4. ❌ Correo enviado antes de configurar todo
Si enviaste el correo antes de:
- Activar "Enable Receiving"
- Configurar el webhook
- Esperar la propagación DNS

El correo simplemente rebotó.

**Solución**: Envía otro correo de prueba DESPUÉS de verificar los puntos 1, 2 y 3.

## 🔍 Cómo Verificar Cada Paso

### Paso 1: Verificar Webhook en Resend
1. Ve a https://resend.com/webhooks
2. Debe haber un webhook con:
   - URL: `https://jwooqmczjrfjkjtxclwa.supabase.co/functions/v1/resend-inbound`
   - Status: Active (verde)
   - Event: email.received (marcado)

### Paso 2: Verificar "Enable Receiving"
1. Ve a https://resend.com/domains
2. Haz clic en `cocimas.sbs`
3. El toggle "Enable Receiving" debe estar en verde

### Paso 3: Verificar API Key
Ejecuta este comando para ver si la API key está configurada:
```bash
npx supabase secrets list --project-ref jwooqmczjrfjkjtxclwa
```

Deberías ver `RESEND_API_KEY` en la lista.

### Paso 4: Ver Logs en Supabase Dashboard
1. Ve a https://supabase.com/dashboard/project/jwooqmczjrfjkjtxclwa/functions/resend-inbound/logs
2. Verifica si hay alguna entrada cuando enviaste el correo
3. Si NO hay entradas, significa que el webhook nunca se disparó (problema en Resend)
4. Si HAY entradas con errores, revisa el mensaje de error

## 🧪 Prueba Paso a Paso

1. **Verifica** que "Enable Receiving" esté activado
2. **Verifica** que el webhook esté configurado y activo
3. **Verifica** que la API key esté configurada
4. **Envía** un nuevo correo de prueba a `info@cocimas.sbs`
5. **Espera** 1-2 minutos
6. **Revisa** Gmail (`cocimas734@gmail.com`)
7. **Revisa** los logs en Supabase (link arriba)

## 📸 Capturas que Necesito Ver

Para diagnosticar mejor, toma capturas de:
1. La página de webhooks en Resend (https://resend.com/webhooks)
2. La configuración del dominio `cocimas.sbs` en Resend (mostrando "Enable Receiving")
3. Los logs de la función en Supabase (si hay alguno)
