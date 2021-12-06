import { useState } from "react";
import Search from "./components/Search/Search";
import Details from "./components/Details/Details";
import "./App.css";

function App() {
  const [data, setData] = useState({});
  return (
    <div className="page-wrapper">
      <div className="content-wrapper">
        <Search data={data} setData={setData} />
        <Details data={data} />
      </div>
    </div>
  );
}

export default App;
