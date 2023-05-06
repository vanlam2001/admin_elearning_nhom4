import { Tag } from "antd"

export const headerColums = [
    {
        title: "Mã khóa học",
        dataIndex: "maKhoaHoc",
        key: "maKhoaHoc",
        width: "8%",
    },
    {
        title: "Hình ảnh",
        dataIndex: "hinhAnh",
        key: "hinhAnh",
        width: "15%",
        render: (url) => {
            return <img src={url} className="w-20" alt="" />
        }
    },
    {
        title: "Tên khóa học",
        dataIndex: "tenKhoaHoc",
        key: "tenKhoaHoc",
        width: "20%",
    },
    {
        title: "Danh mục",
        dataIndex: "tenDanhMucKhoaHoc",
        key: "tenDanhMucKhoaHoc",
        width: "15%",
    },
    {
        title: "Mô tả",
        dataIndex: "moTa",
        key: "moTa",
        width: "25%",
    },
    {
        title: "Lượt xem",
        dataIndex: "luotXem",
        key: "luotXem",
        width: "7%",
    },
    {
        title: "Tuỳ chọn",
        dataIndex: "action",
        key: "action",
        width: "10%",
    },
]