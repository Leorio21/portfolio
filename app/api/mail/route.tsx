import { NextResponse, NextRequest } from "next/server";

export async function POST(request: NextRequest) {
	const body = await request.json()
	const data = body.lastName === "LEFEUVRE" ? "Bonjour Dieu" : "coucou du back";

	return NextResponse.json({ data });
}