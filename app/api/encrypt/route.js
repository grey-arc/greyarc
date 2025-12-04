import { encryptId } from "@/lib/encryption";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  if (!id) {
    return new Response(JSON.stringify({ error: "Missing ID" }), {
      status: 400,
    });
  }

  try {
    const encryptedId = encryptId(id);
    return new Response(JSON.stringify({ encryptedId }), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify({ error: "Error encrypting data" }), {
      status: 500,
    });
  }
}
