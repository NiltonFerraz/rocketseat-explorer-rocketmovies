import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0 auto;

  display: grid;
  grid-template-rows: 120px auto;
  color: ${({ theme }) => theme.COLORS.WHITE_800};
  
  grid-template-areas: 
  "header"
  "content";

  ::-webkit-scrollbar {
        width: .8rem;
        height: .8rem;
    }

  > main {
    grid-area: content;
    overflow-y: scroll;

    padding: 40px 0;
        margin: 0 auto;
        display: flex;
        flex-direction: column;  
    

    > header {
      display: grid;
      align-items: center;
      justify-content: space-between;

      /* margin-bottom: 36px; */
      /* margin: 38px auto;
      max-width: 1137px; */
    }

    a {
      font-size: 16px;
      color: ${({ theme }) => theme.COLORS.PINK};
      margin-bottom: 24px;
      margin-top: 40px;
 
      svg {
        color: ${({ theme }) => theme.COLORS.PINK};
        font-size: 16px;
        margin-right: 8px;      
      }
    }
  }
`
  
export const Content = styled.div`
    margin: 0 auto;
    max-width: 1137px;
`

export const Form = styled.form`
  margin: 38px auto;
  width: 1137px;
    
  > Textarea {
      margin-bottom: 40px;
  }

  .buttons {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 40px ;
  }

  .boxleft {
    background: ${({ theme }) => theme.COLORS.BLACK};
}
  
  .tituloenota {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 40px ;

    justify-content: space-between;
    align-items: center;
    margin-bottom: 40px;
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    background: ${({ theme }) => theme.COLORS.BLACK};
    color: ${({ theme }) => theme.COLORS.WHITE_900};
    border-radius: 8px;
    margin-bottom: 40px;

    padding: 16px;
  }

`