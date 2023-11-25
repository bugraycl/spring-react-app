import Container from "react-bootstrap/Container";
import {Table} from "react-bootstrap";
import axios from "axios";
import {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";

export default function Home() {
    const [users, setUsers] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        loadUsers()
    }, []);

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:8080/users");
        setUsers(result.data);
    }

    const deleteUser = async (id) => {
        await axios.delete(`http://localhost:8080/users/${id}`, { crossdomain: true });
        loadUsers();
    }

    return (
        <Container>
            <div className="py-4">
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>AD SOYAD</th>
                        <th>KULLANICI ADI</th>
                        <th>E-POSTA</th>
                        <th>İŞLEMLER</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        users.map((user,index) => (
                            <tr>
                                <td key={index}>{index+1}</td>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>
                                    <button className="btn btn-success btn-sm">GÖRÜNTÜLE</button>
                                    <Link to={`/edituser/${user.id}`} className="btn btn-outline-primary btn-sm">DÜZENLE</Link>
                                    <button
                                        className="btn btn-danger btn-sm"
                                        onClick={() => deleteUser(user.id)}
                                    >
                                        SİL
                                    </button>
                                </td>
                            </tr>
                        ))
                    }
                    </tbody>
                </Table>
            </div>
        </Container>
    )
}