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
        let handleDeleteUser = (taiKhoan) => {
            adminServ.deleteUser(taiKhoan)
                .then((res) => {
                    message.success("xoá thành công");
                    fetchUserList();
                })
                .catch((err) => {
                    message.error(err.response.data);
                })
        }

        let fetchUserList = () => {
            dispatch(setLoadingOn())
            adminServ
                .getUserList()
                .then((res) => {
                    dispatch(setLoadingOff());
                    let userArr = res.data.map((user, index) => {
                        return {
                            ...user,
                            key: index,
                            action: (
                                <Button onClick={() => {
                                    handleDeleteUser(user.taiKhoan);
                                }} type="primary "
                                    danger
                                >
                                    Xoá
                                </Button>
                            )
                        }
                    })
                    setUserList(userArr);
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
