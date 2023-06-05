import React, { useState, useEffect } from 'react';
import {getAuth, onAuthStateChanged, User} from 'firebase/auth';
import {client, getAllCategories} from "@/lib/api"; // or wherever your firebase.js file is
import { UploadOutlined } from '@ant-design/icons';
import styled from "styled-components";
import {Form, Select, Upload} from "antd";
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

const TextArea = styled.textarea`
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

// @ts-ignore
const AddProductPage = ({allCategories}) => {
    const [user, setUser] = useState<User | null>(null);
    const [isAdmin, setIsAdmin] = useState(false);
    const [loading, setLoading] = useState(true);
    const auth = getAuth();
    const [form] = Form.useForm();

    const handleSubmit = async (values: any) => {
        const { title, content, image, price, category } = values;
        const file = image[0].originFileObj;

        if (file) {
            const reader = new FileReader();
            reader.onloadend = async () => {
                const imageAsset = await client.assets.upload('image', file);

                const product = {
                    _type: "product",
                    name: title,
                    slug: {
                        _type: 'slug',
                        current: title.replace(/\s+/g, '-').toLowerCase(),
                    },
                    image: {
                        _type: 'image',
                        asset: {
                            _type: 'reference',
                            _ref: imageAsset._id,
                        },
                    },
                    description: [
                        {
                            _type: 'block',
                            children: [
                                {
                                    _type: 'span',
                                    text: content,
                                },
                            ],
                        },
                    ],
                    price,
                    category: {
                        _type: 'reference',
                        _ref: category,
                    },
                    publishedAt: new Date().toISOString(),
                }

                try {
                    await client.create(product);
                    alert('Product created successfully!');
                    form.resetFields();
                } catch (error) {
                    console.error('Error creating product:', error);
                }
            }
            reader.readAsDataURL(file);
        } else {
            alert("Please upload a file.");
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
        return <p>You must be logged in to create a product.</p>;
    }

    if (!isAdmin) {
        return <p>Not admin</p>;
    }

    if (isAdmin){



        return (
            <div style={{minHeight: `100vh`}}>
                <h2>Create a new product</h2>
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
                        <TextArea placeholder="Content" />
                    </Item>

                    <Item
                        name="image"
                        label="Upload Image"
                        valuePropName="fileList"
                        getValueFromEvent={e => e && e.fileList}
                        rules={[{ required: true, message: 'Please upload an image!' }]}
                    >
                        <Upload.Dragger name="files" accept="image/*" beforeUpload={() => false}>
                            <p className="ant-upload-drag-icon">
                                <UploadOutlined />
                            </p>
                            <p className="ant-upload-text">Click or drag file to this area to upload</p>
                        </Upload.Dragger>
                    </Item>

                    <Item
                        name="price"
                        label="Price"
                        rules={[{ required: true, message: 'Please enter the price!' }]}
                    >
                        <Input type="number" placeholder="Price" />
                    </Item>

                    <Item
                        name="category"
                        label="Category"
                        rules={[{ required: true, message: 'Please select the category!' }]}
                    >
                        <Select placeholder="Select a category">
                            {allCategories?.map((category: any, key: number) => (
                                <Select.Option key={key} value={category._id}>{category.name}</Select.Option>

                            ))}
                        </Select>
                    </Item>
                    <Item>
                        <Button>Create product</Button>
                    </Item>
                </StyledForm>
            </div>
        );
    }
};

export default AddProductPage;

export async function getStaticProps() {
    const allCategories = await getAllCategories();

    return {
        props: {  allCategories },
    };}