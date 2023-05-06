import { Tag } from "antd"

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
    },

    {
        title: "Gmail",
        dataIndex: "email",
        key: "email",
    },

    {
        title: "Loại người dùng",
        dataIndex: "maLoaiNguoiDung",
        key: "maLoaiNguoiDung",
        render: (hv) => {
            if (hv == "HV") {
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
    },
]