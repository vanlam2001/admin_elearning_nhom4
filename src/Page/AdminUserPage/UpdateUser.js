import { Button, Form, Input, Select, InputNumber, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { adminServ } from '../../service/adminService';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
const { Option } = Select;
export default function UpdateUser() {
    const navigate = useNavigate()
    const [form] = Form.useForm();


    const onFinish = (values) => {
        const data = {
            taiKhoan: values.taiKhoan,
            matKhau: values.matKhau,
            hoTen: values.hoTen,
            soDT: values.soDT,
            maLoaiNguoiDung: values.maLoaiNguoiDung,
            maNhom: values.maNhom,
            email: values.email
        }

        adminServ.putUpdateUser(data)
            .then((res) => {
                console.log(res)
                message.success('Cập nhật thành công!');
                navigate('/admin-users')
            })

            .catch((err) => {
                message.error(err.response.data);
                console.log(err)
            })
    }

    const onFinishFailed = (errInfo) => {
        console.log('Failed', errInfo)
    }


    return (
        <div className='h-full flex flex-col items-center'>
            <h1 className="text-xl text-amber-400 font-bold leading-tight tracking-tight md:text-2xl">
                Cập nhật Người dùng
            </h1>

            <Form
                className='!mt-4'
                method="post"
                encType="multipart/form-data"
                form={form}
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
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
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
                        <Option value="GP01">GP01</Option>
                        <Option value="GP02">GP02</Option>
                        <Option value="GP03">GP03</Option>
                        <Option value="GP04">GP04</Option>
                        <Option value="GP05">GP05</Option>
                        <Option value="GP06">GP06</Option>
                        <Option value="GP07">GP07</Option>
                        <Option value="GP08">GP08</Option>
                        <Option value="GP09">GP09</Option>
                        <Option value="GP10">GP10</Option>
                        <Option value="GP11">GP11</Option>
                        <Option value="GP12">GP12</Option>
                        <Option value="GP13">GP13</Option>
                        <Option value="GP14">GP14</Option>
                        <Option value="GP15">GP15</Option>
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
