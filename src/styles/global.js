import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
        color: ${({ theme }) => theme.COLORS.WHITE};

        -webkit-font-smoothing: antialiased;
        

        /* position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 10px; */
        /* overflow-y: scroll; */
        overflow-x: hidden;
    }
    
    body, input, button, textarea, p {
        font-family: "Roboto Slab", serif;
        font-size: 16px;
        outline: none;
    }

    a {
        text-decoration: none;
    }
    
    button, a {
        cursor: pointer;
        transition: filter 0.2s;
    }
    
    button:hover, a:hover {
        filter: brightness(0.9);
    }

    h3 {
        font-family: "Roboto", serif;
        font-size: 16px;
        font-weight: 400;
    }
    
    html {
	/* overflow-y: hidden; */
	/* background-color: transparent; */

    ::-webkit-scrollbar {
    width: 12px;
}
 
::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3); 
    border-radius: 10px;
}
 
::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px pink; 
}
}

`;