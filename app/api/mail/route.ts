import { NextResponse, NextRequest } from "next/server";
import nodemailer from "nodemailer";
import { IFormValues} from "../../Interfaces/Interfaces";

export async function POST(request: NextRequest) {
	const body: IFormValues = await request.json()

	const transporter = nodemailer.createTransport({
		service: process.env.SERVICE_MAIL,
		auth: {
			user: process.env.USER_MAIL,
			pass: process.env.MDP_MAIL,
			clientId: process.env.OAUTH2_ID,
			clientSecret: process.env.OAUTH2_TOKEN,
		},
	});

	const mail = {
		from: `${body.firstName} ${body.lastName} <${body.email}>`,
		to: process.env.DESTINATION_MAIL,
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