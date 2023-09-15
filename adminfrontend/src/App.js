import './App.css';
import './components/AdministratorManagement/css/dashboard.css'
import './components/AdministratorManagement/css/sidebar.css'
import {BrowserRouter as Router,Routes,Route,} from "react-router-dom";

import LandingPage from './components/LandingPage';
import Login from './components/LoginForm';
import UsersPaths from './components/UsersPaths';

import Dashboard from './components/AdministratorManagement/Dashboard';
import ManageUseres from './components/AdministratorManagement/ManageUsers';
import AddUser from './components/AdministratorManagement/AddUser';
import EditUser from './components/AdministratorManagement/EditUser';
import Backup from './components/AdministratorManagement/backup';
import Report from './components/AdministratorManagement/Report';

import ReservoirDashboard from './components/ReservoirManagement/Dashboard';
import AddReservoir from './components/ReservoirManagement/AddReservoir';
import EditReading from './components/ReservoirManagement/EditReading';
import Readinglistreport from './components/ReservoirManagement/Report';
import ReadingBackup from './components/ReservoirManagement/readingbackup';
import ReadingList from './components/ReservoirManagement/ReadingList';

import AddEmployee from './components/EmployeeManagement/AddEmployee';
import EditEmployee from './components/EmployeeManagement/EditEmployee';
import EmployeeDashboard from './components/EmployeeManagement/EmployeeDashboard';
import EmployeeList from './components/EmployeeManagement/EmployeeList';
import EmployeeView from './components/EmployeeManagement/EmployeeView';
import EmployeeBackup from './components/EmployeeManagement/backup';
import PaySheet from './components/EmployeeManagement/paySheet';

import AddSupplier from './components/SupplierManagement/AddSupplier';
import SupplierDetails from './components/SupplierManagement/SupplierDetails';
import EditSupplier from './components/SupplierManagement/EditSupplier';
import PlaceOrder from './components/SupplierManagement/PlaceOrder';
import OrderDetails from './components/SupplierManagement/OrderDetails';
import EditOrder from './components/SupplierManagement/EditOrder';
import SupplierDashboard from './components/SupplierManagement/Dashboard';
import OrderReportGenerate from './components/SupplierManagement/ReportGenerate';

import FinantialDashboard from './components/FinancialManagement/Dashboard';
import AddAccount from './components/FinancialManagement/AddAccounts';
import EditAccount from './components/FinancialManagement/EditAccounts';
import ManageAccounts from './components/FinancialManagement/ManageAccounts';
import FinantialBackup from './components/FinancialManagement/backup';
import FinantialViewDetails from './components/FinancialManagement/viewDetails';
import Stockreport from './components/FinancialManagement/Session';

import InventoryEditUser from './components/InventoryManagement/EditUser';
import AddOilMart from './components/InventoryManagement/AddOilMart';
import InventoriReport from './components/InventoryManagement/GenarateReport';
import InventoryDashboard from './components/InventoryManagement/InventoriesDashboard';
import InventoryManageUseres from './components/InventoryManagement/ManageUsers';
import InventoryBackup from './components/InventoryManagement/backup';

import AddAttendance from './components/AttendanceManagement/AddAttendance';
import AddShift from './components/AttendanceManagement/AddShift';
import AttendanceDashboard from './components/AttendanceManagement/Dashboard';
import EditAttendance from './components/AttendanceManagement/EditAttendance';
import EditShift from './components/AttendanceManagement/EditShift';
import GenerateReport from './components/AttendanceManagement/GenerateReport';
import ManageAttendance from './components/AttendanceManagement/ManageAttendance';
import ManageShift from './components/AttendanceManagement/ManageShift';
import ABackup from './components/AttendanceManagement/backup';

import AddClientOrder from './components/ClientManagement/AddOrder';
import AddClient from './components/ClientManagement/AddUser';
import ClientDashboard from './components/ClientManagement/Dashboard';
import EditClientOrder from './components/ClientManagement/EditOrder';
import EditClient from './components/ClientManagement/EditUser';
import Ordersreport from './components/ClientManagement/GenerateReport';
import ManageOrders from './components/ClientManagement/ManageOrders';
import ManageClients from './components/ClientManagement/ManageUsers';
import ClientBackup from './components/ClientManagement/backup';

function App() {
  return (
      <div>
        <Router>
          <Routes>
            <Route path='/' element={<LandingPage/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/UsersPaths' element={<UsersPaths/>} />

            {/* Administrator Management */}
            <Route path='/Dashboard' element={<Dashboard/>} />
            <Route path='/Report' element={<Report/>} />
            <Route path='/ManageUseres' element={<ManageUseres/>} />
            <Route path='/AddUser' element={<AddUser/>} />
            <Route path='/EditUser/:id' element={<EditUser/>} />
            <Route path='/Backup' element={<Backup/>} />

            {/* Reservoir Management */}
            <Route path='/ReservoirDashboard' element={<ReservoirDashboard/>} />
            <Route path='/ReadingList' element={<ReadingList/>} />
            <Route path='/AddReservoir' element={<AddReservoir/>} />
            <Route path='/EditReading/:id' element={<EditReading/>} />
            <Route path='/ReadingListReport' element={<Readinglistreport/>} />
            <Route path='/readingbackup' element={<ReadingBackup/>} />

            {/* Employee Management */}
            <Route path="/EmployeeDashboard" element={<EmployeeDashboard />} />
            <Route path="/add" element={<AddEmployee />} />
            <Route path="/EmployeeList" element={<EmployeeList />} />
            <Route path="/update/:id" element={<EmployeeList />} />
            <Route path="/get" element={<EmployeeView />} />
            <Route path='/EditEmployee/:id'  element={<EditEmployee />} />
            <Route path='/EmployeeBackup' element={<EmployeeBackup/>} />
            <Route path='/PaySheet' element={<PaySheet/>} />
            
            {/* Supplier Management */}
            <Route path="/getSup" element={<SupplierDetails/>}/>
            <Route path="/addSup" element={<AddSupplier/>}/>
            <Route path="/getOrder" element={<OrderDetails/>}/>
            <Route path="/addOrder" element={<PlaceOrder/>}/>
            <Route path='/EditSupplier/:id' element={<EditSupplier/>} />
            <Route path='/EditOrder/:id' element={<EditOrder/>} />
            <Route path='/getDashboard' element={<SupplierDashboard/>} />
            <Route path='/Orderreport' element={<OrderReportGenerate/>} />
            
            {/* Financial Management */}
            <Route path="/FinantialDashboard" element={<FinantialDashboard/>}/>
            <Route path="/AddAccount" element={<AddAccount/>}/>
            <Route path='/EditAccount/:id' element={<EditAccount/>} />
            <Route path='/ManageAccounts' element={<ManageAccounts/>} />
            <Route path='/FinantialBackup' element={<FinantialBackup/>} />
            <Route path='/FinantialViewDetails' element={<FinantialViewDetails/>} />
            <Route path='/Stockreport' element={<Stockreport/>} />

            {/* Inventory Management */}
            <Route path="/AddOilMart" element={<AddOilMart/>}/>
            <Route path="/InventoriReport" element={<InventoriReport/>}/>
            <Route path='/InventoryEditUser/:id' element={<InventoryEditUser/>} />
            <Route path='/InventoryDashboard' element={<InventoryDashboard/>} />
            <Route path='/InventoryManageUseres' element={<InventoryManageUseres/>} />
            <Route path='/InventoryBackup' element={<InventoryBackup/>} />

            {/* Attendance Management */}
            <Route path='/AttendanceDashboard' element={<AttendanceDashboard/>} />
            <Route path='/ManageAttendance' element={<ManageAttendance/>} />
            <Route path='/AddAttendance' element={<AddAttendance/>} />
            <Route path='/EditAttendance/:id' element={<EditAttendance/>} />
            <Route path='/ManageShift' element={<ManageShift/>} />
            <Route path='/AddShift' element={<AddShift/>} />
            <Route path='/EditShift/:id' element={<EditShift/>} />
            <Route path='/GenerateReport' element={<GenerateReport/>} />
            <Route path='/ABackup' element={<ABackup/>} />

            {/* Client Management */}
            <Route path='/AddClientOrder' element={<AddClientOrder/>} />
            <Route path='/AddClient' element={<AddClient/>} />
            <Route path='/ClientDashboard' element={<ClientDashboard/>} />
            <Route path='/EditClientOrder/:id' element={<EditClientOrder/>} />
            <Route path='/Ordersreport' element={<Ordersreport/>} />
            <Route path='/ManageOrders' element={<ManageOrders/>} />
            <Route path='/EditClient/:id' element={<EditClient/>} />
            <Route path='/ManageClients' element={<ManageClients/>} />
            <Route path='/ClientBackup' element={<ClientBackup/>} />

          </Routes>
        </Router>
      </div>
  );
}
export default App;