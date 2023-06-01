import { NextResponse, NextRequest } from "next/server";
import nodemailer from "nodemailer";
import { IFormValues} from "../../Interfaces/Interfaces";

export async function POST(request: NextRequest) {
	const body: IFormValues = await request.json()

	const transporter = nodemailer.createTransport({
		service: "gmail",
		auth: {
			user: process.env.USER_MAIL,
			pass: process.env.MDP_MAIL,
		},
	});

	const mail = {
		from: `${body.firstName} ${body.lastName} <${body.email}>`,
		to: "Ptitlue@gmail.com",
		subject: body.subject,
		text: `${body.message} \n\n----------\n${body.firstName} ${body.lastName}\n${body.phone}`
	};
	
	transporter.sendMail(mail, (error: any, info: { response: string; }) => {  
		if (error) {  
			return NextResponse.json({ message: error}, { status: 500 });  
		}
	})
	return NextResponse.json({ message: "Mail envoyé"}, { status: 200 });  
}