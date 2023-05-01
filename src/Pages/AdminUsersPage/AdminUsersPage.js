import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { setLoadingOff, setLoadingOn } from '../../toolkit/spinnerSlice';
import { adminServ } from '../../service/adminService';
import { Table } from 'antd';
import { headerColums } from './utils';
export default function AdminUsersPage() {
    const [userList, setUserList] = useState([]);
    let dispatch = useDispatch();

    useEffect(() => {
        dispatch(setLoadingOn())
        adminServ.getUserList()

            .then((res) => {
                dispatch(setLoadingOff());
                setUserList(res.data.content)
            })

            .catch((err) => {
                console.log(err);
            })
    }, [])
    return (
        <div>
            <Table columns={headerColums} dataSource={userList}></Table>
        </div>
    )
}
