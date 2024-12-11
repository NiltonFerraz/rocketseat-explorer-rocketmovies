import styled from 'styled-components'

export const Container = styled.span`
font-family: "Roboto", serif;
  font-size: 12px;
  padding: 5px 14px;
  border-radius: 5px;
  margin-right: 6px;
  margin-top: 40px;
  color: ${({ theme }) => theme.COLORS.WHITE_900};
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
`