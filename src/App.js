import { BrowserRouter, Routes, Route } from "react-router-dom";
import SiginInPage from "./Pages/SignInPage";
import GlobalStyle from "./Global/globalStyles";
import MainScreen from "./Pages/MainScreen";
import UserInfoProvider from "./Redux/userinfo";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <UserInfoProvider>
        <Routes>
          <Route path="/" element={<SiginInPage />} />
          <Route path="/home" element={<MainScreen />} />
        </Routes>
      </UserInfoProvider>
    </BrowserRouter>
  );
}

export default App;
