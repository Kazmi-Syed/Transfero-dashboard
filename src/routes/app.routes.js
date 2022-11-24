import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from '../scenes/LoginPage';
import AppComponent from '../scenes/pages/AppComponent';
import Team from '../scenes/team';
import AuthenticatedRoutes from './private.routes';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <AuthenticatedRoutes>
        <Routes>
          <Route path="/" element={<AppComponent />}>
            <Route path="/InternalControl" element={<Team />} />
            <Route path="/SystemManage" element={<Team />} />
          </Route>
        </Routes>
      </AuthenticatedRoutes>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}
