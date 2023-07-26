import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  return new NextResponse('Get all data', { status: 200 });
}
