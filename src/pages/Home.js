import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch} from '@fortawesome/free-solid-svg-icons';


export default function Home() {

    const [members, setMembers] = useState([]);

    const { id } = useParams()

    useEffect(() => {
        loadMembers();

    }, []);

    const loadMembers = async () => {
        const result = await axios.get("http://localhost:8080/member");
        setMembers(result.data);
    };

    const deleteMember = async (id) => {
        const confirmation = window.confirm("Are you sure you want to delete this record permanently?");
        if (confirmation) {
            await axios.delete(`http://localhost:8080/member/${id}`);
            loadMembers();
        } else {

        }
    };
    

    return (
        <div className="container">
            <div className="py-1">
                <table className="table border shadow">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First Name</th>
                            <th scope="col">Middle Name</th>
                            <th scope="col">Last Name</th>
                            {/* <th scope="col">Date of Birth</th> */}
                            {/* <th scope="col">Sex</th> */}
                            <th scope="col">Address</th>
                            {/* <th scope="col">Mobile Number</th> */}
                            {/* <th scope="col">Beneficiary</th> */}
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            members.map((member, index) => (
                                <tr>
                                    <th scope="row" key={index}>{index + 1}</th>
                                    <td>{member.firstName}</td>
                                    <td>{member.middleName}</td>
                                    <td>{member.lastName}</td>
                                    {/* <td>{member.dateOfBirth}</td> */}
                                    {/* <td>{member.sex}</td> */}
                                    <td>{member.address}</td>
                                    {/* <td>{member.mobileNumber}</td> */}
                                    {/* <td>{member.beneficiary}</td> */}
                                    <td>
                                        <Link className="btn btn-primary mx-2 mt-2"
                                        to={`/viewmember/${member.id}`}>
                                            View
                                        </Link>
                                        <Link className="btn btn-outline-primary mx-2 mt-2"
                                            to={`/editmember/${member.id}`}>
                                            Edit
                                        </Link>
                                        <button className="btn btn-danger mx-2 mt-2"
                                            onClick={() => deleteMember(member.id)}>
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            )
                            )
                        }

                    </tbody>
                </table>

                <div>
                    <Link className="btn btn-outline-danger mx-2 mt-2" to="/admin">
                            Back to Dashboard
                        </Link>
                </div>
            </div>
        </div>
    )
}
