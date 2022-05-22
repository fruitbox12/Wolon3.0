import {
  FaHeart,
  FaHandsHelping,
  FaVoteYea,
  FaPaperPlane,
  FaRegComments,
  FaTachometerAlt,
  FaCompress,
} from 'react-icons/fa';

import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarContent,
  SidebarHeader,
  SidebarFooter,
} from 'react-pro-sidebar';

import 'react-pro-sidebar/dist/css/styles.css';
import { WebsiteRights } from '../Footer/FooterElements';
import { Img } from '../InfoSection/InfoElements';
import { NavLogo, NavBtnClick } from '../Navbar/NavbarElements';

import { Link } from 'react-router-dom';

import './index.scss';

const VerticalNavbar = ({ collapsed, handleCollapse, toggled }) => {
  return (
    <ProSidebar collapsed={collapsed} toggled={toggled} className='box'>
      <SidebarHeader>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '10px',
            paddingRight: '20px',
          }}
        >
          {!collapsed && (
            <NavLogo to='/dapp'>
              <Img
                src={require('../../images/logo-text-white.png')}
                alt='Logo'
              />
            </NavLogo>
          )}
          <NavBtnClick onClick={() => handleCollapse(!collapsed)}>
            <FaCompress />
          </NavBtnClick>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <Menu>
          <MenuItem icon={<FaTachometerAlt />}>
            Dashboard
            <Link to='/dapp' />
          </MenuItem>
          <MenuItem icon={<FaHeart />}>
            Help Others
            <Link to='/dapp/help' />
          </MenuItem>
          <MenuItem icon={<FaPaperPlane />}>
            messages
            <Link to='/dapp/messages' />
          </MenuItem>
          <MenuItem icon={<FaRegComments />}>
            Chat Room
            <Link to='/dapp/chat' />
          </MenuItem>
          <MenuItem icon={<FaVoteYea />}>
            Voting Hub
            <Link to='/dapp/vote' />
          </MenuItem>
          <MenuItem icon={<FaHandsHelping />}>
            Support Us
            <Link to='/dapp/support' />
          </MenuItem>
        </Menu>
      </SidebarContent>

      {!collapsed && (
        <SidebarFooter>
          <div style={{ margin: '20px' }}>
            <WebsiteRights>
              Wolon<sup> 3.0</sup> © 2022 All rights reserved.
            </WebsiteRights>
          </div>
        </SidebarFooter>
      )}
    </ProSidebar>
  );
};

export default VerticalNavbar;