interface MailPostProps {
  param: any,
}

export async function POST(param: MailPostProps): Promise<void> {
	console.log(param)
}