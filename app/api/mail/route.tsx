import { NextResponse, NextRequest } from "next/server";

export async function POST(request: NextRequest) {
	const body = await request.json()
	console.log(body);
	const data = "coucou du back";

	return NextResponse.json({ data });
}