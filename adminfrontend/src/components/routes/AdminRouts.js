import '../AdministratorManagement/css/dashboard.css'
import '../AdministratorManagement/css/sidebar.css'
import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";
import Dashboard from '../AdministratorManagement/Dashboard';
import ManageUseres from '../AdministratorManagement/ManageUsers';
import AddUser from '../AdministratorManagement/AddUser';
import EditUser from '../AdministratorManagement/EditUser';
import Backup from '../AdministratorManagement/backup';
import Report from '../AdministratorManagement/Report';
import Sidebar from '../AdministratorManagement/Sidebar';

function AdminRoutess() {
  return (
      <div>
      <Sidebar />
        <Router>
          <Routes>
            <Route path='/' element={<Dashboard/>} />
            <Route path='/Report' element={<Report/>} />
            <Route path='/Dashboard' element={<Dashboard/>} />
            <Route path='/ManageUseres' element={<ManageUseres/>} />
            <Route path='/AddUser' element={<AddUser/>} />
            <Route path='/EditUser/:id' element={<EditUser/>} />
            <Route path='/Backup' element={<Backup/>} />
          </Routes>
        </Router>
      </div>
  );
}
export default AdminRoutess;