import styled from 'styled-components';
import { device } from '../../utils/device';

const StyledAnalytics = styled.section`
    display: flex;

    .card {
        height: 176px;
        border-radius: 10px;
        padding: 2.5rem 2rem;
        border: 1px solid #ebebeb;
    }
    .card-1 {
        width: 28rem;
        max-width: 36.5rem;
        margin-bottom: 1rem;
        .first-row {
            border-bottom: 1px solid #ebebeb;
            padding-bottom: 1.5rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            p:first-child {
                font-family: var(--founders-regular);
                font-size: 1.4rem;
                font-weight: 400;
                line-height: 17px;
                color: var(--secondary-green);
            }
        }

        p:nth-child(2) {
            margin-top: 1.9rem;
            color: var(--primary-black);
            font-family: var(--space-regular);
            font-size: 3.6rem;
            font-weight: 700;
            line-height: 43px;
        }
        p:last-child {
            color: #a6abb2;
            font-family: var(--founders-regular);
            font-size: 1.6rem;
            font-weight: 400;
            line-height: 19px;
            margin-top: 1rem;
        }

        @media ${device.laptopL} {
            width: 36.5rem;
            margin-bottom: 0;
        }
    }
    .card-2 {
        width: 28rem;
        max-width: 32.5rem;
        background-color: var(--primary-grey);
        p:first-child {
            font-family: var(--founders-regular);
            font-size: 1.4rem;
            font-weight: 400;
            line-height: 17px;
            padding-bottom: 1.8rem;
            border-bottom: 1px solid #ebebeb;
            color: var(--primary-black);
        }
        p:last-child {
            margin-top: 3.3rem;
            color: var(--primary-black);
            font-family: var(--space-regular);
            font-size: 3.6rem;
            font-weight: 700;
            line-height: 43px;
        }

        @media ${device.laptopL} {
            width: 32.5rem;
        }
    }

    .header {
        font-family: var(--space-bold);
        font-size: 1.8rem;
        font-weight: 700;
        line-height: 22px;
        color: var(--primary-black);
        margin-bottom: 1rem;

        @media ${device.laptop} {
            margin-bottom: 0;
        }
    }
    .search-container {
        width: 28rem;
        margin-right: 0;
        margin-bottom: 1rem;
      
      @media ${device.laptop}{
        width: 30rem;
      }

        @media ${device.laptopL} {
            margin-right: 1.5rem;
            margin-bottom: 0;
        }
    }
    .see-more {
        height: 6rem;
        background: var(--primary-white);
        border: 1px solid #ebebeb;
        display: grid;
        place-items: center;
        margin-bottom: 2rem;

        p {
            font-family: var(--founders-regular);
            font-size: 1.8rem;
            font-weight: 600;
            line-height: 22px;
            color: var(--primary-green);
        }
      
      &:hover{
        border: 1px solid var(--secondary-green);
      }
    }
    .row-start {
        justify-content: flex-start;
        @media ${device.laptop} {
            justify-content: flex-end;
        }
    }
    .col-position {
        display: flex;
        justify-content: flex-start;
        @media ${device.laptopL} {
            justify-content: flex-end;
        }
    }
`;

const StyledTable = styled.div`
    margin-top: 2rem;
    .ant-table-thead {
        background-color: var(--primary-grey);
        border-radius: 0.5rem;
        height: 4.8rem;
    }
    .ant-table-thead > tr > th {
        font-family: var(--space-regular);
        font-size: 1.4rem;
        font-weight: 700;
        line-height: 19px;
        color: var(--primary-black);
      
      @media ${device.laptop}{
        font-size: 1.6rem;
      }
    }
    .ant-table-tbody > tr {
        padding-top: 2rem;
        height: 6rem;
    }

    .ant-table-tbody > tr:hover td {
        border-top: 1px solid var(--primary-green);
        border-bottom: 1px solid var(--primary-green);
        background: var(--primary-white);
    }
    .ant-table-tbody > tr:hover td:first-child {
        border-left: 1px solid var(--secondary-green);
        border-radius: 0.5rem 0 0 0.5rem;
        //box-shadow: 0px 2px 30px rgba(0, 0, 0, 0.08);
    }
    .ant-table-tbody > tr:hover td:last-child {
        border-right: 1px solid var(--primary-green);
        border-radius: 0 0.5rem 0.5rem 0;
        //box-shadow: 0px 2px 30px rgba(0, 0, 0, 0.08);
    }
    .ant-table-tbody > tr > td {
        font-family: var(--founders-regular);
        font-size: 1.4rem;
        font-weight: 400;
        line-height: 22px;
        background: #ffffff;
        box-shadow: 0px 1px 0px #ebebeb;
        height: 6rem;
      
      @media ${device.laptop}{
        font-size: 1.8rem;
      }
    }
`;

export { StyledAnalytics, StyledTable };
