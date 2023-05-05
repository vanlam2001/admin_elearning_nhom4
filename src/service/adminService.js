import { https } from "./config"

export const adminServ = {
    getUserList: () => {
        return https.get(`/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01`)
    },

    deleteUser: (taiKhoan) => {
        return https.delete(`/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`)
    },

    getSearchUser: (keyword) => {
        return https.get(`/api/QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=GP01&tuKhoa=${keyword}`)
    }
}

