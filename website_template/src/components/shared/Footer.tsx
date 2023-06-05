import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import { FacebookOutlined, InstagramOutlined, TwitterOutlined } from '@ant-design/icons';
import Link from 'next/link';
import {getAuth, GoogleAuthProvider, signInWithPopup, User} from "firebase/auth";
import app from "../../../firebase";
import {Button} from "@/components/shared/Button";

const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.background};
`;

const FooterContent = styled.div`
  display: flex;
  align-items: center;

  & > *:not(:last-child) {
    margin-right: 20px;
  }
`;

const SocialIcon = styled.a`
  color: ${({ theme }) => theme.colors.background};

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

const Footer = () => {
    const auth = getAuth(app);
    const [user, setUser] = useState<User | null>(null);

    const signInWithGoogle = async () => {
        const provider = new GoogleAuthProvider();


        try {
            const result  = await signInWithPopup(auth, provider)as any;
            if (result.additionalUserInfo?.profile) {
                console.log(result.additionalUserInfo.profile);
            }

            const credential = GoogleAuthProvider.credentialFromResult(result);
            if (credential) {
                console.log(credential);
            }

        } catch (error) {

            // @ts-ignore
            const errorCode = error.code;
            // @ts-ignore
            const errorMessage = error.message;
            console.error(`Error: ${errorCode}, ${errorMessage}`);
        }
    }
    const signOut = () => {
        return auth.signOut();
    };
    const handleLogout = async () => {
        try {
            await signOut();
        } catch (error) {
            console.error(error);
            alert('There was an error logging out. Please try again.');
        }
    };
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setUser(user);
        });


        return () => unsubscribe();
    }, []);
    return (
        <StyledFooter>
            <FooterContent>
                <span>© {new Date().getFullYear()} Logo</span>
                <Link href="">Privacy Policy</Link>
                <Link href="">Terms of Service</Link>
                <Button label={`Admin - ${user ? 'Logout' : 'Login'}`} onClick={user ? handleLogout: signInWithGoogle} />
            </FooterContent>
            <FooterContent>
                <SocialIcon href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                    <FacebookOutlined />
                </SocialIcon>
                <SocialIcon href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                    <InstagramOutlined />
                </SocialIcon>
                <SocialIcon href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                    <TwitterOutlined />
                </SocialIcon>
            </FooterContent>
        </StyledFooter>
    );
};

export default Footer;
