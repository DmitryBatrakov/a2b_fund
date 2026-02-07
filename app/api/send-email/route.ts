import { resend } from "@/lib/resend";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const { email, name, phone, message } = await req.json();

        await resend.emails.send({
            from: "new_letter@resend.dev",
            to: ["a2b.tech2025@gmail.com"],
            subject: "Новая заявка с сайта",
            html: `
            <h2>Новая заявка</h2>
            <p><strong>Имя:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p class="margin-top-10"><strong>Телефон:</strong> ${phone}</p>
            <p><strong>Сообщение:</strong><br/>${message ? message : "Нет сообщения"}</p>
          `,
        });

        return NextResponse.json(
            { message: "Email sent successfully" },
            { status: 200 }
        );
    } catch (error) {
        console.error(error);
        return NextResponse.json({ success: false }, { status: 500 });
    }
}
