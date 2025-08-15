import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { SidebarContainer, Wrapper, ToggleButton, LogoBlock, BottomBlock } from './Sidebar.styles';
import { Nav, NavItem } from './SidebarNavi';
import { ThemeSwitch } from './SidebarTheme';
import { routes, bottomRoutes } from './routes';
import { lightTheme, darkTheme } from '../../themes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import logo from '../../assets/logo.png';

const Sidebar = ({ color }) => {
  const [isOpened, setIsOpened] = useState(true);
  const [themeMode, setThemeMode] = useState(color);
  const [activePath, setActivePath] = useState('/');

  const goToRoute = (path) => setActivePath(path);
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

            <Nav items={routes} activePath={activePath} isOpened={isOpened} onItemClick={goToRoute} />
          </div>

          <BottomBlock>
            <Nav items={bottomRoutes} activePath={activePath} isOpened={isOpened} onItemClick={goToRoute} isBottom />
            <ThemeSwitch themeMode={themeMode} toggleTheme={toggleTheme} />
          </BottomBlock>
        </SidebarContainer>

        <ToggleButton $isOpened={isOpened} onClick={toggleSidebar}>
          <FontAwesomeIcon icon={isOpened ? faAngleLeft : faAngleRight} />
        </ToggleButton>
      </Wrapper>
    </ThemeProvider>
  );
};

export default Sidebar;
