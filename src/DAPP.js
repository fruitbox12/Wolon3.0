import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/dashboard';
import VerticalNavbar from './components/VerticalNavBar';
import { useState } from 'react';
import HelpOthers from './pages/helpOthers';

const DAPP = () => {
  const [collapsed, setCollapsed] = useState(false);
  const handleCollapsedChange = (checked) => {
    setCollapsed(checked);
  };

  return (
    <div className={`app`}>
      <VerticalNavbar
        collapsed={collapsed}
        toggled={true}
        handleCollapse={handleCollapsedChange}
      />
      <Routes>
        <Route index element={<Dashboard />} />
        <Route path='help' element={<HelpOthers />} />
        <Route path='messages' element={<Dashboard />} />
        <Route path='chat' element={<Dashboard />} />
        <Route path='vote' element={<Dashboard />} />
        <Route path='support' element={<Dashboard />} />
      </Routes>
    </div>
  );
};

export default DAPP;