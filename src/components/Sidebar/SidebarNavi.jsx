import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled, { css, keyframes } from 'styled-components';

//animation
export const slideFadeDown = keyframes`
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const slideFadeUp = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`;
//containers 
const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const NavItemWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px;
  border-radius: 6px;
  cursor: pointer;
  justify-content: flex-start;

  background-color: ${({ $isActive, theme }) =>
    $isActive ? theme.sidebar.background.active : 'transparent'};
  color: ${({ $isActive, theme }) =>
    $isActive ? theme.text.active : theme.text.default};

  &:hover {
    background-color: ${({ theme }) => theme.sidebar.background.hover};
    color: ${({ theme }) => theme.text.hover};
  }

  svg {
    flex-shrink: 0;
    /* Убираем анимацию иконки */
    transform: translateX(0);
    transition: none;
  }

  span {
    display: inline-block;
    overflow: hidden;
    white-space: nowrap;
    max-width: 0;
    opacity: 0;
    transform: translateX(-10px);
    transition: opacity 0.3s ease, max-width 0.3s ease, transform 0.3s ease;
    transition-delay: ${({ $isOpened, $index }) =>
      $isOpened ? `${$index * 0.05}s` : '0s'};
  }

  ${({ $isOpened, $index }) =>
    $isOpened &&
    `
      span {
        opacity: 1;
        max-width: 200px;
        transform: translateX(0);
      }
    `}
`;


export const NavItem = ({ icon, title, onClick, isActive, isOpened, index, isBottom }) => (
  <NavItemWrapper
    onClick={onClick}
    $isActive={isActive}
    $isOpened={isOpened}
    $index={index}
    $isBottom={isBottom}
  >
    <FontAwesomeIcon icon={icon} />
    <span>{title}</span>
  </NavItemWrapper>
);

export const Nav = ({ items, activePath, isOpened, onItemClick, isBottom }) => (
  <NavContainer>
    {items.map((item, index) => (
      <NavItem
        key={item.title}
        icon={item.icon}
        title={item.title}
        onClick={() => onItemClick(item.path)}
        isActive={activePath === item.path}
        isOpened={isOpened}
        index={index}
        isBottom={isBottom}
      />
    ))}
  </NavContainer>
);
