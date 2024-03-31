import { useEffect, useState } from "react";
import { DataGrid, GridColDef, GridRowModel } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { fetchUsers } from "../services/GithubServices";
import { styled } from "@mui/material";

const UserListPageStyled = styled("div")`
  height: 700px;
  width: 100%;
  margin-top: 3rem;
`;

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "login",
    headerName: "Username",
    width: 150,
    renderCell: (params) => (
      <Link to={`/users/${params.value}`} style={{ textDecoration: "none" }}>
        {params.value}
      </Link>
    ),
  },
  {
    field: "avatar_url",
    headerName: "Avatar",
    width: 110,
    renderCell: (params) => (
      <img
        src={params.value}
        alt="Avatar"
        style={{ height: 50, borderRadius: "50%" }}
      />
    ),
  },
  // {
  //   field: "repos_url",
  //   headerName: "Public Repos",
  //   width: 130,
  //   renderCell: (params) => (
  //     <a target="_blank" href={params.value} style={{ textDecoration: "none" }}>
  //       {params.value}
  //     </a>
  //   ),
  // },
];

const UserListPageListView = () => {
  const [users, setUsers] = useState<GridRowModel[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getUsers = async () => {
      try {
        setLoading(true);
        const fetchedUsers = await fetchUsers();
        setUsers(
          fetchedUsers.map((user) => ({ ...user, id: user.id.toString() }))
        );
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    getUsers();
  }, []);

  return (
    <UserListPageStyled>
      <DataGrid rows={users} columns={columns} autoPageSize loading={loading} />
    </UserListPageStyled>
  );
};

export default UserListPageListView;
