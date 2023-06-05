import React, { useState } from 'react';
import { Layout, Menu, Divider, Row, Button, } from 'antd';
import Navbar from './components/navbar';
import { PlusOutlined } from '@ant-design/icons';
import { Modal, Upload } from 'antd';
import Uploader from './components/uploader';





import {
  UserOutlined,
  FileOutlined,
  MenuOutlined,
  PushpinOutlined,
  ClockCircleOutlined,
  HomeOutlined,
  AppstoreOutlined,
  ShoppingCartOutlined,
  PieChartOutlined,
  SettingOutlined,
  TagOutlined,
  FundOutlined,
  DashboardOutlined,
  BulbOutlined,
  PrinterOutlined,
  DesktopOutlined,
  LinkOutlined
} from '@ant-design/icons';


const { Sider, Header, Content, Footer } = Layout;

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [fileSliderVisible, setFileSliderVisible] = useState(false);

  const handleMenuClick = ({ key }) => {
    if (key === '9') {
      setFileSliderVisible(!fileSliderVisible);
    }
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider theme="light" >

        <Menu className='text-center'>
          <Button className='btn-border-blue mt-50'>
          <div>
          <div><PrinterOutlined /></div>
            <div> Print</div>
          </div>
          </Button>

          <Button className='btn-border-white'>
          <div>
          <div><DesktopOutlined /></div>
            <div> NKDS</div>
          </div>
          </Button>
          <Button className='btn-border-white'>
          <div>
          <div><LinkOutlined /></div>
            <div> Connector</div>
          </div>
          </Button>
          
           
           
       
        </Menu>
      </Sider>
      <Layout>
       
        <Layout>
          <Header style={{ background: 'none' }}>
            <Navbar />
           <div className='routing-box'>
            <div className='text-center product-font-primary mt-20'>ROUTING GROUPS AND MAPPING</div>
            <div className='box-gray mx-auto mt-50 perfect-center' >

<div className='d-flex '>
  <Uploader/>
</div>
            </div>
           </div>
          </Header>
          <Content style={{ margin: '16px' }}>
            <Row>
            


            </Row>
           

          </Content>
          <Footer style={{ textAlign: 'center' }}>
           Designed by Gihan Supun
          </Footer>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default App;
