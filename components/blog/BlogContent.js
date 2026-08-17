export default function BlogContent({ content }) {
  return (
    <div
      className="prose prose-lg max-w-none text-gray-700 prose-ul:list-disc prose-ol:list-decimal prose-li:ml-4 blog-content"
      dangerouslySetInnerHTML={{ __html: content }}
      style={{
        listStylePosition: "outside",
      }}
    ></div>
  );
}
