import { Button, Form, Input, Select, InputNumber } from 'antd';
import React from 'react'
const { Option } = Select;
export default function UpdateUser() {
    return (
        <div className='h-full flex flex-col items-center'>
            <h1 className="text-xl text-amber-400 font-bold leading-tight tracking-tight md:text-2xl">
                Cập nhật Người dùng
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
                <Form.Item hidden
                    label='Tài khoản'

                    rules={[
                        {
                            required: true,
                            message: 'Vui lòng nhập Tài khoản',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item hidden
                    label='Mật khẩu'
                    rules={[
                        {
                            required: true,
                            message: 'Vui lòng nhập mật khẩu!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label='Họ tên'
                    rules={[
                        {
                            required: true,
                            message: 'Vui lòng nhập tên khoá học!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label='Số điện thoại'

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
                    label='Email'

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
                    label='Mã nhóm'
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
                        <Option>GP01</Option>

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
