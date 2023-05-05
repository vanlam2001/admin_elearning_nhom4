import AdminLayout from "../Layout/AdminLayout";
import AdminUsersPage from "../Page/AdminUserPage/AdminUserPage";
import LoginPage from "../Page/LoginPage/LoginPage";

export const adminRoute = [
    {
        url: "/admin-users",
        component: <AdminLayout Componet={AdminUsersPage}></AdminLayout>
    },

    {
        url: "/",
        component: <AdminLayout Componet={AdminUsersPage}></AdminLayout>
    },

    {
        url: "/login",
        component: <LoginPage></LoginPage>
    }
]
