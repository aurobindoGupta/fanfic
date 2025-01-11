import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Dashboard from "./containers/Dashboard/Dashboard.tsx";
import Layout from "./layout/Layout.tsx";
import ChapterView from "./containers/ChapterView/ChapterView.tsx";
import UploadChapter from "./containers/Admin/UploadChapter/UploadChapter.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route path="" element={<Dashboard />} />
      <Route path="chapterView/" element={<ChapterView />} />
      <Route path="uploadChap/" element={<UploadChapter />} />
    </Route>
  )
);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
