import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from '../scenes/LoginPage';
import AppComponent from '../scenes/pages/AppComponent';
import Team from '../scenes/team';
import AuthenticatedRoutes from './private.routes';
import Dashboard from '../scenes/dashboard/index';
import NewCollaborators from '../scenes/NewCollaborators';
import ResetPassword from '../scenes/ResetLogin/ResetPassword'
export default function AppRoutes() {
  return (
    <BrowserRouter>
      <AuthenticatedRoutes>
        <Routes>
          <Route path="/" element={<AppComponent />}>
           
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/InternalControl" element={<Team />} />
            <Route path="/SystemManage" element={<Team />} />
            <Route path="/NewCollaborators" element={<NewCollaborators />} />
          </Route>
        </Routes>
      </AuthenticatedRoutes>
      <Routes>
      <Route path="/ResetLogin" element={<ResetPassword />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}
