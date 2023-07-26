import sendEmail from '@/utils/sendEmail';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const body = await req.json();
  const { name, email, message } = body;

  if (!name || !message || !email) throw new Error('All fields are required!');

  try {
    await sendEmail(name, email, message);
    return new NextResponse('Sent success', { status: 200 });
  } catch (error) {
    console.log(error);
  }
}
