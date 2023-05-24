import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import GlobalStyle from "./Global/globalStyles";


function App() {
  return (
    <BrowserRouter>
      <GlobalStyle/>
      <Routes>
        <Route path = "/" element={<HomePage/>}/>
     </Routes>
    </BrowserRouter>
  );
}

export default App;
