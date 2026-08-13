const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isValidEmail(value) {
  return typeof value === 'string' && EMAIL_REGEX.test(value.trim());
}

function isBlank(value) {
  return typeof value !== 'string' || value.trim() === '';
}

function escapeHtml(value) {
  return String(value == null ? '' : value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

// Construye una tabla HTML legible a partir de pares [etiqueta, valor].
function buildEmailHtml(title, fields) {
  const rows = fields
    .filter(([, value]) => !isBlank(value))
    .map(([label, value]) => `
      <tr>
        <td style="padding:8px 12px;font-weight:600;color:#111111;border-bottom:1px solid #eeeeee;white-space:nowrap;vertical-align:top;">${escapeHtml(label)}</td>
        <td style="padding:8px 12px;color:#333333;border-bottom:1px solid #eeeeee;">${escapeHtml(value).replace(/\n/g, '<br>')}</td>
      </tr>`)
    .join('');

  return `
    <div style="font-family:Arial,Helvetica,sans-serif;max-width:600px;margin:0 auto;">
      <h2 style="color:#E9251F;margin-bottom:1.25rem;">${escapeHtml(title)}</h2>
      <table style="width:100%;border-collapse:collapse;">${rows}</table>
    </div>`;
}

// "RESEND_FROM_EMAIL" puede llevar formato "Nombre <email@dominio.com>" con
// un dominio ya verificado en Resend. Si no está configurado, se usa el
// remitente de pruebas de Resend (onboarding@resend.dev).
function getFromAddress() {
  return process.env.RESEND_FROM_EMAIL || 'MACAT Web <onboarding@resend.dev>';
}

function readJsonBody(req) {
  if (req.body && typeof req.body === 'object') return req.body;
  if (typeof req.body === 'string' && req.body.trim() !== '') {
    try { return JSON.parse(req.body); } catch { return {}; }
  }
  return {};
}

module.exports = { isValidEmail, isBlank, escapeHtml, buildEmailHtml, getFromAddress, readJsonBody };
