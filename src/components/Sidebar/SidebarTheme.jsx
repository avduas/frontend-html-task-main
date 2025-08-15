import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const ThemeSwitchWrapper = styled.button`
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

export const ThemeSwitch = ({ themeMode, toggleTheme }) => (
  <ThemeSwitchWrapper onClick={toggleTheme}>
    Switch to {themeMode === 'light' ? 'Dark' : 'Light'}
  </ThemeSwitchWrapper>
);
