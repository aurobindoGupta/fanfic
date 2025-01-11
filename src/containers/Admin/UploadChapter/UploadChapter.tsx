import Tiptap from "./Tiptap";
import { useState } from "react";

export default function UploadChapter() {
  const [chapterText, setChapterText] = useState("");
  return (
    <div className="flex flex-col h-screen w-full p-5 border gap-2">
      <div> Enter Details</div>
      <input type="text" />
      {/* <EditorProvider
        slotBefore={<MenuBar />}
        extensions={extensions}
        content={content}
      ></EditorProvider> */}
      <div className="grow overflow-hidden">
        <Tiptap description={chapterText} onChange={setChapterText} />
      </div>
      <button className="bg-white text-black border border-red-400 rounded-md p-2 w-fit" onClick={()=>localStorage.setItem("chapterText",chapterText)}>Submit</button>
    </div>
  );
}
