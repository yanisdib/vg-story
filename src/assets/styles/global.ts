import { createGlobalStyle } from 'styled-components';


interface DefaultTheme {
    body: string;
    text: string;
}


export default createGlobalStyle<{ theme: DefaultTheme }>`
    *,
    *::after,
    *::before {
        margin: 0;
        padding: 0;
        border: none;
        list-style-type: none;
        box-sizing: border-box; 
    }

    :root {
        /** FONTS */
        --ui-primary-font: "Source Sans Pro", sans-serif;
        --ui-title-font: 'Familjen Grotesk', sans-serif;
        --ui-subtitle-font: 'Manrope', sans-serif;

        /** COLORS */
        --ui-primary-color: #2E5BFF;
        --ui-content-color: #000; 

        /** BREAKPOINTS */
        --ui-media-breakpoints-xs: 375px;
        --ui-media-breakpoints-sm: 744px;
        --ui-media-breakpoints-md: 950px;
        --ui-media-breakpoints-lg: 1128px;
        --ui-media-breakpoints-xl: 1440px;

        /** GUTTERS */
        --ui-padding-x: 100px;
        --ui-padding-y: 100px;

        /** LINE HEIGHTS */
        --ui-title-lh-xs: 1.2em; 
        --ui-title-lh-sm: 1.2em; 
        --ui-title-lh-md: 1.2em; 
        --ui-title-lh-lg: 1.2em; 
        --ui-title-lh-xl: 3.3em; 

        /** BORDERS */
        --form-input-placeholder-color: #8E8E8E;
        --form-input-border-color: #DBDBDB;
        --form-input-border: 2px solid var(--form-input-border-color);
        --form-input-border-radius: 8px;
    }


    /** GLOBAL */

    body {
        background: ${({ theme }) => theme.body};
        color: ${({ theme }) => theme.text};
        font-family: var(--ui-primary-font);
        font-weight: 400;
        -webkit-font-smoothing: antialiased;
        transition: background color 0.25s linear;
    }
    

    a {
        text-decoration: none;

        &:hover{
            text-decoration: underline;
            text-decoration-color: #000;
        }
    }


    /** HEADINGS */

    h1 {
        font-family: var(--ui-title-font);
        font-weight: 500;
        font-size: 4.3em;
        line-height: 70px;
        color: var(--ui-content-color);
    }

    h2 {
        font-family: var(--ui-title-font);
        font-weight: 600;
        font-size: 3.35em;
        line-height: 70px;
        color: var(--ui-content-color);
    }

    h3 {
        font-family: var(--ui-title-font);
        font-weight: 500;
        font-size: 1.5em;
        color: var(--ui-content-color);
    }
    
    h4 {
        font-family: var(--ui-subtitle-font);
        font-weight: 400;
        font-size: 1.2em;
        color: var(--ui-content-color);
    }

    h5 {
        font-family: var(--ui-subtitle-font);
        font-weight: 400;
        font-size: 1.15em;
        color: var(--ui-content-color);
    }

    
    /** FORMS & INPUTS */

    input, textarea {
        width: 100%;
        min-height: 40px;
        padding: 20px;
        border: var(--form-input-border);
        border-radius: var(--form-input-border-radius);
        font-size: 16px;
        resize: none;

        &:focus {
            border: 2px solid #000;
            outline: none;
            transition: border 250ms ease;
        }

        &::placeholder {
            font-family: var(--ui-primary-font);
            font-size: 16px;
            font-weight: 500;
            color: var(--form-input-placeholder-color);
        }
    }

    label {
        font-size: 1em;
        font-weight: 600;
        margin: 15px 0;
    }

    button, input[type=submit] {
        width: fit-content;
        height: fit-content;
        background-color: #000;
        color: #FFF;
        font-family: var(--ui-primary-font);
        font-weight: 300;
        padding: 12px 20px;
        border-radius: 10px;
        cursor: pointer;
    }
`;