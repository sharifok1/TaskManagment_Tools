import React, { useEffect } from "react";
import { useSelector } from "react-redux";
// import AddBord from "../Components/AddBord";
// import BordList from "../Components/BordList";
import "./App.css";
import AddBord from "../Components/ProjectManageBoard/AddBord";
import BordList from "../Components/ProjectManageBoard/BordList";

function App() {
  const alldata = useSelector((state) => state);
  useEffect(() => {
    localStorage.setItem("manageState", JSON.stringify(alldata));
  }, [alldata]);

  return (
    <div className="App bg-gradient-to-r from-cyan-900 to-indigo-900 w-full min-h-screen">
      {/* terllor add bord header start */}
      <AddBord />
      {/* terllor add bord header end */}

      {/* terllor bord card  start */}
      <BordList />
      {/* terllor bord card  end */}
    </div>
  );
}

export default App;
