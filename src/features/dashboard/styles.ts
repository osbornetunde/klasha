import styled from 'styled-components';
import {device} from "../../utils/device";

const StyledLayoutContainer = styled.div`
    max-height: 100vh;
    .site-layout-sub-header-background {
      padding: 3.3rem 4rem .5rem;
        background-color: var(--primary-white);
        height: 8.2rem;
        display: flex;
        justify-content: flex-end;
    }

    .site-layout-background {
        padding-top: 0;
        background: var(--primary-white);
    }
  
  .sidebar-main-title{
    font-family: var(--founders-bold);
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 22px;
    color:var(--primary-black);
    margin-left: 4rem;
    margin-bottom: 1.3rem;
  }

    .menu-item,
    .ant-menu-inline .ant-menu-submenu-title {
        padding-left: 5.3rem !important;
        height: 5.2rem;
        display: flex;
        align-items: center;
        color: var(--secondary-grey);
        font-family: var(--founders-regular);
        font-size: 1.4rem;
        font-weight: 400;
        line-height: 17px;
    }

    .menu-item span,
    .ant-menu-inline .ant-menu-submenu-title span {
        margin-left: 1.5rem;
    }

    .ant-menu-item a {
        color: var(--secondary-grey);
    }

    .ant-menu-item.menu-item.ant-menu-item-selected {
        background: var(--primary-grey);
        font-weight: 700;
        color: var(--primary-black);
    }

    .ant-menu-item.menu-item.ant-menu-item-selected path {
        fill: var(--primary-green);
    }
  

    .header-content {
        display: flex;
        justify-content: space-between;
        width: 100%;
        align-items: center;
        height: 5rem;
    }
  
  .page-title{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    
    p:first-child{
      font-family: var(--space-regular);
      font-size: 1.8rem;
      font-weight: 700;
      line-height: 22px;
      margin-bottom: .8rem;
      color:var(--primary-black);
    }
    p:last-child{
      font-family: var(--founders-regular);
      font-size: 1.2rem;
      font-weight: 400;
      line-height: 14px;
      color: var(--secondary-grey);
    }
  }
  
  .profile-wrapper{
    width: 40%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    @media ${device.laptopL}{
      width: 10%;
    }
  }

    .ant-page-header {
        padding: 0;
        margin-bottom: 2.3rem;
    }
    .ant-page-header-heading-title {
        font-family: var(--founders-regular);
        font-size: 2.4rem;
        font-weight: 400;
        line-height: 3rem;
        color: var(--primary-blue);
    }

    .content {
        background: var(--primary-white);
        display: flex;
        flex-direction: column;
        flex: 1 1 100%;
    }

    .title {
        padding: 3.6rem 0 2.6rem 3.9rem;
        display: flex;
        justify-content: flex-start;
        border-bottom: 1px solid #dfdfe3;

        p {
            font-family: var(--founders-regular);
            font-size: 1.8rem;
            font-weight: 400;
            line-height: 23px;
            color: var(--primary-blue);
        }
    }

    .header-option {
        cursor: pointer;
        font-family: var(--founders-regular);
        font-size: 1.6rem;
        font-weight: 400;
        line-height: 2.3rem;
        color: var(--primary-blue);
        &:hover {
            color: deepskyblue;
        }
    }
`;

export { StyledLayoutContainer };
