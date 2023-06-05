import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import { Menu } from 'antd';
import {getAuth, onAuthStateChanged} from "firebase/auth";
import Link from "next/link";
import {PlusCircleOutlined} from "@ant-design/icons";

const SidebarContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: 20px;
`;

// @ts-ignore
const ShopSidebar = ({ categories, onCategoryClick }) => {
    const [isAdmin, setIsAdmin] = useState(false);

    const auth = getAuth();
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
            if (currentUser) {
                const idTokenResult = await currentUser.getIdTokenResult(true);
                setIsAdmin(!!idTokenResult.claims.admin);
            }
        });

        return () => unsubscribe();
    }, [auth]);
    return (
        <SidebarContainer>
            {isAdmin && <Link href={'/addProduct'}>Add <PlusCircleOutlined /></Link>}

            <Menu mode="vertical">
                {categories.map((category: { id: React.Key | null | undefined; name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; }) => (
                    <Menu.Item key={category.id} onClick={() => onCategoryClick(category)}>{category.name}</Menu.Item>
                ))}
            </Menu>
        </SidebarContainer>
    );
};

export default ShopSidebar;
