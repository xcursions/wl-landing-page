import { useState } from "react";
import AllModal from "./components/modal/AllModal";
import MyRouter from "./routes/MyRouter";

function App() {
  return (
    <>
      <MyRouter />
      <AllModal />
    </>
  );
}

export default App;
