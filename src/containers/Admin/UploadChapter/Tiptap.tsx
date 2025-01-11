import { useEditor, EditorContent, Editor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

const MenuBar = (props: { editor: Editor | null }) => {
  const { editor } = props;

  if (!editor) {
    return null;
  }

  return (
    <div className="mb-2">
      <div className="flex gap-2 flex-wrap">
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          disabled={!editor.can().chain().focus().toggleBold().run()}
          className={`hover:bg-blue-200 p-2 border border-black rounded-md ${
            editor.isActive("bold") ? "is-active" : ""
          }`}
        >
          Bold
        </button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          disabled={!editor.can().chain().focus().toggleItalic().run()}
          className={`hover:bg-blue-200 p-2 border border-black rounded-md ${
            editor.isActive("italic") ? "is-active" : ""
          }`}
        >
          Italic
        </button>
        <button
          onClick={() => editor.chain().focus().toggleStrike().run()}
          disabled={!editor.can().chain().focus().toggleStrike().run()}
          className={`hover:bg-blue-200 p-2 border border-black rounded-md ${
            editor.isActive("strike") ? "is-active" : ""
          }`}
        >
          Strike
        </button>

        {/* <button onClick={() => editor.chain().focus().unsetAllMarks().run()}>
          Clear marks
        </button>
        <button onClick={() => editor.chain().focus().clearNodes().run()}>
          Clear nodes
        </button> */}
        <button
          onClick={() => editor.chain().focus().setParagraph().run()}
          className={`hover:bg-blue-200 p-2 border border-black rounded-md ${
            editor.isActive("paragraph") ? "is-active" : ""
          }`}
        >
          Paragraph
        </button>
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 1 }).run()
          }
          className={`hover:bg-blue-200 p-2 border border-black rounded-md ${
            editor.isActive("heading", { level: 1 }) ? "is-active" : ""
          }`}
        >
          H1
        </button>
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
          className={`hover:bg-blue-200 p-2 border border-black rounded-md ${
            editor.isActive("heading", { level: 2 }) ? "is-active" : ""
          }`}
        >
          H2
        </button>
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 3 }).run()
          }
          className={`hover:bg-blue-200 p-2 border border-black rounded-md ${
            editor.isActive("heading", { level: 3 }) ? "is-active" : ""
          }`}
        >
          H3
        </button>
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 4 }).run()
          }
          className={`hover:bg-blue-200 p-2 border border-black rounded-md ${
            editor.isActive("heading", { level: 4 }) ? "is-active" : ""
          }`}
        >
          H4
        </button>
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 5 }).run()
          }
          className={`hover:bg-blue-200 p-2 border border-black rounded-md ${
            editor.isActive("heading", { level: 5 }) ? "is-active" : ""
          }`}
        >
          H5
        </button>
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 6 }).run()
          }
          className={`hover:bg-blue-200 p-2 border border-black rounded-md ${
            editor.isActive("heading", { level: 6 }) ? "is-active" : ""
          }`}
        >
          H6
        </button>

        <button
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={`hover:bg-blue-200 p-2 border border-black rounded-md ${
            editor.isActive("blockquote") ? "is-active" : ""
          }`}
        >
          Blockquote
        </button>

        <button onClick={() => editor.chain().focus().setHardBreak().run()}>
          Hard break
        </button>
        <button
          onClick={() => editor.chain().focus().undo().run()}
          disabled={!editor.can().chain().focus().undo().run()}
        >
          Undo
        </button>
        <button
          onClick={() => editor.chain().focus().redo().run()}
          disabled={!editor.can().chain().focus().redo().run()}
        >
          Redo
        </button>
      </div>
    </div>
  );
};
export default function Tiptap({
  description,
  onChange,
}: {
  description: string;
  onChange: (richtext: string) => void;
}) {
  const editor = useEditor({
    extensions: [StarterKit.configure()],
    content: description,
    editorProps: {
      attributes: {
        class: "rounded-md h-full min-h-[150px] p-5 bg-white",
      },
    },
    onUpdate({ editor }) {
      onChange(editor.getHTML());
      console.log(editor.getHTML());
    },
  });

  return (
    <div className="h-full p-2 flex flex-col bg-white text-black overflow-hidden">
      <MenuBar editor={editor} />
      <EditorContent className="grow overflow-y-auto" editor={editor} />
    </div>
  );
}
