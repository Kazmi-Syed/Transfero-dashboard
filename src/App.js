import AuthProvider from './context/AuthContext';
import AppRoutes from './routes/app.routes';

function App() {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  );
}

export default App;
