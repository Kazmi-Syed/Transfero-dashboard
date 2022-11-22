
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./scenes/LoginPage";
import AppComponent from "./scenes/pages/AppComponent"
import Team from "./scenes/team";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppComponent />} > 
          <Route path="/InternalControl" element={<Team/>} />
          <Route path="/SystemManage" element={<Team/>} />
        
        </Route>
        <Route path="/login/*" element={<LoginPage/>} />
          

      </Routes>
    </BrowserRouter>
  );
}

export default App;

