import styled from 'styled-components'
import { Link } from "react-router-dom";

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

  /* ::-webkit-scrollbar {
    width: 12px;
}
 
::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3); 
    border-radius: 10px;
}
 
::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.5); 
} */
  /* overflow-y: scroll; */


  > main {
    grid-area: content;
    overflow-y: scroll; 

    padding: 40px 0;
    margin: 0 auto;
    display: flex;
    flex-direction: column;   
  }
`
export const Content = styled.div`
  /* padding: 0 123px; */
  max-width: 1137px;
  margin: 0 auto;
  /* grid-area: content; */
  /* overflow-y: scroll;
  scrollbar-color: ${({ theme }) => theme.COLORS.PINK} ${({ theme }) => theme.COLORS.BACKGROUND_900};
  scrollbar-width: thin; */
`
export const Title = styled.div`
    display: flex;
    grid-area: content;
    padding: 0 4px; 
    justify-content: space-between;
    align-items: center;

    /* margin-top: 50px; */
    margin-bottom: 40px;

    > h1 {
      font-size: 32px;
      font-weight: 400;
      color: ${({ theme }) => theme.COLORS.WHITE_900};;
    }
`
export const NewNote = styled(Link)`
  grid-area: new note;
  display: flex;
  align-items: center;
  padding: 25px;

  background-color: ${({ theme }) => theme.COLORS.PINK};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  width: 207px;
  height: 48px;
  border-radius: 8px;

  svg {
    margin-right: 8px;
  }
`