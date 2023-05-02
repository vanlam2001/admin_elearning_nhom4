import { Tag } from "antd"

export const headerColums = [
    {
        title: "Mã khóa học",
        dataIndex: "maKhoaHoc",
        key: "maKhoaHoc",
    },

    {
        title: "Bí danh",
        dataIndex: "biDanh",
        key: "biDanh",
    },

    {
        title: "Tên khóa học",
        dataIndex: "tenKhoaHoc",
        key: "tenKhoaHoc",
    },

    {
        title: "Hình ảnh",
        dataIndex: "hinhAnh",
        key: "hinhAnh",
        render: (url) => {
            return <img src={url} className="w-3" alt="" />
        }
    },




]