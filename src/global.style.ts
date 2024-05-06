import {css} from "@emotion/react";


export const globalStyles = css`
    @import url('https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&display=swap');

    * {
        margin: 0;
        padding: 0
    }

    :root {
        --color-text-main: #711511;
        --color-text-head-foot: #EC3C52;
        --color-background-head-foot: #fbd07e;
        --color-back-card: #fdd8c3;
        --main-font: "Merriweather", "sans-serif";
        --color-enter-form: #FDE3B2;
    }

    html {
        font-size: 20px;
    
    @media screen and (max-width: 768px ){
        html{
        font-size: 3.7vw;
    }
    }
}
`