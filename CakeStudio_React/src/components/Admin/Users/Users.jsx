import { Box } from "@mui/material";
import { useState } from "react";

import UserHeader from "./UserHeader";
import UserFilters from "./UserFilters";
import UsersTable from "./UsersTable";
import EmptyUsers from "./EmptyUsers";
import DeleteUserDialog from "./DeleteUserDialog";

import "./Users.css";

export default function Users() {

    const [users] = useState([

        {
            id: 1,
            fullName: "Rahul Sharma",
            email: "rahul@gmail.com",
            mobile: "+91 9876543210",
            joinedOn: "18 Jun 2026",
            totalOrders: 12,
            status: true
        },

        {
            id: 2,
            fullName: "Priya Verma",
            email: "priya@gmail.com",
            mobile: "+91 9988776655",
            joinedOn: "15 Jun 2026",
            totalOrders: 5,
            status: false
        },

        {
            id: 3,
            fullName: "Amit Patel",
            email: "amit@gmail.com",
            mobile: "+91 9123456789",
            joinedOn: "10 Jun 2026",
            totalOrders: 8,
            status: true
        },

        {
            id: 4,
            fullName: "Neha Singh",
            email: "neha@gmail.com",
            mobile: "+91 9765432109",
            joinedOn: "06 Jun 2026",
            totalOrders: 3,
            status: true
        }

    ]);

    const [search, setSearch] = useState("");

    const [status, setStatus] = useState("All");

    const [selectedUser, setSelectedUser] = useState(null);

    const [openDeleteDialog, setOpenDeleteDialog] = useState(false);

    const filteredUsers = users.filter(user => {

        const matchesSearch =

            user.fullName.toLowerCase().includes(search.toLowerCase()) ||

            user.email.toLowerCase().includes(search.toLowerCase());

        const matchesStatus =

            status === "All" ||

            (status === "Active" && user.status) ||

            (status === "Inactive" && !user.status);

        return matchesSearch && matchesStatus;

    });

    const handleStatusChange = (userId, checked) => {

        console.log({

            userId,

            status: checked

        });

    };

    const handleDelete = (user) => {

        setSelectedUser(user);

        setOpenDeleteDialog(true);

    };

    return (

        <Box className="users-page">

            <UserHeader />

            <UserFilters

                search={search}
                setSearch={setSearch}

                status={status}
                setStatus={setStatus}

            />

            {

                filteredUsers.length === 0 ?

                    <EmptyUsers />

                    :

                    <UsersTable

                        users={filteredUsers}

                        onDelete={handleDelete}

                        onStatusChange={handleStatusChange}

                    />

            }

            <DeleteUserDialog

                open={openDeleteDialog}

                user={selectedUser}

                onClose={() =>

                    setOpenDeleteDialog(false)

                }

                onConfirm={() => {

                    console.log(selectedUser);

                }}

            />

        </Box>

    );

}