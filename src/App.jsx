import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import SearchMovie from "./pages/SearchMovie";
import Watchlist from "./pages/WatchList";
import NotFound from "./components/NotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<SearchMovie />} />
            <Route path="watchlist" element={<Watchlist />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
