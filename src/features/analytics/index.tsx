import React, {useEffect, useState} from 'react';
import {useForm} from 'react-hook-form';
import {StyledAnalytics} from './styles';
import {Col, Menu, Row} from 'antd';
import Dropdown from '../../Component/dropdown';
import {MenuInfo} from 'rc-menu/lib/interface';
import {currencySymbol} from '../../utils/helper';
import {SuffixInput} from '../../Component/forms';
import SearchIcon from '../../assets/vectors/SearchIcon';
import {DatePicker} from '../../Component/DatePicker';
import Button from '../../Component/button';
import Table from './Table';

const Analytics = () => {
    const [selectedItem, setSelectedItem] = useState('USD');
    const [symbol, setSymbol] = useState('$');
    const { control, errors, handleSubmit } = useForm();
    const handleMenuClick = (values: MenuInfo) => {
        console.log('Hello', values);
        setSelectedItem(values.key);
    };

    useEffect(() => {
        const symbol = currencySymbol(selectedItem);
        setSymbol(symbol);
    }, [selectedItem]);

    const menu = (
        <Menu
            onClick={handleMenuClick}
            style={{ width: '9.7rem', height: '10rem', border: '1px solid #ebebeb', boxShadow: 'none' }}
        >
            <Menu.Item key="KES">KES</Menu.Item>
            <Menu.Item key="NGN">NGN</Menu.Item>
            <Menu.Item key="GHC">GHC</Menu.Item>
        </Menu>
    );
    return (
        <StyledAnalytics>
            <Row gutter={0} justify="start">
                <Col sm={24} md={10} lg={10}>
                    <div className="card card-1">
                        <div className={'first-row'}>
                            <p>Total account balance</p>
                            <Dropdown menu={menu} value={selectedItem} />
                        </div>

                        <p>{`${symbol}5,332.18`}</p>
                        <p>1 USD = 381.97 NGN</p>
                    </div>
                </Col>
                <Col sm={24} md={10} lg={8}>
                    <div className="card card-2">
                        <p>Funds on hold</p>
                        <p>{`${symbol}5,332.18`}</p>
                    </div>
                </Col>
                <Col md={23} style={{ margin: '4rem 0 2rem' }}>
                    <Row align={'middle'} justify={'space-between'}>
                        <Col sm={24} md={3}>
                            <h1 className={'header'}>Payout table</h1>
                        </Col>
                        <Col sm={24} md={14}>
                            <Row gutter={8} justify={'end'} className={'row-start'}>
                                <Col sm={24} md={14} className={'col-position'}>
                                    <div className="search-container">
                                        <SuffixInput
                                            control={control}
                                            errors={errors}
                                            name="search"
                                            placeholder="Search something..."
                                            rules={{ required: { value: true, message: 'enter a search value' } }}
                                            suffix={<SearchIcon />}
                                            defaultValue=""
                                            height={'3.2rem'}
                                        />
                                    </div>
                                </Col>
                                <Col sm={24} md={5} style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                    <DatePicker control={control} name={'calendar'} defaultValue={''} />
                                </Col>
                                <Col sm={3} md={4} style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                    <Button
                                        type="primary"
                                        htmlType="submit"
                                        width="10.4rem"
                                        height="4.2rem"
                                        color={'var(--primary-white)'}
                                        background={'var(--primary-green)'}
                                        radius={'4px'}
                                    >
                                        Payout
                                    </Button>
                                </Col>
                            </Row>
                        </Col>
                        <Col span={24}>
                            <Table />
                        </Col>
                        <Col xs={24} md={24}>
                            <div className={'see-more'}>
                                <p>See more</p>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </StyledAnalytics>
    );
};

export default Analytics;
