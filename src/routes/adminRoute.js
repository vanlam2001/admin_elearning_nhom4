import AdminLayout from "../Layout/AdminLayout";

import AdminCoursePage from "../Page/AdminCoursePage/AdminCoursePage";
import UpdateCourse from "../Page/AdminCoursePage/UpdateCourse";
import AdminUsersPage from "../Page/AdminUserPage/AdminUserPage";
import LoginPage from "../Page/LoginPage/LoginPage";
import AddCourse from "../Page/AdminCoursePage/AddCourse";


export const adminRoute = [
    {
        url: "/admin-users",
        component: <AdminLayout Componet={AdminUsersPage}></AdminLayout>
    },
    {
        url: "/admin-course",
        component: <AdminLayout Componet={AdminCoursePage}></AdminLayout>
    },
    {
        url: "/admin-addcourse",
        component: <AdminLayout Componet={AddCourse}></AdminLayout>
    },
    {
        url: "/admin-updatecourse/:id",
        component: <AdminLayout Componet={UpdateCourse}></AdminLayout>
    },
    {
        url: "/",
        component: <AdminLayout Componet={AdminUsersPage}></AdminLayout>
    },
    {
        url: "/login",
        component: <LoginPage></LoginPage>
    },

    {
        url: "/admin-khoahoc",
        component: <AdminLayout Componet={AdminCoursePage}></AdminLayout>
    },

    {
        url: "/admin-khoahoc-add",
        component: <AdminLayout Componet={AddCourse}></AdminLayout>
    },



]
