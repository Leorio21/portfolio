import { NextResponse, NextRequest } from "next/server";
import { IFormValues} from "../../Interfaces/Interfaces";
import Mailjet from "node-mailjet";

export async function POST(request: NextRequest) {
	const body: IFormValues = await request.json()

	const mailjet = new Mailjet({
		apiKey: process.env.API_KEY,
		apiSecret: process.env.SECRET_KEY
	});

	const mail = mailjet.post("send", { version: "v3.1" }).request({
		Messages: [
			{
				From: {
					Email: process.env.DESTINATION_MAIL,
					Name: "Contact Portfolio",
				},
				To: [
					{
						Email: process.env.DESTINATION_MAIL,
						Name: "Me",
					},
				],
				Subject: body.subject,
				TextPart: `${body.message}\n\n-----\n${body.firstName} ${body.lastName}\n${body.email}\n${body.phone}`,
			},
		],
	})
	try {
		await mail
	} catch (error) {
		return NextResponse.json({ message: error, status: 500}, { status: 500 });
	}
	return NextResponse.json({ message: "Mail envoyé", status: 200}, { status: 200 });  
}