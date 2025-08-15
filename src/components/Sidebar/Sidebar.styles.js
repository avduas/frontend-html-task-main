import styled, { keyframes, css } from 'styled-components';

export const slideFadeDown = keyframes`
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const slideFadeUp = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

export const Wrapper = styled.div`
  display: flex;
  position: relative;
`;

export const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: ${({ $isOpened }) => ($isOpened ? '220px' : '60px')};
  transition: width 0.3s ease;
  padding: 10px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.sidebar.background.default};
  color: ${({ theme }) => theme.text.default};
  position: relative;
`;

export const ToggleButton = styled.button`
  position: absolute;
  top: 35px;
  left: ${({ $isOpened }) => ($isOpened ? '250px' : '90px')};
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  background: ${({ theme }) => theme.button.background.default};
  color: ${({ theme }) => theme.text.default};
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 6px rgba(0,0,0,0.15);
  transition: left 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.button.background.active};
  }
`;

export const LogoBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${({ $isOpened }) => ($isOpened ? 'flex-start' : 'center')};
  padding: 5px;

  img { height: 40px; }

  span {
    margin-left: 10px;
    font-weight: bold;
    font-size: 16px;
    overflow: hidden;
    white-space: nowrap;
    transition: opacity 0.3s ease, width 0.3s ease;
    opacity: ${({ $isOpened }) => ($isOpened ? 1 : 0)};
    width: ${({ $isOpened }) => ($isOpened ? 'auto' : '0px')};
  }
`;

export const BottomBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
  padding-top: 10px;
  border-top: 1px solid ${({ theme }) => theme.sidebar.border || '#ccc'};
`;
