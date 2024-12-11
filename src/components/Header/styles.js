import styled from 'styled-components'
import { Link } from "react-router-dom";

export const Container = styled.header`
  grid-area: header;

  height: 116px;
  width: 100%;

  border-bottom-width: 2px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.GRAY_100};

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 110px;

  background: ${({ theme }) => theme.COLORS.GRAY_900};
  color: ${({ theme }) => theme.COLORS.WHITE_800};
  
  > h1 {
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`

export const Profile = styled(Link)`
  display: flex;
  align-items: center;

  > img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    border: 1.5px solid ${({ theme }) => theme.COLORS.GRAY_100};
  }

  > div {
    display: flex;
    flex-direction: column;
    margin-right: 16px;
    line-height: 24px;
    align-items: end;
    color: ${({ theme }) => theme.COLORS.WHITE_800};


    a {
      font-size: 14px;
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }

    strong {
      font-size: 18px;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }
`;

export const Search = styled.div`
  grid-area: search;
  width: 630px;
`;