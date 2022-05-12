/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable import/no-unresolved */
import React, { useMemo } from 'react';
import styled from 'styled-components';
import logo from 'ui/img/logo.png';
import { useNavigate } from 'react-router';
import { MenuItem } from 'primereact/menuitem';
import { deviceSize, iconsMap } from 'ui/utils';
import { useTranslation } from 'react-i18next';
import { Menubar } from '../../atoms/menubar/menubar';

const backgroundNavbar = 'rgba(255, 255, 255)';

const StyledMenubar = styled(Menubar)`
  border: 0;
  border-radius: 0;
  height: 4rem;
  padding-top: 0;
  padding-bottom: 0;
  background-color: ${backgroundNavbar};
  .p-menubar-root-list {
    margin-right: auto;
    box-shadow: none;
  }
  .p-menubar-root-list, .p-menuitem, .p-menuitem-link {
    height: 100%;
  }
  .p-menuitem {
    min-width: 12.5rem;
    background-color: ${backgroundNavbar};
  }
  .p-menubar-root-list > .p-menuitem > .p-menuitem-link {
    border-radius: 0;
    justify-content: center;
    @media screen and (max-width: ${deviceSize.tablet}px) {
      justify-content: left;
    }
  }
  .p-menubar-root-list > .p-menu-separator {
    border-top: 0;
    width: 1px;
    height: 60%;
    background: #0000004d;
    @media screen and (max-width: ${deviceSize.tablet}px) {
      margin: 0;
      width: 0;
      height: 0;
      background: ${backgroundNavbar};
    }
  }
  .p-menubar-start {
    z-index: 1002;
  }
  .p-menubar-button {
    width: 4rem;
    height: 4rem;
  }
`;

const Start = styled.a`
    img {
      height: 6rem;
      margin-top: 3rem;
      max-width: 6rem;
      @media screen and (max-width: ${deviceSize.tablet}px) {
        height: 4rem;
        margin-top: unset;
        max-width: 4rem;
      }
    }
`;

const Navbar = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const start = useMemo(() => (
    <Start className="mr-2" href="/">
      <img alt="logo" src={logo} />
    </Start>
  ), []);

  const navbarItems = useMemo<MenuItem[]>(() => [
    {
      icon: `pi font-bold pi-fw ${iconsMap.homePage}`,
      label: t('papalDay'),
      expanded: false,
      command: () => navigate('/rejestracja'),
    },
    {
      separator: true,
    },
    {
      icon: `pi font-bold pi-fw ${iconsMap.staff}`,
      label: t('registerStaff'),
      expanded: false,
      command: () => navigate('/rejestracja'),
    },
    {
      separator: true,
    },
    {
      icon: `pi font-bold pi-fw ${iconsMap.user}`,
      label: t('logIn'),
      expanded: false,
      command: () => navigate('/'),
    },
  ], []);

  const end = useMemo(() => (
    <div className="flex flex-row h-full">
      <div className="p-menuitem" style={{ minWidth: 'unset' }}>
        <a href="https://www.facebook.com/FundacjaDzieloNowegoTysiaclecia" role="menuitem" className="p-menuitem-link justify-content-center" aria-haspopup="false" target="_blank" rel="noopener noreferrer">
          <span className="p-menuitem-icon pi font-bold pi-fw pi-facebook text-blue-700 mr-0" />
        </a>
      </div>
      <div className="p-menuitem" style={{ minWidth: 'unset' }}>
        <a href="https://www.instagram.com/fundacja_dzielo/" role="menuitem" className="p-menuitem-link justify-content-center" aria-haspopup="false" target="_blank" rel="noopener noreferrer">
          <span className="p-menuitem-icon pi font-bold pi-fw pi-instagram text-yellow-800 mr-0" />
        </a>
      </div>
      <div className="p-menuitem" style={{ minWidth: 'unset' }}>
        <a href="https://www.youtube.com/user/DzieloTV" role="menuitem" className="p-menuitem-link justify-content-center" aria-haspopup="false" target="_blank" rel="noopener noreferrer">
          <span className="p-menuitem-icon pi font-bold pi-fw pi-youtube text-red-700 mr-0" />
        </a>
      </div>
    </div>
  ), []);

  return (
    <StyledMenubar className="justify-content-between lg:justify-content-start" start={start} end={end} model={navbarItems} />
  );
};

export { Navbar };
