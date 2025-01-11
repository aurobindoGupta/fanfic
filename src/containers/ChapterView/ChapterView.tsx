import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

export default function ChapterView() {
  const [chapterText, setChapterText] = useState("Nill");

  useEffect(() => {
    const temp = localStorage.getItem("chapterText");
    if (temp) {
      setChapterText(temp);
    }
  }, []);

  return (
    <div className="p-5 text-lg">
      <ReactMarkdown
        children={chapterText}
        rehypePlugins={[rehypeRaw]}
      ></ReactMarkdown>
    </div>
  );
}
