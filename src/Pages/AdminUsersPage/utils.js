export const headerColums = [
    {
        title: "Mã phim",
        dataIndex: "maPhim",
        key: "maPhim",
    },

    {
        title: "Tên phim",
        dataIndex: "tenPhim",
        key: "tenPhim",
    },

    {
        title: "Đánh giá",
        dataIndex: "danhGia",
        key: "danhGia",
    },

    {
        title: "Hình ảnh",
        dataIndex: "hinhAnh",
        key: "hinhAnh",

        render: (url) => {
            return <img src={url} className="w-20" alt="" />
        }

    },

]