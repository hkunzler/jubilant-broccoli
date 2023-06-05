import React, { useState, useEffect } from 'react';
import {getAuth, onAuthStateChanged, User} from 'firebase/auth';
import {client} from "@/lib/api";
import { UploadOutlined } from '@ant-design/icons';
import styled from "styled-components";
import {Form, Upload} from "antd";
import dynamic from "next/dynamic";
import 'quill/dist/quill.snow.css';

const Quill = dynamic(() => import('react-quill'), { ssr: false });

const {Item} = Form;
const StyledForm = styled(Form)`
    display: flex;
    flex-direction: column;
    width: 500px;
    margin: 0 auto;
`;

const Input = styled.input`
    margin-bottom: 1rem;
    padding: 0.5rem;
`;

const Button = styled.button`
    padding: 0.5rem 1rem;
    background-color: #007bff;
    color: white;
    border: none;
    cursor: pointer;

    &:hover {
        background-color: #0056b3;
    }
`;

const CreatePostPage = () => {
    const [user, setUser] = useState<User | null>(null);
    const [isAdmin, setIsAdmin] = useState(false);
    const [loading, setLoading] = useState(true);
    const auth = getAuth();
    const [form] = Form.useForm();
    const handleSubmit = async (values: any) => {
        const { title, content, image } = values;
        const file = image?.[0]?.originFileObj;

        if (file) {
            const reader = new FileReader();
            reader.onloadend = async () => {
                const imageAsset = await client.assets.upload('image', file);

                const post = {
                    _type: "post",
                    title: title,
                    slug: {
                        _type: 'slug',
                        current: title.replace(/\s+/g, '-').toLowerCase(),
                    },
                    coverImage: {
                        _type: 'image',
                        asset: {
                            _type: 'reference',
                            _ref: imageAsset._id,
                        },
                    },
                    body: [
                        {
                            _type: 'block',
                            children: [
                                {
                                    _type: 'span',
                                    text: content
                                },
                            ],
                        },
                    ],
                    publishedAt: new Date().toISOString(),
                }

                try {
                    await client.create(post);
                    alert('Post created successfully!');
                    form.resetFields();
                } catch (error) {
                    console.error('Error creating post:', error);
                }
            }
            reader.readAsDataURL(file);
        } else {
        }
    }




    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
            setUser(currentUser);
            if (currentUser) {
                const idTokenResult = await currentUser.getIdTokenResult(true);
                setIsAdmin(!!idTokenResult.claims.admin);
            }
            setLoading(false);
        });


        return () => unsubscribe();
    }, [auth]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!user) {
        return <p>You must be logged in to create a post.</p>;
    }

    if (!isAdmin) {
        return <p>Not admin</p>;
    }
    if (isAdmin){
        return (
            <div style={{minHeight: `100vh`}}>
                <h2>Create a new post</h2>
                <StyledForm
                    form={form}
                    layout="vertical"
                    onFinish={handleSubmit}
                >
                    <Item
                        name="title"
                        label="Title"
                        rules={[{ required: true, message: 'Please enter a title!' }]}
                    >
                        <Input placeholder="Title" />
                    </Item>

                    <Item
                        name="content"
                        label="Content"
                        rules={[{ required: true, message: 'Please enter the content!' }]}
                    >
                        {typeof document !== 'undefined' && <Quill placeholder={"Content"} />}
                    </Item>

                    <Item
                        name="image"
                        label="Upload Image"
                        valuePropName="fileList"
                        getValueFromEvent={e => e && e.fileList}
                    >
                        <Upload.Dragger name="files" accept="image/*" beforeUpload={() => false}>
                            <p className="ant-upload-drag-icon">
                                <UploadOutlined />
                            </p>
                            <p className="ant-upload-text">Click or drag file to this area to upload</p>
                        </Upload.Dragger>
                    </Item>

                    <Item>
                        <Button>Create Post</Button>
                    </Item>
                </StyledForm>
            </div>
        );
    }
};


    export default CreatePostPage;
