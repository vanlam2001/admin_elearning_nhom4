import { https } from "./config";

export const courseService = {
    getListCourse: (groupCode) => {
        return https.get(`/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=${groupCode}`);
    },
    deleteCouser: (id) => {
        return https.delete(`/api/QuanLyKhoaHoc/XoaKhoaHoc?MaKhoaHoc=${id}`)
    },
    getCourseMenu: () => {
        return https.get('/api/QuanLyKhoaHoc/LayDanhMucKhoaHoc')
    },
    postAddCourse: (data) => {
        return https.post('/api/QuanLyKhoaHoc/ThemKhoaHoc', data)
    },
    postAddImageCourse: (data) => {
        return https.post('/api/QuanLyKhoaHoc/UploadHinhAnhKhoaHoc', data)
    },
    getInfoCourse: (id) => {
        return https.get(`/api/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${id}`)
    },
    putUpdateCourse: (data) => {
        return https.put('/api/QuanLyKhoaHoc/CapNhatKhoaHoc', data)
    },
    getSearchCourse: (value, groupCode) => {
        return https.get(`/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?tenKhoaHoc=${value}&MaNhom=${groupCode}`)
    },
}