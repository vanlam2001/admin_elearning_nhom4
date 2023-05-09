import { Button, Form, Input, Select, InputNumber, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { adminServ } from '../../service/adminService';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { checkEmail, checkFullName, checkPassword, checkPhoneVietNam, checkUserName } from './ValidationForm';
const { Option } = Select;
export default function UpdateUser() {
    const navigate = useNavigate()
    const [form] = Form.useForm();

    const onFinish = (values) => {
        let info = { ...values, maNhom: 'GP01' };
        let { matKhau, hoTen, soDT, email } = info
        const data = {
            taiKhoan: values.taiKhoan,
            matKhau: values.matKhau,
            hoTen: values.hoTen,
            soDT: values.soDT,
            maLoaiNguoiDung: values.maLoaiNguoiDung,
            maNhom: values.maNhom,
            email: values.email
        }
        let isValidation = checkPassword(matKhau) && checkFullName(hoTen) && checkEmail(email) && checkPhoneVietNam(soDT)
        if (isValidation) {
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
