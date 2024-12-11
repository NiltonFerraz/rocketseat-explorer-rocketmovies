import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    margin: 0 auto;

    display: grid;
    grid-template-rows: 120px auto;

    grid-template-areas:
    "header"
    "content";

    ::-webkit-scrollbar {
        width: .8rem;
        height: .8rem;
    }

    > main {   
        padding: 40px 0;
        margin: 0 auto;
        display: flex;
        flex-direction: column;   
        
        grid-area: content;
        overflow-y: scroll;
        /* Track */

    .tags {
        margin-top: 40px;
    }
    
    > header {
        display: grid;
        align-items: center;
        justify-content: space-between;

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

    .arrowIcon {
        margin-right: 5.5px;
        font-size: 16px;
        color:  ${({ theme }) => theme.COLORS.PINK};
    }
}
`

export const Content = styled.div`
    max-width: 1137px;
    margin: 0 auto;

    .titlePage {
        display: flex;
        align-items: center;
    }

    > button:first-child {
        align-self: end;
    }

    h1 {
        margin-right: 19px;
        margin-top: 24px;
        font-size: 36px;
        font-weight: 500;
        color:  ${({ theme }) => theme.COLORS.WHITE_800};
    }
    
    h3 {
        margin-left: 8px;
        margin-top: 24px;
        font-size: 16px;
        font-weight: 400;
        color:  ${({ theme }) => theme.COLORS.WHITE_800};
    }

    > p {
        font-size: 16px;
        font-weight: 300;
        margin-top: 40px;
        text-align:justify;
        color: ${({ theme }) => theme.COLORS.WHITE_800};
        margin-right: 5px;
    }

    .starIcon {
        margin-top: 24px;
        margin-right: 5.5px;
        font-size: 19px;
        color:  ${({ theme }) => theme.COLORS.PINK};
    }
    
    .autor {
        display: flex;
        align-items: center;
       .clockIcon {
           font-size: 16px;
           color:  ${({ theme }) => theme.COLORS.PINK};
   
           margin-left: 8px;
       }
   
       > img {
        margin-top: 24px;
        width: 16px;
        height: 16px;
        border-radius: 50%;
        border: 1.5px solid ${({ theme }) => theme.COLORS.GRAY_100};
      }

   }

`