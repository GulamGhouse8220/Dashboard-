import { ClassNames } from "@emotion/react"

export const userColumns = [
    { field: 'id', headerName: 'ID', width: 70 }, {
        field: "user",
        headerName: "User",
        width: 200,
        renderCell: (params) => {
            return (
                <div className="cellwithImg">
                    <img className="cellImg" src={params.row.img} alt="avatar" />
                    {params.row.username}
                </div>
            );
        },
    },
    {
        field: "email",
        headerName: "Email",
        width: 300,
    },
    {
        field: "age",
        headerName: "Age",
        width: 150,
    },
    {
        field: "status",
        headerName: "Status",
        width: 160,
        renderCell: (params) => {
            return (
                <div className={`cellWithStatus ${params.row.status}`}>
                    {params.row.status}
                </div>
            );
        },
    },
];

export const userRows = [
    {
        id: 1,
        username: "Gulam Ghouse",
        img: "images (1).jpg",
        status: "active",
        email: "gulamghouse@gmail.com",
        age: 23,
    },
    {
        id: 2,
        username: "Bala",
        img: "images (2).jpg",
        status: "passive",
        email: "bala@gmail.com",
        age: 27,
    },
    {
        id: 3,
        username: "Thangadurai",
        img: "images (4).jpg",
        status: "pending",
        email: "thangadurai@gmail.com",
        age: 24,
    },
    {
        id: 4,
        username: "Akash",
        img: "images (5).jpg",
        status: "active",
        email: "akash@gmail.com",
        age: 23,
    },
    {
        id: 5,
        username: "Nagraj",
        img: "images (6).jpg",
        status: "passive",
        email: "nagraj@gmail.com",
        age: 23,
    },
    {
        id: 6,
        username: "Valarmathi",
        img: "images (7).jpg",
        status: "active",
        email: "valarmathi@gmail.com",
        age: 22,
    },
    {
        id: 7,
        username: "Haseem",
        img: "type-of-developers.jpg",
        status: "passive",
        email: "haseem@gmail.com",
        age: 23,
    },
    {
        id: 8,
        username: "Sathish Sir",
        img: "images (8).jpg",
        status: "active",
        email: "sathishsir@gmail.com",
        age: 28,
    },
    {
        id: 9,
        username: "Ghouse",
        img: "images (9).jpg",
        status: "active",
        email: "ghouse@gmail.com",
        age: 23,
    },
    {
        id: 10,
        username: "Mangai Mam",
        img: "images (10).jpg",
        status: "active",
        email: "mangaimam@gmail.com",
        age: 25,
    },
]