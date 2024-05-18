import { css } from "@emotion/react";


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
        --color-border-cells: #5B5B5B;
        --color-footer: #fde8c0;
        --color-switch-button:#f5c05c;
        --color-switch-button-hover:#ffb300;
    }
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed,
    figure, figcaption, footer, header, hgroup,
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video, button{
        border:0;
        margin:0;
        outline:0;
        padding:0;
        text-decoration:none;
        box-sizing:border-box;
        -webkit-tap-highlight-color:rgba(0, 0, 0, 0);
    }
    article, aside, details, figcaption, figure,
    footer, header, hgroup, menu, nav, section{
        display:block;
    }
    table{
        border-collapse:collapse;
        border-spacing:0;
    }
    input[type=search]::-webkit-search-cancel-button,
    input[type=search]::-webkit-search-decoration,
    input[type=search]::-webkit-search-results-button,
    input[type=search]::-webkit-search-results-decoration{
        -webkit-appearance:none;
        -moz-appearance:none;
    }

    input[type=search]{
        -webkit-appearance:none;
        -moz-appearance:none;
        -webkit-box-sizing:content-box;
        -moz-box-sizing:content-box;
        box-sizing:content-box;
    }
    :focus{outline:0;}
    textarea{
        overflow:auto;
        vertical-align:top;
        resize:vertical;
    }
    body{line-height:1;}
    img{
        max-width:100%;
        max-height:100%;
    }
    ol, ul{list-style:none;}
    input, textarea, select{
        box-sizing:border-box;
        outline:0;
    }
    body{
        min-width:320px;
        -webkit-text-size-adjust:100%;
        max-width:1920px;
        margin:0 auto;
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