import { BrowserRouter, Routes, Route } from "react-router-dom";
import SiginInPage from "./Pages/SignInPage";
import GlobalStyle from "./Global/globalStyles";
import MainScreen from "./Pages/MainScreen";



function App() {
  return (
    <BrowserRouter>
      <GlobalStyle/>
      <Routes>
        <Route path = "/" element={<SiginInPage/>}/>
        <Route path="/home" element={<MainScreen/>}/>
     </Routes>
    </BrowserRouter>
  );
}

export default App;
