import { https } from "./config"

export const adminServ = {
    getUserList: (id) => {
        return https.get(`/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${id}`)
    },
    getKhoaHocList: () => {
        return https.get("/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01");
    },
    deleteCouser: (id) => {
        return https.delete(`/api/QuanLyKhoaHoc/XoaKhoaHoc?MaKhoaHoc=${id}`)
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
    },
    postAddUser: (data) => {
        return https.post('/api/QuanLyNguoiDung/ThemNguoiDung', data)
    }
}

