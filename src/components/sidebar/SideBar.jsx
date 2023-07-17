import { Link } from 'react-router-dom';

import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import StoreIcon from '@mui/icons-material/Store';
import PaymentIcon from '@mui/icons-material/Payment';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AssessmentIcon from '@mui/icons-material/Assessment';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsSystemDaydreamOutlinedIcon from '@mui/icons-material/SettingsSystemDaydreamOutlined';
import PermDataSettingIcon from '@mui/icons-material/PermDataSetting';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

import { DarkModeContext } from '../../context/darkModeContext';


import './sidebar.scss';
import { useContext } from 'react';

const SideBar = () => {
  const { dispatch } = useContext(DarkModeContext);

  return (
      <div className='sidebar'>
          <div className="top">
            <Link to={'/'}>
              <span className="logo">Tamale Frank</span>
            </Link>
          </div>
          <hr />
          <div className="center">
              <ul>
                  <p className="title">MAIN</p>
                  <Link to={'/'}>
                  <li>
                    <DashboardIcon />
                    <span>Dashboard</span>
                  </li>
                  </Link>
                  <p className="title">LISTS</p>
                  <Link to={'/users'}>
                  <li>
                    <PersonOutlineOutlinedIcon /> 
                    <span>Users</span>
                  </li>
                  </Link>
                  <Link to={'/products'}>
                  <li>
                    <StoreIcon />
                    <span>Products</span>
                  </li>
                  </Link>
                  <Link to={''}>
                  <li>
                    <PaymentIcon />
                    <span>Orders</span>
                  </li>
                  </Link>
                  <Link to={''}>
                  <li>
                    <LocalShippingIcon />
                    <span>Delivery</span>
                  </li>
                  </Link>
                  <p className="title">USEFUL</p>
                  <Link to={''}>
                  <li>
                    <AssessmentIcon />
                    <span>Stats</span>
                  </li>
                  </Link>
                  <Link to={''}>
                  <li>
                    <NotificationsNoneIcon />
                    <span>Notifications</span>
                  </li>
                  </Link>
                  <p className="title">SERVICE</p>
                  <Link to={''}>
                  <li>
                    <SettingsSystemDaydreamOutlinedIcon />
                    <span>System Health</span>
                  </li>
                  </Link>
                  <Link to={''}>
                  <li>
                    <PermDataSettingIcon />
                    <span>Logs</span>
                  </li>
                  </Link>
                  <Link to={''}>
                  <li>
                    <SettingsApplicationsIcon />
                    <span>Settings</span>
                  </li>
                  </Link>
                  <p className="title">USER</p>
                  <Link to={''}>
                  <li>
                    <AccountCircleOutlinedIcon />
                    <span>Profile</span>
                  </li>
                  </Link>
                  <Link to={''}>
                  <li>
                    <LogoutOutlinedIcon />
                    <span>Logout</span>
                  </li>
                  </Link>
              </ul>
          </div>
          <div className="bottom">
              <div className="color--option" onClick={() => dispatch({type: 'LIGHT'})}></div>
              <div className="color--option" onClick={() => dispatch({type: 'DARK'})}></div>
          </div>
    </div>
  )
}

export default SideBar