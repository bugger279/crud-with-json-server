import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const results = await axios.get(`http://localhost:3003/users`);
    setUsers(results.data.reverse());
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:3003/users/${id}`);
    loadUsers();
  };


  return (
    <>
      <div className="container py-4">
        <table className="table border shadow">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">UserName</th>
              <th scope="col">Email</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users ? (
              users.map((user, index) => {
                return (
                  <tr key={index}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>
                        <Link className="btn mr-2 btn-primary" to={`/users/${user.id}`}>View</Link>
                        <Link className="btn mr-2 btn-outline-primary" to={`/users/edit/${user.id}`}>Edit</Link>
                        <Link className="btn btn-outline-danger" onClick={e => deleteUser(user.id)} to="/">Delete</Link>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colspan="4">{"No users found"}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Home;
