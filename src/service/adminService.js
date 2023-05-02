import { https } from "./config"

export const adminServ = {
    getUserList: () => {
        return https.get(`/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01`)
    },

    getKhoaHocList: () => {
        return https.get("/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01");
    },


}

