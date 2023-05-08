import React from 'react'
import { Button, Form, Input, Select, InputNumber } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
const { Option } = Select;
export default function AddUser() {
    return (
        <div className='h-full flex flex-col items-center'>
            <h1 className='text-xl text-green-500 font-bold leading-tight tracking-tight md:text-2xl'>
                Thêm khóa học
            </h1>
            <Form
                className='!mt-4'
                method="post"
                encType="multipart/form-data"

                name="basic"
                labelCol={{
                    span: 6,
                }}
                wrapperCol={{
                    span: 24,
                }}
                style={{
                    maxWidth: 600,
                    minWidth: 400,
                }}
                initialValues={{
                    remember: true,
                }}
                autoComplete="off"
                requiredMark={false}

            >
                <Form.Item
                    label='Nhập lại TK'
                    name="taiKhoan"
                    rules={[
                        {
                            required: true,
                            message: 'Vui lòng nhập lại Tài khoản',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label='Mật khẩu mới'
                    name="matKhau"
                    rules={[
                        {
                            required: true,
                            message: 'Vui lòng nhập mật khẩu!',
                        },
                    ]}
                >
                    <Input.Password prefix={<LockOutlined />} placeholder="Your Password" />
                </Form.Item>

                <Form.Item
                    label='Họ tên mới'
                    name="hoTen"
                    rules={[
                        {
                            required: true,
                            message: 'Vui lòng nhập họ tên!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label='SĐT mới'
                    name="soDT"
                    rules={[
                        {
                            required: true,
                            message: 'Vui lòng nhập số điện thoại!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label='Email mới'
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: 'Vui lòng nhập Email!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>




                {/* group code */}
                <Form.Item
                    label='Loại ND mới'
                    name="maLoaiNguoiDung"
                    rules={[
                        {
                            required: true,
                            message: 'Không được để trống!',
                        },

                    ]}
                >
                    <Select
                        allowClear
                    >
                        <Option value="HV">Học viên</Option>
                        <Option value="GV">Giáo viên</Option>
                    </Select>
                </Form.Item>

                <Form.Item
                    label='Mã nhóm mới'
                    name="maNhom"
                    rules={[
                        {
                            required: true,
                            message: 'Không được để trống!',
                        },

                    ]}
                >
                    <Select
                        allowClear
                    >

                    </Select>
                </Form.Item>

                {/* btn */}
                <Form.Item
                    className='text-center'
                    wrapperCol={{
                        offset: 0,
                        span: 24,
                    }}
                >
                    <Button
                        type="primary"
                        htmlType="submit"
                        className='text-white bg-amber-400'
                    >
                        Cập nhật người dùng
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}
