import connectDB from "@/lib/mongoose";
import Blog from "@/app/models/Blog";
import { decryptId } from "@/lib/encryption";
import mongoose from "mongoose";

export async function GET(req) {
  await connectDB();

  const url = new URL(req.url);
  const id = url.pathname.split("/").pop(); // last segment of path

  let decryptedId;
  try {
    decryptedId = decryptId(decodeURIComponent(id));
  } catch (err) {
    return new Response(JSON.stringify({ error: "Invalid ID" }), {
      status: 400,
    });
  }

  // Validate length
  if (!/^[0-9a-fA-F]{24}$/.test(decryptedId)) {
    return new Response(
      JSON.stringify({ error: "Decrypted ID is not a valid ObjectId" }),
      { status: 400 }
    );
  }

  const blog = await Blog.findOne({
    _id: new mongoose.Types.ObjectId(decryptedId),
    active: true,
  });

  if (!blog)
    return new Response(JSON.stringify({ error: "Blog not found" }), {
      status: 404,
    });

  return Response.json(blog);
}

export async function DELETE(req) {
  await connectDB();

  const url = new URL(req.url);
  const id = url.pathname.split("/").pop();
  let decryptedId;

  try {
    decryptedId = decryptId(decodeURIComponent(id));
  } catch (err) {
    return new Response(JSON.stringify({ error: "Invalid ID" }), {
      status: 400,
    });
  }

  // Validate length
  if (!/^[0-9a-fA-F]{24}$/.test(decryptedId)) {
    return new Response(
      JSON.stringify({ error: "Decrypted ID is not a valid ObjectId" }),
      { status: 400 }
    );
  }
  const blog = await Blog.findByIdAndUpdate(
    new mongoose.Types.ObjectId(decryptedId),
    { active: false },
    { new: true }
  );
  if (!blog) {
    return new Response(JSON.stringify({ error: "Blog not found" }), {
      status: 404,
    });
  }
  return Response.json({ message: "Blog deleted (inactive)", blog });
}

export async function PUT(req) {
  await connectDB();
  const body = await req.json();
  const url = new URL(req.url);
  const id = url.pathname.split("/").pop();

  const blog = await Blog.findByIdAndUpdate(
    new mongoose.Types.ObjectId(id),
    {
      title: body.title,
      slug: body.slug,
      excerpt: body.excerpt,
      content: body.content,
      coverImage: body.coverImage,
      tags: body.tags,
      published: body.published,
      publishedAt: body.publishedAt,
    },
    { new: true }
  );

  if (!blog)
    return new Response(JSON.stringify({ error: "Blog not found" }), {
      status: 404,
    });
  return Response.json(blog);
}

export async function POST(req, { params }) {
  try {
    await connectDB();
    const url = new URL(req.url);
    const id = url.pathname.split("/").pop(); // last segment of path

    let decryptedId;
    try {
      decryptedId = decryptId(decodeURIComponent(id));
    } catch (err) {
      return new Response(JSON.stringify({ error: "Invalid ID" }), {
        status: 400,
      });
    }

    // Validate length
    if (!/^[0-9a-fA-F]{24}$/.test(decryptedId)) {
      return new Response(
        JSON.stringify({ error: "Decrypted ID is not a valid ObjectId" }),
        { status: 400 }
      );
    }

    // Increment the visits count by 1
    const updatedBlog = await Blog.findByIdAndUpdate(
      decryptedId,
      { $inc: { visits: 1 } },
      { new: true } // return the updated document
    );

    if (!updatedBlog) {
      return Response.json({ error: "Blog not found" }, { status: 404 });
    }

    return Response.json({
      message: "Visit count incremented successfully",
      visits: updatedBlog.visits,
    });
  } catch (error) {
    console.error("Error updating visits");
    return Response.json({ error: "Server error" }, { status: 500 });
  }
}
