import AdminLayout from "../Layout/AdminLayout";

import AdminCoursePage from "../Page/AdminCoursePage/AdminCoursePage";
import UpdateCourse from "../Page/AdminCoursePage/UpdateCourse";
import AddUser from "../Page/AdminUserPage/AddUser";
import AdminUsersPage from "../Page/AdminUserPage/AdminUserPage";
import UpdateUser from "../Page/AdminUserPage/UpdateUser";
import LoginPage from "../Page/LoginPage/LoginPage";
import AddCourse from "../Page/AdminCoursePage/AddCourse";
import DetailCourse from "../Page/AdminCoursePage/DetailCourse/DetailCourse";
import DetailUser from "../Page/AdminUserPage/DetailUser/DetailUser";


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

    {
        url: "/admin-updateuser/:id",
        component: <AdminLayout Componet={UpdateUser}></AdminLayout>
    },
    {
        url: "/admin-adduser",
        component: <AdminLayout Componet={AddUser}></AdminLayout>
    },

    {
        url: "/admin-detailcourse/:id",
        component: <AdminLayout Componet={DetailCourse}></AdminLayout>
    },

    {
        url: "/admin-detailuser/:id",
        component: <AdminLayout Componet={DetailUser}></AdminLayout>
    }
]
