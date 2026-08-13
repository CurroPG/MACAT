const { Resend } = require('resend');
const { isValidEmail, isBlank, buildEmailHtml, getFromAddress, readJsonBody } = require('./_utils');

const DESTINO = 'malagacineteam@gmail.com';

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ success: false, error: 'Método no permitido.' });
    return;
  }

  const body = readJsonBody(req);
  const { nombre, email, carrera, depto, motivo, web } = body;

  // Honeypot: si un bot ha rellenado este campo oculto, respondemos OK
  // sin enviar ningún email.
  if (!isBlank(web)) {
    res.status(200).json({ success: true });
    return;
  }

  if (isBlank(nombre) || isBlank(email)) {
    res.status(400).json({ success: false, error: 'Nombre y email son obligatorios.' });
    return;
  }

  if (!isValidEmail(email)) {
    res.status(400).json({ success: false, error: 'El email no tiene un formato válido.' });
    return;
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);

    const { error } = await resend.emails.send({
      from: getFromAddress(),
      to: DESTINO,
      replyTo: email.trim(),
      subject: 'Nueva solicitud - Únete a MACAT',
      html: buildEmailHtml('Nueva solicitud para unirse a MACAT', [
        ['Nombre', nombre],
        ['Email', email],
        ['Carrera y facultad', carrera],
        ['Departamento de interés', depto],
        ['Motivo', motivo],
      ]),
    });

    if (error) {
      res.status(500).json({ success: false, error: 'No se ha podido enviar la solicitud. Inténtalo de nuevo más tarde.' });
      return;
    }

    res.status(200).json({ success: true });
  } catch (err) {
    res.status(500).json({ success: false, error: 'No se ha podido enviar la solicitud. Inténtalo de nuevo más tarde.' });
  }
};
