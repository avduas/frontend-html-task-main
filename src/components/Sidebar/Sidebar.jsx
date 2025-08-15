import { useState } from 'react';
import styled, { ThemeProvider, keyframes, css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../../assets/logo.png';
import PropTypes from 'prop-types';
import { lightTheme, darkTheme } from '../../themes';

const routes = [
  { title: 'Home', icon: 'fas-solid fa-house', path: '/' },
  { title: 'Sales', icon: 'chart-line', path: '/sales' },
  { title: 'Costs', icon: 'chart-column', path: '/costs' },
  { title: 'Payments', icon: 'wallet', path: '/payments' },
  { title: 'Finances', icon: 'chart-pie', path: '/finances' },
  { title: 'Messages', icon: 'envelope', path: '/messages' },
];

const bottomRoutes = [
  { title: 'Settings', icon: 'sliders', path: '/settings' },
  { title: 'Support', icon: 'phone-volume', path: '/support' },
];

// animations
const slideFadeDown = keyframes`
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
`;

const slideFadeUp = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`;

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
`;

const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.sidebar.background.default};
  color: ${({ theme }) => theme.text.default};
  width: ${({ $isOpened }) => ($isOpened ? '220px' : '60px')};
  transition: width 0.3s ease;
  padding: 10px;
  overflow: hidden;
  position: relative;
  z-index: 1;
`;

const ToggleButton = styled.button`
  position: absolute;
  top: 35px; 
  left: ${({ $isOpened }) => ($isOpened ? '250px' : '90px')}; 
  background: ${({ theme }) => theme.button.background.default};
  border: none;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  cursor: pointer;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.text.default};
  box-shadow: 0 2px 6px rgba(0,0,0,0.15);
  &:hover {
    background: ${({ theme }) => theme.button.background.active};
  }
  transition: left 0.3s ease;
`;

const LogoBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${({ $isOpened }) => ($isOpened ? 'flex-start' : 'center')};
  padding: 5px;
  img {
    height: 40px;
  }
  span {
    margin-left: 10px;
    font-weight: bold;
    font-size: 16px;
  }
`;

const Nav = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const NavItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ $isOpened }) => ($isOpened ? '10px' : '0')};
  padding: 8px;
  border-radius: 6px;
  cursor: pointer;
  justify-content: ${({ $isOpened }) => ($isOpened ? 'flex-start' : 'center')};
  transition: background 0.2s ease;
  &:hover {
    background-color: ${({ theme }) => theme.sidebar.background.hover};
    color: ${({ theme }) => theme.text.hover};
  }
  ${({ $isOpened, $isBottom }) =>
    $isOpened &&
    css`
      animation: ${$isBottom ? slideFadeUp : slideFadeDown} 0.35s ease forwards;
    `}

  svg, span {
    ${({ $isOpened }) =>
    $isOpened &&
    css`
        animation: ${fadeIn} 0.4s ease forwards;
      `}
  }
`;

const BottomNav = styled(Nav)`
  margin-top: 20px;
`;

const ThemeSwitch = styled.button`
  margin-top: auto;
  padding: 6px 12px;
  background: ${({ theme }) => theme.button.background.default};
  border: none;
  color: ${({ theme }) => theme.text.default};
  border-radius: 4px;
  cursor: pointer;
  animation: ${fadeIn} 0.3s ease forwards;
  &:hover {
    background: ${({ theme }) => theme.button.background.active};
  }
`;

const Sidebar = ({ color }) => {
  const [isOpened, setIsOpened] = useState(true);
  const [themeMode, setThemeMode] = useState(color);

  const goToRoute = (path) => {
    console.log(`Clicked route: ${path}`);
  };

  const toggleSidebar = () => setIsOpened((v) => !v);
  const toggleTheme = () => setThemeMode((t) => (t === 'light' ? 'dark' : 'light'));

  const theme = themeMode === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <SidebarContainer $isOpened={isOpened}>
          <div>
            <LogoBlock $isOpened={isOpened}>
              <img src={logo} alt="logo" />
              {isOpened && <span>TensorFlow</span>}
            </LogoBlock>

            <Nav>
              {routes.map((route) => (
                <NavItem
                  key={route.title}
                  onClick={() => goToRoute(route.path)}
                  $isOpened={isOpened}
                >
                  <FontAwesomeIcon icon={route.icon} />
                  {isOpened && <span>{route.title}</span>}
                </NavItem>
              ))}
            </Nav>
          </div>

          <div>
            <BottomNav>
              {bottomRoutes.map((route) => (
                <NavItem
                  key={route.title}
                  onClick={() => goToRoute(route.path)}
                  $isOpened={isOpened}
                  $isBottom
                >
                  <FontAwesomeIcon icon={route.icon} />
                  {isOpened && <span>{route.title}</span>}
                </NavItem>
              ))}
            </BottomNav>

            {isOpened && (
              <ThemeSwitch onClick={toggleTheme}>
                Switch to {themeMode === 'light' ? 'Dark' : 'Light'}
              </ThemeSwitch>
            )}
          </div>
        </SidebarContainer>

        <ToggleButton
          $isOpened={isOpened}
          onClick={toggleSidebar}
        >
          <FontAwesomeIcon icon={isOpened ? 'angle-left' : 'angle-right'} />
        </ToggleButton>
      </Wrapper>
    </ThemeProvider>
  );
};

Sidebar.propTypes = {
  color: PropTypes.oneOf(['light', 'dark']),
};

export default Sidebar;
