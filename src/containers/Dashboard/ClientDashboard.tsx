import { useNavigate } from "react-router-dom";
import BookListView from "./BookListView";

export default function ClientDashboard() {
  const navigate = useNavigate();
  return (
    <>
      <button
        className="bg-white text-black rounded-md p-2 mb-5"
        onClick={() => navigate("/uploadChap")}
      >
        Upload Chapter
      </button>
      <BookListView />
    </>
  );
}
