import React from "react";
import { Breadcrumb, Button, Row ,Divider} from 'antd';
import { DownOutlined, SmileOutlined, ShopOutlined, QuestionCircleOutlined, BellOutlined, UserOutlined  } from '@ant-design/icons';

import { Dropdown, Space } from 'antd';


const Navbar = () => {
    return (
        <Row justify="space-between" align="middle" >
            <Breadcrumb
                items={[
                    {
                        title: 'Settings',
                    },
                    {
                        title: 'Print Group Management',
                    },
                ]}
            />
            <Row align="middle">
            
            <Divider type="vertical" />
            <QuestionCircleOutlined className="icon" />
            <BellOutlined className="icon" />
            <UserOutlined className="icon profile-icon perfect-center" />
            </Row>
        </Row>

    )
}

export default Navbar;