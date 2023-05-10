import { https } from "./config"

export const userService = {
    loginUser: (values) => {
        return https.post('/api/QuanLyNguoiDung/DangNhap', values);
    },
    postListCourseUnregistered: (id) => {
        return https.post(`/api/QuanLyNguoiDung/LayDanhSachKhoaHocChuaGhiDanh?TaiKhoan=${id}`)
    },
    postListCourseRegistered: (data) => {
        return https.post('/api/QuanLyNguoiDung/LayDanhSachKhoaHocDaXetDuyet', data)
    },
    postListCourseWaiting: (data) => {
        return https.post('/api/QuanLyNguoiDung/LayDanhSachKhoaHocChoXetDuyet', data)
    },
}

