import { Button, Input, Table, message } from 'antd'
import React, { useEffect, useState } from 'react'
import { adminServ } from '../../service/adminService';
import { headerColums } from './utils';
import { useDispatch } from 'react-redux';
import { setLoadingOff, setLoadingOn } from '../../toolkit/spinnerSlice';
import Spinner from '../../Components/Spinner';
import { useSearchParams } from 'react-router-dom';
import qs from "qs";



export default function AdminUsersPage() {
    const [userList, setUserList] = useState([]);
    const [searchValue, setSearchValue] = useSearchParams();
    let dispatch = useDispatch();

    useEffect(() => {
        dispatch(setLoadingOn())
        fetchUserList();
    }, []);

    // chức năng xóa
    let handleDeleteUser = (taiKhoan) => {
        adminServ.deleteUser(taiKhoan)
            .then((res) => {
                console.log(res)
                message.success("xoá thành công");
                fetchUserList();
            })
            .catch((err) => {
                console.log(err)
                message.error(err.response.data);
            })
    }
    // Danh sách user
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

    // chức năng tìm kiếm
    let stringSearch = window.location.search.substring(1);
    console.log(qs.parse(stringSearch));

    let handleSearchOnchange = (keywords) => {
        let { value } = keywords.target;

        setSearchValue({
            keyword: value,
        });

        if (!value) {
            fetchUserList();
        } else {
            adminServ.getSearchUser(value)
                .then((res) => {
                    let userArr = res.data.map((item) => {
                        return {
                            ...item,
                            action: (
                                <Button onClick={() => {
                                    handleDeleteUser(item.taiKhoan)
                                }} type="primary"
                                    danger>Xóa</Button>
                            )
                        }
                    })
                    setUserList(userArr);
                })

                .catch((err) => {
                    console.log(err)
                })
        }
    }

    return (
        <div>
            <Input onChange={handleSearchOnchange} placeholder='Tìm kiếm người dùng' className='my-5 border-black placeholder:text-black placeholder:font-medium focus:border-black focus:border-2'></Input>
            <Spinner></Spinner>
            <Table columns={headerColums} dataSource={userList}></Table>
        </div>
    )
}
