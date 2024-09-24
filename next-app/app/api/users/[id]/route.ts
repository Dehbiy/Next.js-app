import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";

export function GET(
  request: NextRequest,
  { params: { id } }: { params: { id: number } }
) {
  if (id > 10)
    return NextResponse.json({ error: "user not found" }, { status: 404 });

  return NextResponse.json([
    {
      id: 1,
      name: "Jacob",
    },
  ]);
}

export async function POST(
  request: NextRequest,
  { params: { id } }: { params: { id: number } }
) {
  const body = await request.json();
  const isValid = schema.safeParse(body)

  if (!isValid.success)
    return NextResponse.json(isValid.error, { status: 400 });
  return NextResponse.json({ id, name: body.name });
}
