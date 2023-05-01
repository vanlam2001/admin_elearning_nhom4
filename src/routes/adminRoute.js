import AdminLayout from "../Layout/AdminLayout";
import AdminUsersPage from "../Pages/AdminUsersPage/AdminUsersPage";

export const adminRoute = [
    {
        url: "/admin-users",
        componet: <AdminLayout Componet={AdminUsersPage}></AdminLayout>
    },

    {
        url: "/",
        componet: <AdminLayout Componet={AdminUsersPage}></AdminLayout>
    }


]

