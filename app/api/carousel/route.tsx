import { NextResponse } from "next/server";
import { readdir } from "node:fs/promises";
import path from "node:path";

export  async function GET(): Promise<any> {

	const imgBdd: string[] = []
	let data: string[] = [];
	try {
		data = await readdir("./public/carousel");
	}
	catch (error) {
		console.log(error)
	}

	if (data.length !== 0) {
		data.forEach((file) => path.extname(file) === ".webp" && imgBdd.push(file))
	}
	
	return NextResponse.json({data: imgBdd})
}