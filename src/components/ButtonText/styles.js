import styled from 'styled-components'

export const Container = styled.button`
  background: none;
  color: ${({ theme, isActive }) => isActive ? theme.COLORS.WHITE_700 : theme.COLORS.PINK };

  border: none;
  font-size: 16px;

  > svg {
    color:${({ theme }) => theme.COLORS.PINK };
    font-size: 36px;
  }
`