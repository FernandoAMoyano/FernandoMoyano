import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Validación básica
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Todos los campos son requeridos" },
        { status: 400 }
      );
    }

    // Validar formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Email inválido" }, { status: 400 });
    }

    // Enviar email con Resend
    const data = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>", // Email verificado de Resend
      to: ["fernandomoyano21@gmail.com"], // Tu email donde recibirás los mensajes
      subject: `Nuevo mensaje de contacto de ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #0d0d0d; padding-bottom: 10px;">
            Nuevo mensaje desde tu portfolio
          </h2>
          
          <div style="margin: 20px 0;">
            <p style="margin: 10px 0;"><strong>Nombre:</strong> ${name}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> ${email}</p>
          </div>
          
          <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <p style="margin: 0;"><strong>Mensaje:</strong></p>
            <p style="margin: 10px 0; white-space: pre-wrap;">${message}</p>
          </div>
          
          <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
          
          <p style="color: #666; font-size: 12px;">
            Este mensaje fue enviado desde el formulario de contacto de tu portfolio.
          </p>
        </div>
      `,
      //  versión de texto plano
      text: `
Nuevo mensaje de contacto

Nombre: ${name}
Email: ${email}

Mensaje:
${message}
      `,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Mensaje enviado correctamente",
        data,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error al enviar email:", error);
    return NextResponse.json(
      { error: "Error al enviar el mensaje. Por favor intenta de nuevo." },
      { status: 500 }
    );
  }
}
