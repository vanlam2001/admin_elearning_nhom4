import { https } from "./config"

export const userService = {
    loginUser: (values) => {
        return https.post('/api/QuanLyNguoiDung/DangNhap', values);
    }
}

