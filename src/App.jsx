import React from 'react';

import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Attendence from './components/attendence/Attendence';
import AttendenceReport from './components/attendence/AttendenceReport';
import AdminSummary from './components/dashboard/AdminSummary';
import AddDepartment from './components/department/AddDepartment';
import DepartmentList from './components/department/DepartmentList';
import EditDepartment from './components/department/EditDepartment';
import Add from './components/employee/Add';
import Edit from './components/employee/Edit';
import List from './components/employee/List';
import View from './components/employee/View';
import Setting from './components/EmployeeDashboard/Setting';
import Summary from './components/EmployeeDashboard/Summary';
import AddLeave from './components/leave/Add';
import Detail from './components/leave/Detail';
import LeaveList from './components/leave/List';
import Table from './components/leave/Table';
import AddSalary from './components/salary/Add';
import ViewSalary from './components/salary/ViewSalary';
import AdminDashboard from './pages/AdminDashboard';
import EmployeeDashboard from './pages/EmployeeDashboard';
import Login from './pages/Login';
import Unauthorized from './pages/Unauthorized';
import PrivateRoutes from './utils/PrivateRoutes';
import RoleBaseRoutes from './utils/RoleBaseRoutes';



function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navigate to='/admin-dashboard' />} ></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/unauthorized' element={<Unauthorized />} />


          <Route path='/admin-dashboard' element={
            <PrivateRoutes>
              <RoleBaseRoutes requiredRole={["admin"]}>
                <AdminDashboard />
              </RoleBaseRoutes>
            </PrivateRoutes>
          }>
            <Route index element={<AdminSummary />}></Route>
            <Route path='/admin-dashboard/departments' element={<DepartmentList />} />
            <Route path='/admin-dashboard/add-department' element={<AddDepartment />} />
            <Route path='/admin-dashboard/department/:id' element={<EditDepartment />} />

            <Route path='/admin-dashboard/employees' element={<List />} />
            <Route path='/admin-dashboard/add-employee' element={<Add />} />
            <Route path='/admin-dashboard/employees/:id' element={<View />} />
            <Route path='/admin-dashboard/employees/edit/:id' element={<Edit />} />
            <Route path='/admin-dashboard/employees/salary/:id' element={<ViewSalary />} />
            <Route path='/admin-dashboard/salary/add' element={<AddSalary />} />
            <Route path='/admin-dashboard/leaves' element={<Table />}></Route>
            <Route path='/admin-dashboard/leaves/:id' element={<Detail />}></Route>
            <Route path='/admin-dashboard/employees/leaves/:id' element={<LeaveList />}></Route>
            <Route path='/admin-dashboard/setting' element={<Setting />}></Route>
            <Route path='/admin-dashboard/attendence' element={<Attendence />}></Route>
            <Route path='/admin-dashboard/attendence-report' element={<AttendenceReport />}></Route>

          </Route>
          <Route
            path='/employee-dashboard'
            element={
              <PrivateRoutes>
                <RoleBaseRoutes requiredRole={["employee"]}>
                  <EmployeeDashboard />
                </RoleBaseRoutes>
              </PrivateRoutes>
            }
          >
            <Route index element={<Summary />}></Route>
            <Route path='/employee-dashboard/profile/:id' element={<View />}></Route>
            <Route path='/employee-dashboard/leaves/:id' element={<LeaveList />}></Route>
            <Route path='/employee-dashboard/add-leave' element={<AddLeave />}></Route>
            <Route path='/employee-dashboard/salary/:id' element={<ViewSalary />}></Route>
            <Route path='/employee-dashboard/setting' element={<Setting />}></Route>


          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
