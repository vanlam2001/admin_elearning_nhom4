import { localUserServ } from "../../service/localService";


export const columns = [
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
        width: "10%",
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
        width: "20%",
    },
    {
        title: "Ngày tạo",
        dataIndex: "ngayTao",
        key: "ngayTao",
        width: "10%",
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
        hidden: localUserServ.get()?.maLoaiNguoiDung === 'GV' ? false : true,
    },
].filter((item) => {
    return !item.hidden
});