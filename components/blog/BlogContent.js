import Navbar from "../home/Navbar";

export default function BlogContent({ content }) {
  return (
    <>
      <div
        className="prose prose-lg max-w-none text-gray-700 prose-ul:list-disc prose-ol:list-decimal prose-li:ml-4"
        dangerouslySetInnerHTML={{ __html: content }}
        style={{
          listStylePosition: "outside",
        }}
      ></div>

      <style jsx>{`
        div :global(ul) {
          list-style-type: disc;
          padding-left: 1.5rem;
          margin: 1rem 0;
        }
        div :global(ol) {
          list-style-type: decimal;
          padding-left: 1.5rem;
          margin: 1rem 0;
        }
        div :global(li) {
          margin: 0.5rem 0;
        }
        div :global(li p) {
          margin: 0;
          display: inline;
        }
      `}</style>
    </>
  );
}
