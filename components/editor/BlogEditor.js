"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { SimpleEditor } from "@/components/tiptap-templates/simple/simple-editor";
import { useEffect } from "react";

export default function BlogEditor({ value, onChange }) {
  const editor = useEditor({
    extensions: [StarterKit],
    content: value,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
    immediatelyRender: false,
  });

  // Sync editor content when value prop changes
  useEffect(() => {
    if (editor && value !== undefined) {
      const currentContent = editor.getHTML();

      // Only update if the content is actually different
      // This prevents cursor jumping issues
      if (currentContent !== value) {
        editor.commands.setContent(value, false);
      }
    }
  }, [editor, value]);

  if (!editor) return null;

  return (
    <div className="border rounded-md p-2 space-y-2">
      <SimpleEditor className="tiptap-editor" editor={editor} />
    </div>
  );
}
