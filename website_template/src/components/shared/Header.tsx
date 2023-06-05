import React, {useContext} from 'react';
import {
    HomeOutlined,
    UserOutlined,
    BookOutlined,
    ShopOutlined,
    PhoneOutlined,
    ShoppingCartOutlined
} from '@ant-design/icons';
import Link from 'next/link';
import styled from 'styled-components';
import {Badge, Layout, Menu} from 'antd';
import { useRouter } from 'next/router';
import {CartContext} from "@/pages/_app";
const { Header } = Layout;

const StyledHeader = styled(Header)`
  align-items: center;
  padding: 0 20px;
  background-color: ${({ theme }) => theme.colors.primary};
`;

const Logo = styled.a`
  color: ${({ theme }) => theme.colors.background};
  font-size: ${({ theme }) => theme.typography.h1};
  font-family: ${({ theme }) => theme.typography.fontPrimary};
  text-decoration: none;
  margin-right: auto;
`;

const StyledMenu = styled(Menu)`
  background-color: ${({ theme }) => theme.colors.primary};
  .ant-menu-overflow-item.ant-menu-item.ant-menu-item-selected {
    display: flex;}
  .ant-menu-overflow-item.ant-menu-item.ant-menu-item-selected::after{
    border-color: ${({ theme }) => theme.colors.accent};
  }
  .ant-menu-overflow-item.ant-menu-item.ant-menu-item-selected {
    color: ${({ theme }) => theme.colors.accent};
  }
  .ant-menu-item, a {
    color: ${({ theme }) => theme.colors.background};
    font-size: ${({ theme }) => theme.typography.h5};

    &:hover {
      color: ${({ theme }) => theme.colors.secondary} !important;
    }
  }
  .ant-menu-overflow-item.ant-menu-item.ant-menu-item:hover::after{
    border-color: ${({ theme }) => theme.colors.secondary} !important;
  }
  .ant-menu-overflow-item.ant-menu-item.ant-menu-item-selected:hover::after{
    border-color: ${({ theme }) => theme.colors.secondary} !important;
    
  }
`;

const HeaderComponent = () => {
    // @ts-ignore
    const { cart } = useContext(CartContext);
    const navItems = [{label: 'home', href: '/', icon: <HomeOutlined />}, {label: 'about', href: '/about', icon: <UserOutlined />}, {label: 'blog', href: '/blog', icon: <BookOutlined />}, {label: 'shop', href: '/shop', icon: <ShopOutlined />}, {label: 'contact', href: '/contact', icon: <PhoneOutlined />},   {href: '/cart', icon: <Badge size="small" count={cart.reduce((total: any, item: { quantity: any; }) => item.quantity, 0)}><ShoppingCartOutlined style={{fontSize: '1.5rem'}}/></Badge>}];

    const router = useRouter();
    const { pathname } = router;
    return (
        <StyledHeader>
            <StyledMenu mode="horizontal" defaultSelectedKeys={[pathname.slice(1) || 'home']}>
                <Logo  href="/">Logo</Logo>
                {navItems.map(({label, href, icon}) =>
                    <Menu.Item key={label} icon={icon}>
                        <Link href={href}>{label}</Link>
                    </Menu.Item>)}
            </StyledMenu>
        </StyledHeader>
    );
};

export default HeaderComponent;
