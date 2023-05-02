import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { setLoadingOff, setLoadingOn } from '../../toolkit/spinnerSlice';
import { adminServ } from '../../service/adminService';
import { Table } from 'antd';
import { headerColums } from './utils';

export default function AdminKhoaHocPage() {
    const [khoaHocList, setKhoaHocList] = useState([]);
    let dispatch = useDispatch();
    useEffect(() => {
        dispatch(setLoadingOn())
        adminServ.getKhoaHocList()

            .then((res) => {
                dispatch(setLoadingOff());
                setKhoaHocList(res.data);
                console.log(res)
            })

            .catch((err) => {
                console.log(err)
            })
    }, [])
    return (
        <div>
            <Table columns={headerColums} dataSource={khoaHocList}></Table>
        </div>
    )
}
