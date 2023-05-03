import AdminLayout from "../Layout/AdminLayout";
import AdminUsersPage from "../Page/AdminUserPage/AdminUserPage";

export const adminRoute = [
    {
        url: "/admin-users",
        component: <AdminLayout Componet={AdminUsersPage}></AdminLayout>
    },

    {
        url: "/",
        component: <AdminLayout Componet={AdminUsersPage}></AdminLayout>
    },

]
