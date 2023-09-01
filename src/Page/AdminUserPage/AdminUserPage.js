import { Button, Input, Select, Table, message } from 'antd'
import React, { useEffect, useState } from 'react'
import { adminServ } from '../../service/adminService';
import { headerColums } from './utils';
import { useDispatch } from 'react-redux';
import { setLoadingOff, setLoadingOn } from '../../toolkit/spinnerSlice';
import Spinner from '../../Components/Spinner';
import { NavLink, useSearchParams } from 'react-router-dom';
import { FaPencilAlt, FaTrashAlt } from 'react-icons/fa';
import qs from "qs";
import { localUserServ } from '../../service/localService';
import { useNavigate } from 'react-router-dom';
import { setInfoUserDetail } from '../../toolkit/userSlice';

const { Search } = Input;


export default function AdminUsersPage() {
    // chức năng tìm kiếm
    const stringSearch = window.location.search.substring(1);
    let paramsObj = qs.parse(stringSearch)
    let dispatch = useDispatch();
    const navigate = useNavigate();

    const [searchValue, setSearchValue] = useSearchParams();
    const [isGroupCode, setIsGroupCode] = useState(() => {
        if (paramsObj.isGroupCode) {
            return paramsObj.isGroupCode;
        }
        else {
            return 'GP01'
        }
    });

    const [userList, setUserList] = useState([]);
    // Danh sách user
    let fetchUserList = (isGroupCode) => {
        dispatch(setLoadingOn())
        adminServ.getUserList(isGroupCode)
            .then((res) => {
                dispatch(setLoadingOff());
                setUserList(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    useEffect(() => {
        if (paramsObj.search) {
            dispatch(setLoadingOn())
            adminServ.getSearchUser(paramsObj.search, isGroupCode)
                .then((res) => {
                    dispatch(setLoadingOff());
                    setUserList(res.data)
                })
                .catch((err) => {
                    dispatch(setLoadingOff());
                    console.log(err)
                })
        }
        else {
            fetchUserList(isGroupCode);
        }
    }, [isGroupCode]);
    // chức năng xóa
    const handleDeleteUser = (taiKhoan) => {
        adminServ.deleteUser(taiKhoan)
            .then((res) => {
                fetchUserList(isGroupCode);
                console.log(res)
                message.success("xoá thành công");
            })
            .catch((err) => {
                console.log(err)
                message.error(err.response.data);
            })
    }
    // change groupCode
    const handleChange = (value) => {
        setIsGroupCode(value)
    }

    let handleSearchOnchange = (keywords) => {
        let value = keywords.target.value;
        setSearchValue({
            search: value,
            isGroupCode: isGroupCode
        });
        if (value) {
            adminServ.getSearchUser(value, isGroupCode)
                .then((res) => {
                    setUserList(res.data)
                })
                .catch((err) => {
                    console.log(err)
                    setUserList([])
                })
        }
        else {
            fetchUserList(isGroupCode);
        }
    }
    const dataSource = userList?.map((item, index) => {
        return {
            key: index,
            taiKhoan: item.taiKhoan,
            hoTen: item.hoTen,
            email: item.email,
            soDt: item.soDt,
            maLoaiNguoiDung: item.maLoaiNguoiDung,
            action: (
                <div>
                    <div className='flex flex-col space-y-1 items-center justify-center sm:flex-row sm:space-y-0'>
                        <NavLink to={`/admin-updateuser/${item.taiKhoan}`}>
                            <button className='p-2 text-base text-white bg-amber-400 mx-1 rounded'>
                                <FaPencilAlt />
                            </button>
                        </NavLink>
                        <button onClick={() => { handleDeleteUser(item.taiKhoan) }} className='p-2 text-base text-white bg-red-500 mx-1 rounded'>
                            <FaTrashAlt />
                        </button>
                    </div>
                    <div className='flex justify-center'>
                        <button onClick={() => {
                            dispatch(setInfoUserDetail({ ...item, maNhom: isGroupCode }))
                            navigate(`/admin-detailuser/${item.taiKhoan}`)
                        }}
                            className='p-1 text-sm mt-1 text-white bg-blue-500 mx-1 rounded'>
                            Xem thêm
                        </button>
                    </div>
                </div>
            )
        }
    })

    return (
        <div>
            {localUserServ.get()?.maLoaiNguoiDung === 'GV' ? (
                <div>
                    <NavLink to={'/admin-adduser'}>
                        <Button type="primary" className='mb-3 bg-green-500'>Thêm người dùng</Button>
                    </NavLink>
                </div>
            ) : <></>}
            <div className='mb-3 flex flex-col items-start justify-between space-y-1 sm:flex-row sm:space-y-0'>
                <Select defaultValue={isGroupCode}
                    style={{ width: 120 }}
                    onChange={handleChange}
                    options={[
                        { value: 'GP01', label: 'GP01' },
                        { value: 'GP02', label: 'GP02' },
                        { value: 'GP03', label: 'GP03' },
                        { value: 'GP04', label: 'GP04' },
                        { value: 'GP05', label: 'GP05' },
                        { value: 'GP06', label: 'GP06' },
                        { value: 'GP07', label: 'GP07' },
                        { value: 'GP08', label: 'GP08' },
                        { value: 'GP09', label: 'GP09' },
                        { value: 'GP10', label: 'GP10' },
                        { value: 'GP11', label: 'GP11' },
                        { value: 'GP12', label: 'GP12' },
                        { value: 'GP13', label: 'GP13' },
                        { value: 'GP14', label: 'GP14' },
                        { value: 'GP15', label: 'GP15' },
                    ]}>
                </Select>
                <Search onChange={handleSearchOnchange}
                    defaultValue={paramsObj?.search}
                    placeholder='Tìm tài khoản'
                    style={{
                        width: 250,
                        maxWidth: '100%'
                    }}></Search>
            </div>
            <Spinner></Spinner>
            <Table dataSource={dataSource} columns={headerColums} ></Table>
        </div>
    )
}