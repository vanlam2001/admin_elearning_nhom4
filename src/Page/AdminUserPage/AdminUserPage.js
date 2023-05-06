import { Button, Input, Table, message } from 'antd'
import React, { useEffect, useState } from 'react'
import { adminServ } from '../../service/adminService';
import { headerColums } from './utils';
import { useDispatch } from 'react-redux';
import { setLoadingOff, setLoadingOn } from '../../toolkit/spinnerSlice';
import Spinner from '../../Components/Spinner';
import { NavLink, useSearchParams } from 'react-router-dom';
import { FaPencilAlt, FaTrashAlt } from 'react-icons/fa';
import qs from "qs";

const { Search } = Input;


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
                            <div>
                                <NavLink to={`/admin-updateuser/${user.taiKhoan}`}>
                                    <button className='p-2 text-base text-white bg-yellow-500 mx-1 rounded'>
                                        <FaPencilAlt />
                                    </button>
                                </NavLink>


                                <button onClick={() => {
                                    handleDeleteUser(user.taiKhoan);
                                }} className='p-2 text-base text-white bg-red-500 mx-1 rounded'
                                >
                                    <FaTrashAlt />
                                </button>



                            </div>

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
                                <div>
                                    <button className='p-2 text-base text-white bg-yellow-500 mx-1 rounded'>
                                        <FaPencilAlt />
                                    </button>

                                    <button onClick={() => {
                                        handleDeleteUser(item.taiKhoan);
                                    }} className='p-2 text-base text-white bg-red-500 mx-1 rounded'
                                    >
                                        <FaTrashAlt />
                                    </button>
                                </div>

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
            <div className='mb-3 flex items-center justify-between'>
                <Search onChange={handleSearchOnchange} placeholder='Tìm tài khoản'
                    style={{
                        width: 250,
                    }}></Search>
            </div>


            <Spinner></Spinner>
            <Table columns={headerColums} dataSource={userList}></Table>
        </div>
    )
}