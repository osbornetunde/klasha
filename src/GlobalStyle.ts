import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import FoundersRegular from './assets/fonts/founders-regular.woff';
import FoundersBold from './assets/fonts/founders-bold.woff'
import SpaceRegular from './assets/fonts/SpaceGrotesk-Regular.ttf';
import SpaceBold from './assets/fonts/SpaceGrotesk-Bold.ttf';

const GlobalStyle = createGlobalStyle`
  @font-face{
    font-family: founders-regular;
    src: url(${FoundersRegular});
    font-style: normal;
    font-display: swap;
  }

  @font-face{
    font-family: founders-bold;
    src: url(${FoundersBold});
    font-style: normal;
    font-display: swap;
  }

  @font-face{
    font-family: space-regular;
    src: url(${SpaceRegular});
    font-style: normal;
    font-display: swap;
  }

  @font-face{
    font-family: space-bold;
    src: url(${SpaceBold});
    font-style: normal;
    font-display: swap;
  }
  
  ${normalize}
  *::before,
  *::after,
  * {
    box-sizing: border-box;
  }
  

  :root {
    --primary-white: #ffffff;
    --founders-regular: founders-regular, sans-serif;
    --space-regular: space-regular, sans-serif;
    --space-bold: space-bold, sans-serif;
    --founders-bold: founders-bold, sans-serif;
    --primary-black: #2A2A2A;
    --primary-blue: #242F57;
    --primary-grey: #F5F5F5;
    --input-background: #FAFCFE;
    --primary-green: #3D8F83;
    --secondary-grey: #A6ABB2;

  }

  html {
    width: 100%;
    font-size: 62.5%;
  }

  html, body {
    padding: 0;
    margin: 0;
    min-height: 100vh;
    max-width: 100vw;
    overflow: hidden;
  }

  body {
    font-family: var(--primary-font);
    width: 100%;
  }

  ::-webkit-scrollbar, .ant-table-body::-webkit-scrollbar {
    width: 0;
    height: .5rem;
  }

  ::-webkit-resizer, .ant-table-body::-webkit-resizer {
    width: .1em;
  }

  ::-webkit-scrollbar-track, .ant-table-body::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }

  ::-webkit-scrollbar-thumb, .ant-table-body::-webkit-scrollbar-thumb {
    background-color: darkgrey;
    outline: 1px solid slategrey;
  }
  
  
  #root {
    width: 100%;
  }

  h1, h2, h3, h4, h5, h6, p, ul {
    padding: 0;
    margin: 0;
  }

  h1, h2, h3, h4, h5, h6, p {
    font-family: var(--primary-font);
  }

  .ant-table-sticky-scroll-bar{
    display: none;
  }

  .ant-form-vertical .ant-form-item-label > label{
    color: var(--primary-blue);
    font-family: var(--primary-font);
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 18px;
  }

  .ant-form-item-control-input .ant-form-item-children-icon {
    top: 2rem !important;
  }
  
  .ant-modal-header{
    border-bottom: 1px solid #DFDFE3;
  }
  
  .ant-modal-header .ant-modal-title{
    font-family: var(--primary-blue);
    font-size: 1.8rem;
    font-weight: 400;
    line-height: 2.3rem;
    text-align: center;

  }

  .ant-menu-vertical .ant-menu-item::after,
  .ant-menu-vertical-right .ant-menu-item::after,
  .ant-menu-vertical-left .ant-menu-item::after,
  .ant-menu-inline .ant-menu-item::after {
    border-right: none;
  }

  .ant-dropdown-menu-item, .ant-dropdown-menu-submenu-title{
    font-weight: 500;
    border-bottom: 1px solid #ebebeb;
    padding: .5rem 1rem;
    font-family: var(--founders-bold);
    color: var(--primary-black);
  }
  .ant-dropdown-menu-item:last-child, .ant-dropdown-menu-submenu-title:last-child{
    border-bottom: none;
  }
`;

export default GlobalStyle;
