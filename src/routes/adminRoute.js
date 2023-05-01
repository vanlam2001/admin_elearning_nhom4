import AdminLayout from "../Layout/AdminLayout";
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

]
