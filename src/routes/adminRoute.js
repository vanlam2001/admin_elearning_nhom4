import AdminLayout from "../Layout/AdminLayout";
import AdminKhoaHocPage from "../Page/AdminKhoaHocPage/AdminKhoaHocPage";
import AdminUserPage from "../Page/AdminUserPage/AdminUserPage";

export const adminRoute = [
    {
        url: "/admin-users",
        component: <AdminLayout Componet={AdminUserPage}></AdminLayout>
    },

    {
        url: "/",
        component: <AdminLayout Componet={AdminUserPage}></AdminLayout>
    },

    {
        url: "/admin-khoahoc",
        component: <AdminLayout Componet={AdminKhoaHocPage}></AdminLayout>
    },



]
