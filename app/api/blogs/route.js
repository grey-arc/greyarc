import connectDB from "@/lib/mongoose";
import Blog from "@/app/models/Blog";

// GET: fetch all active blogs (listing)
export async function GET() {
  await connectDB();
  const blogs = await Blog.find({
    active: true,
    author: { $ne: "services" },
  }).sort({ createdAt: -1 });
  return Response.json(blogs);
}

// POST: create or update blog
export async function POST(req) {
  await connectDB();
  const body = await req.json();

  if (!body.title || !body.slug || !body.content) {
    return new Response(JSON.stringify({ error: "Missing required fields" }), {
      status: 400,
    });
  }

  let blog;

  if (body._id) {
    // update existing blog
    blog = await Blog.findByIdAndUpdate(
      body._id,
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
  } else {
    // create new blog
    blog = await Blog.create(body);
  }

  return Response.json(blog);
}
