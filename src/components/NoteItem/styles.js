import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  
  background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.BACKGROUND_900};
  color: ${({ theme }) => theme.COLORS.GRAY_300};

  border: ${({ theme, isNew }) => isNew ? `1px dashed ${theme.COLORS.GRAY_300}` : "none"};
  margin-right: 24px;
  margin-bottom: 8px;
  border-radius: 10px;
  padding-right: 16px;

  > button { 
    border: none;
    background: none;
    
  }

  .button-delete {
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  .button-add {
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  > input {
    height: 56px;
    width: 100%;
    font-family: "Roboto", serif;

    padding: 12px;

    color: ${({ theme }) => theme.COLORS.WHITE_900};
    background: transparent;

    border: none;    

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }
`