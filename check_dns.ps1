# Script para verificar el estado de los registros DNS de cocimas.sbs

Write-Host "`n=== Verificando Registros DNS para cocimas.sbs ===" -ForegroundColor Cyan

# Verificar registro DKIM
Write-Host "`n1. Registro DKIM (resend._domainkey.cocimas.sbs):" -ForegroundColor Yellow
try {
    $dkim = Resolve-DnsName -Name "resend._domainkey.cocimas.sbs" -Type TXT -ErrorAction Stop
    Write-Host "   ✓ DKIM encontrado" -ForegroundColor Green
    $dkim | ForEach-Object { Write-Host "   $($_.Strings)" -ForegroundColor Gray }
}
catch {
    Write-Host "   ✗ DKIM no encontrado (aún propagando...)" -ForegroundColor Red
}

# Verificar registro MX para recibir correos
Write-Host "`n2. Registro MX (para recibir correos):" -ForegroundColor Yellow
try {
    $mx = Resolve-DnsName -Name "cocimas.sbs" -Type MX -ErrorAction Stop
    Write-Host "   ✓ MX encontrado" -ForegroundColor Green
    $mx | ForEach-Object { Write-Host "   Priority: $($_.Preference) - Server: $($_.NameExchange)" -ForegroundColor Gray }
}
catch {
    Write-Host "   ✗ MX no encontrado" -ForegroundColor Red
}

# Verificar registro SPF
Write-Host "`n3. Registro SPF (TXT):" -ForegroundColor Yellow
try {
    $spf = Resolve-DnsName -Name "cocimas.sbs" -Type TXT -ErrorAction Stop | Where-Object { $_.Strings -like "*v=spf1*" }
    if ($spf) {
        Write-Host "   ✓ SPF encontrado" -ForegroundColor Green
        $spf | ForEach-Object { Write-Host "   $($_.Strings)" -ForegroundColor Gray }
    }
    else {
        Write-Host "   ✗ SPF no encontrado" -ForegroundColor Red
    }
}
catch {
    Write-Host "   ✗ SPF no encontrado" -ForegroundColor Red
}

Write-Host "`n=== Fin de la verificación ===" -ForegroundColor Cyan
Write-Host "`nNota: Si algún registro no aparece, espera 15-30 minutos y vuelve a ejecutar este script.`n" -ForegroundColor White
