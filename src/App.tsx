import { Navigate, Route, Routes } from 'react-router-dom';
import LoginPage from './component/pages/LoginPage';
import DashboardPage from './component/pages/DashboardPage';
import EmployeeDirectoryPage from './component/pages/EmployeeDirectoryPage';
import LeavePage from './component/pages/LeavePage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/employee-directory" element={<EmployeeDirectoryPage />} />
        <Route path="/leave-management" element={<LeavePage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default App;
