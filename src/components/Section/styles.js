import styled from 'styled-components'

export const Container = styled.section`
  margin: 2px 0;
  display: grid;
  align-items: center;
  color: white;   

   > img {
    margin-top: 24px;

     width: 16px;
     height: 16px;
     border-radius: 50%;
     border: 1.5px solid ${({ theme }) => theme.COLORS.GRAY_100};
   }
   
  > h2 {
    border-bottom-width: 1px;
    border-bottom-color: ${({ theme}) => theme.COLORS.BACKGROUND_700};

    margin-bottom: 24px;

    color: ${({ theme}) => theme.COLORS.GRAY_500};
    font-size: 20px;
    font-weight: 400;
  }

`
// export const Profile = styled.div`
//   display: flex;
//   align-items: center;

//   > img {
//     width: 64px;
//     height: 64px;
//     border-radius: 50%;
//     border: 1.5px solid ${({ theme }) => theme.COLORS.GRAY_100};
//   }

//   > div {
//     display: flex;
//     flex-direction: column;
//     margin-right: 16px;
//     line-height: 24px;

//     span {
//       font-size: 14px;
//       color: ${({ theme }) => theme.COLORS.GRAY_100};
//     }

//     strong {
//       font-size: 18px;
//       color: ${({ theme }) => theme.COLORS.WHITE};
//     }
//   }
// `;

// export const Logout = styled.button`
//   border: none;
//   background: none;

//   > svg {
//     color:${({ theme }) => theme.COLORS.PINK };
//     font-size: 36px;
//   }
// `;