import { Table } from 'antd'
import React, { useEffect, useState } from 'react'
import { adminServ } from '../../service/adminService';
import { headerColums } from './utils';
import { useDispatch } from 'react-redux';
import { setLoadingOff, setLoadingOn } from '../../toolkit/spinnerSlice';


export default function AdminUsersPage() {
    const [userList, setUserList] = useState([]);
    let dispatch = useDispatch();
    useEffect(() => {
        dispatch(setLoadingOn())
        adminServ.getUserList()
            .then((res) => {
                dispatch(setLoadingOff());
                setUserList(res.data);
                console.log(res)
            })
            .catch((err) => {
                console.log(err);
            })
    }, []);

    return (
        <div>

            <Table columns={headerColums} dataSource={userList}></Table>
        </div>
    )
}
