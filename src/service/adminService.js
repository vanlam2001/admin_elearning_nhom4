import { https } from "./config"

export const adminServ = {
    getUserList: () => {
        return https.get(`/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01`)
    },

    deleteUser: (taiKhoan) => {
        return https.delete(`/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`)
    },

    updateUser: (data) => {
        return https.post(`/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung`, data)
    }



}

