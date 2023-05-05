import { Button, Table, message } from 'antd'
import React, { useEffect, useState } from 'react'
import { adminServ } from '../../service/adminService';
import { headerColums } from './utils';
import { useDispatch } from 'react-redux';
import { setLoadingOff, setLoadingOn } from '../../toolkit/spinnerSlice';
import Spinner from '../../Components/Spinner';



export default function AdminUsersPage() {
    const [userList, setUserList] = useState([]);
    let dispatch = useDispatch();
    useEffect(() => {
        let editUser = () => {
            adminServ.addUser()
                .then((res) => {
                    console.log(res)
                    message.success("Sửa thành công")
                })

                .catch((err) => {
                    console.log(err)
                })
        }

        let handleDeleteUser = (taiKhoan) => {
            adminServ.deleteUser(taiKhoan)
                .then((res) => {
                    console.log(res)
                    message.success("xoá thành công");
                    fetchUserList();
                })
                .catch((err) => {
                    console.log(err)
                    message.error("Đã có lỗi xảy ra");
                })
        }

        let fetchUserList = () => {
            dispatch(setLoadingOn())
            adminServ
                .getUserList()

                .then((res) => {
                    dispatch(setLoadingOff());
                    let userArr = res.data.map((user) => {
                        return {
                            ...user,
                            action: (
                                <Button onClick={() => {
                                    handleDeleteUser(user.taiKhoan);
                                }} type="primary "
                                    danger
                                >
                                    Xoá
                                </Button>
                            ),

                        }
                    })
                    setUserList(userArr);
                    console.log(res)
                })

                .catch((err) => {
                    console.log(err);
                })
        }
        fetchUserList();
    }, []);

    return (
        <div>
            <Spinner></Spinner>
            <Table columns={headerColums} dataSource={userList}></Table>
        </div>
    )
}
