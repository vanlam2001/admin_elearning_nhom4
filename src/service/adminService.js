import { https } from "./config"

export const adminServ = {
    getUserList: (id) => {
        return https.get(`/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${id}`)
    },
    deleteUser: (taiKhoan) => {
        return https.delete(`/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`)
    },
    getSearchUser: (keywords, isGroupCode) => {
        return https.get(`/api/QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=${isGroupCode}&tuKhoa=${keywords}`)
    },

    putUpdateUser: (data) => {
        return https.put(`/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung`, data)
    },

    getInfoUser: () => {
        return https.get('/api/QuanLyKhoaHoc/LayThongTinHocVienKhoaHoc')
    }


}

