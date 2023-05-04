export const USER_INFO = "USER_INFO";
export const localUserServ = {
    // * khởi tạo object gồm các phương thức liên quan tới user và localstorage 
    get: () => {
        // * lấy dữ liệu từ localStorage lên -> đổ vào headerInfo (D)
        let jsonData = localStorage.getItem(USER_INFO);
        // return jsonData ? JSON.parse(jsonData) : ""
        if (jsonData != "" && jsonData != "undifined") {
            return JSON.parse(jsonData) ? JSON.parse(jsonData) : null;
        }
    },
    set: (userInfo) => {
        // * sau khi login thành công -> lưu userInfo xuống localStorage (Q)
        let jsonData = userInfo ? JSON.stringify(userInfo) : "";
        localStorage.setItem(USER_INFO, jsonData);
    },
    remove: () => {
        // * sau khi người dùng sign-out -> xóa userInfo ở localStorage (D)
        localStorage.removeItem(USER_INFO);
    }
}





