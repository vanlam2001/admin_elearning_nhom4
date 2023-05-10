import { Tag } from "antd"
import { localUserServ } from "../../service/localService"

export const headerColums = [
    {
        title: "Tài khoản",
        dataIndex: "taiKhoan",
        key: "taiKhoan",
    },
    {
        title: "Tên người dùng",
        dataIndex: "hoTen",
        key: "hoTen",
        responsive: ["md"],
    },
    {
        title: "Gmail",
        dataIndex: "email",
        key: "email",
        responsive: ["xl"],
    },
    {
        title: "Số điện thoại",
        dataIndex: "soDt",
        key: "soDt",
        responsive: ["lg"],
    },
    {
        title: "Loại người dùng",
        dataIndex: "maLoaiNguoiDung",
        key: "maLoaiNguoiDung",
        responsive: ["sm"],
        render: (hv) => {
            if (hv === "HV") {
                return <Tag className="font-medium" color="green">Học viên</Tag>
            }
            else {
                return <Tag className="font-meidum" color="red">Giáo viên</Tag>
            }
        }
    },
    {
        title: "Chức năng",
        dataIndex: "action",
        key: "action",
        hidden: localUserServ.get()?.maLoaiNguoiDung === 'GV' ? false : true,
    },
].filter((item) => {
    return !item.hidden
});