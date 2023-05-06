import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import { courseService } from '../../service/courseService';
import { FaPencilAlt, FaTrashAlt } from 'react-icons/fa';
import { Select, Input, Button, message, Table } from 'antd';
import { useSearchParams } from 'react-router-dom';
import { columns } from './utils';
import qs from 'qs';
import { useDispatch } from 'react-redux';
import { setLoadingOff, setLoadingOn } from '../../toolkit/spinnerSlice';
import { localUserServ } from '../../service/localService';
const { Search } = Input;

export default function AdminCoursePage() {
    const stringQuery = window.location.search.substring(1)
    let paramsObj = qs.parse(stringQuery)

    const dispatch = useDispatch();
    const [search, setSearch] = useSearchParams();
    const [isGroupCode, setIsGroupCode] = useState(() => {
        if (paramsObj.isGroupCode) {
            return paramsObj.isGroupCode;
        }
        else {
            return 'GP01'
        }
    });
    const [listCourse, setListCourse] = useState([]);
    const fetchListCourse = (isGroupCode) => {
        dispatch(setLoadingOn());
        courseService.getListCourse(isGroupCode)
            .then((res) => {
                dispatch(setLoadingOff())
                setListCourse(res.data)
            })
            .catch((err) => {
                dispatch(setLoadingOff())
                console.log(err);
            });
    }
    useEffect(() => {
        if (paramsObj.search) {
            dispatch(setLoadingOn());
            courseService.getSearchCourse(paramsObj.search, isGroupCode)
                .then((res) => {
                    dispatch(setLoadingOff());
                    setListCourse(res.data)
                })
                .catch((err) => {
                    dispatch(setLoadingOff());
                    console.log(err);
                });
        }
        else {
            fetchListCourse(isGroupCode);
        }
    }, [isGroupCode])

    // delete
    const handleDeleteCourse = (id) => {
        courseService.deleteCouser(id)
            .then((res) => {
                fetchListCourse(isGroupCode);
                message.success('Xoá thành công!')
            })
            .catch((err) => {
                console.log(err);
                message.error(err.response.data)
            });
    }
    // change groupCode
    const handleChange = (value) => {
        setIsGroupCode(value)
    };
    // search
    const onSearch = (el) => {
        let value = el.target.value
        setSearch({
            search: value,
            isGroupCode: isGroupCode
        });

        if (value) {
            courseService.getSearchCourse(value, isGroupCode)
                .then((res) => {
                    setListCourse(res.data)
                })
                .catch((err) => {
                    console.log(err);
                    setListCourse([])
                });
        }
        else {
            fetchListCourse(isGroupCode);
        }
    };


    const dataSource = listCourse?.map((item, index) => {
        return {
            key: index,
            maKhoaHoc: item.maKhoaHoc,
            hinhAnh: item.hinhAnh,
            tenKhoaHoc: item.tenKhoaHoc,
            tenDanhMucKhoaHoc: item.danhMucKhoaHoc.tenDanhMucKhoaHoc,
            moTa: item.moTa.substr(0, 70) + '...',
            ngayTao: item.ngayTao,
            luotXem: item.luotXem,
            action: (
                <div className='flex justify-center'>
                    <NavLink to={`/admin-updatecourse/${item.maKhoaHoc}`}>
                        <button className='p-2 text-base text-white bg-amber-400 mx-1 rounded'>
                            <FaPencilAlt />
                        </button>
                    </NavLink>
                    <button onClick={() => { handleDeleteCourse(item.maKhoaHoc) }} className='p-2 text-base text-white bg-red-500 mx-1 rounded'>
                        <FaTrashAlt />
                    </button>
                </div>
            ),

        }
    })

    return (
        <div>
            {localUserServ.get()?.maLoaiNguoiDung === 'GV' ? (
                <div>
                    <NavLink to={'/admin-addcourse'}>
                        <Button type="primary" className='mb-3 bg-green-500'>Thêm khóa học</Button>
                    </NavLink>
                </div>
            ) : <></>}

            <div className='mb-3 flex items-center justify-between'>
                <Select
                    defaultValue={isGroupCode}
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
                    ]}
                />
                <Search
                    placeholder="Nhập tên khoá học"
                    onChange={onSearch}
                    defaultValue={paramsObj?.search}
                    style={{
                        width: 250,
                    }}
                />
            </div>
            <Table dataSource={dataSource} columns={columns} />
        </div>
    )
}


