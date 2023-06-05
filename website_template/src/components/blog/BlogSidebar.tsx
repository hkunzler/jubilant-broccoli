import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import { List } from 'antd';
import {getAuth, onAuthStateChanged} from "firebase/auth";
import { PlusCircleOutlined } from '@ant-design/icons';
import Link from 'next/link';

const SidebarContainer = styled.aside`
  background-color: ${({ theme }) => theme.colors.background};
  padding: 20px;
`;

const SidebarTitle = styled.h2`
  font-size: ${({ theme }) => theme.typography.h2};
  margin-bottom: 20px;
`;

const CategoryItem = styled(List.Item)`
  cursor: pointer;
`;

// @ts-ignore
const BlogSidebar = ({ categories, onCategoryClick }) => {
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
    // @ts-ignore
    return (
        <SidebarContainer>
            {isAdmin && <Link href={'/createPost'}>Add <PlusCircleOutlined /></Link>}
            <SidebarTitle>Categories</SidebarTitle>
            <List
                dataSource={categories}
                renderItem={(category: any) => (
                    <CategoryItem onClick={() => onCategoryClick(category)}>
                        {category}
                    </CategoryItem>
                )}
            />
        </SidebarContainer>
    );
};

export default BlogSidebar;
