import { useNavigate } from "react-router-dom";

export default function BookListView() {
  const navigate = useNavigate();
  return (
    <div className="h-full w-full p-5 flex flex-wrap gap-5 justify-center">
      {[...Array(5)].map((_, idx) => {
        return (
          <div
            key={idx}
            className="w-[30%] h-[30%] p-2 border border-white rounded-md hover:scale-105"
          >
            <div className="font-bold">Book {idx + 1}</div>
            <p>
              Two years after the Battle of Hogwarts, Auror Harry Potter gets an
              interesting job offer. Follow the Man-Who-Conquered in his journey
              of espionage and love while doing what he does best: Saving the
              world. Spy! Harry. Spy! Daphne. Disregards the canon epilogue.
            </p>
            <div className="flex justify-between">
              <button
                className="text-blue-400 hover:text-blue-200"
                onClick={() => navigate("/chapterView")}
              >
                Latest Chap
              </button>
              <button
                className="text-blue-400 hover:text-blue-200"
                onClick={() => navigate(`/chapterList/${"Book" + (idx + 1)}`)}
              >
                Chapter List
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
