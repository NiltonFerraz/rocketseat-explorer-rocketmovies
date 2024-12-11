import styled from 'styled-components'

export const Container = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};

  border: none;
  border-radius: 10px;

  padding: 32px;
  margin-bottom: 16px;
  text-align: left;

  > h1 {
    flex: 1;
    text-align: left;
    font-weight: 700;
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.WHITE_900};
  }

  > div {
    text-align: left;
    font-size: 11px;
    color: ${({ theme }) => theme.COLORS.PINK};
    margin-top: 8.75px;
    
  }

  > p {
    color: orange;
    text-align: justify;
    margin-top: 15px;
    color: ${({ theme }) => theme.COLORS.GRAY_500};
  }

  > footer {
    width: 100%;
    display: flex;
    margin-top: 0px;
  }
`