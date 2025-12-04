import { NextResponse } from "next/server";

export async function POST(req) {
  const { fileUrl } = await req.json();

  try {
    // Delete file using UploadThing API
    const res = await fetch("https://api.uploadthing.com/v1/delete", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.UPLOADTHING_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ fileUrl }),
    });

    const data = await res.json();
    return NextResponse.json({ success: true, data });
  } catch (err) {
    return NextResponse.json({ success: false, error: "Error deleting data" });
  }
}
