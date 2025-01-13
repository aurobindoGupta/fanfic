import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { useNavigate } from "react-router-dom";
import rehypeRaw from "rehype-raw";

export default function ChapterView() {
  const [chapterText, setChapterText] = useState("Nill");

  const navigate = useNavigate();

  useEffect(() => {
    const temp = localStorage.getItem("chapterText");
    if (temp) {
      setChapterText(temp);
    }
  }, []);

  return (
    <div className="p-5 text-lg">
      <button
        className="bg-white text-black rounded-md p-2 mb-5"
        onClick={() => navigate("/")}
      >
        Home
      </button>
      <ReactMarkdown
        children={chapterText}
        rehypePlugins={[rehypeRaw]}
      ></ReactMarkdown>
    </div>
  );
}
