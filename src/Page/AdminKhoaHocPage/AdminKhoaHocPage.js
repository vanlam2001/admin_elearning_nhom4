import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { FaPencilAlt, FaTrashAlt } from 'react-icons/fa';
import { setLoadingOff, setLoadingOn } from '../../toolkit/spinnerSlice';
import { adminServ } from '../../service/adminService';
import { Table } from 'antd';
import { headerColums } from './utils';
import { setListCourse } from '../../toolkit/courseSlice';
import { useSelector } from 'react-redux';
import BtnAddCourse from './BtnAddCourse';

export default function AdminKhoaHocPage() {
    const khoaHocList = useSelector((state) => state.courseSlice.listCourse)
    let dispatch = useDispatch();
    const fetchCourseList = () => {
        dispatch(setLoadingOn())
        adminServ.getKhoaHocList()
        .then((res) => {
            dispatch(setLoadingOff());
            dispatch(setListCourse(res.data))
        })
        .catch((err) => {
            console.log(err)
        })
    }
    useEffect(() => {
        fetchCourseList();
    }, [])
    const handleDeleteCourse = (id) => {
        dispatch(setLoadingOn())
        adminServ.deleteCouser(id)
        .then((res) => {
            console.log(res);
            fetchCourseList();

        })
        .catch((err) => {
            console.log(err);
        });
    }

    const data = khoaHocList?.map((item, index) => {
        return {
            key: index,
            maKhoaHoc : item.maKhoaHoc,
            hinhAnh: item.hinhAnh,
            tenKhoaHoc: item.tenKhoaHoc,
            tenDanhMucKhoaHoc: item.danhMucKhoaHoc.tenDanhMucKhoaHoc,
            moTa: item.moTa.substr(0,70) + '...',
            luotXem: item.luotXem,
            action: (
                <div className='flex justify-center'>
                    <button className='p-2 text-base text-white bg-yellow-500 mx-1 rounded'>
                        <FaPencilAlt/>
                    </button>
                    <button onClick={() => {handleDeleteCourse(item.maKhoaHoc)}} className='p-2 text-base text-white bg-red-500 mx-1 rounded'>
                        <FaTrashAlt/>
                    </button>
                </div>
            ),

        }
    })
    return (
        <div>
            <BtnAddCourse/>
            <Table columns={headerColums} dataSource={data}></Table>
        </div>
    )
}
