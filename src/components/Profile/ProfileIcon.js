import { useState } from 'react';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

function ProfileIcon({ onRouteChange, toggleModal }) {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  const toggle = () => setIsDropDownOpen(prevState => !prevState);

  return (
    <div className='pa4 tc'>
      <Dropdown isOpen={isDropDownOpen} toggle={toggle}>
        <DropdownToggle
          tag='span'
          data-toggle='dropdown'
          aria-expanded={isDropDownOpen}
        >
          <img
            src='http://tachyons.io/img/logo.jpg'
            className='br-100 ba h3 w3 dib'
            alt='avatar'
          />
        </DropdownToggle>
        <DropdownMenu
          right
          className='b--transparent shadow-5'
          style={{
            marginTop: '25px',
            backgroundColor: 'rgba(255,255,255,0.8)',
          }}
        >
          <DropdownItem onClick={toggleModal}>View Profile</DropdownItem>
          <DropdownItem divider />
          <DropdownItem onClick={() => onRouteChange('signout')}>
            Signout
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}

export default ProfileIcon;
