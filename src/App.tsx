import MainContent from "./Components/MainContent";
import ProductPage from "./Components/ProductPage";
import Sidebar from "./Components/Sidebar";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import TopSellers from "./Components/TopSellers";
import PopularBlogs from "./Components/PopularBlogs";

const App = () => {
  return (
    <Router>
      <div className="flex justify-between h-screen">
        <Sidebar />
        <div className="rounded w-full flex justify-between flex-wrap">
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/product/:id" element={<ProductPage />} />
          </Routes>
        </div>
        <div>
          <TopSellers />
          <PopularBlogs />
        </div>
      </div>
    </Router>
  );
};

export default App;
