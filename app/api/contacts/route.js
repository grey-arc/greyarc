import connectDB from "@/lib/mongoose";
import Contact from "@/app/models/Contactdata";

export async function GET() {
  try {
    await connectDB();

    const contacts = await Contact.find().sort({ createdAt: -1 });

    return Response.json(contacts, { status: 200 });
  } catch (error) {
    console.error("Error fetching contacts");
    return Response.json(
      { error: "Failed to fetch contacts" },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  await connectDB();
  const body = await req.json();

  const email = body?.email;
  const phone = body?.phone;
  let contact;

  // Check if data already exists by email/phone
  const existing = await Contact.findOne({
    $or: [{ email }, { phone }],
  });

  if (existing) {
    contact = await Contact.findByIdAndUpdate(existing._id, {
      name: body.name,
      email: body.email,
      company: body.company,
      phone: body.phone,
      message: body.message,
    });
  } else {
    contact = await Contact.create(body);
  }

  return Response.json(contact);
}
