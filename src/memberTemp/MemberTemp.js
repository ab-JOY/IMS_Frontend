import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

export default function Home() {
    const [memberTemp, setMembersTemp] = useState([]);

    const { id_temp } = useParams();

    useEffect(() => {
        loadMembersTemp();
    }, []);

    const loadMembersTemp = async () => {
        const result = await axios.get(`http://localhost:8080/memberTemp`);
        setMembersTemp(result.data);
    };

    const deleteMemberTemp = async (id_temp) => {
        await axios.delete(`http://localhost:8080/memberTemp/${id_temp}`);
        loadMembersTemp();
    };

    const triggerDataTransfer = async () => {
        try {
            await axios.post(`http://localhost:8080/member`);
            alert('Data transfer initiated successfully');
        } catch (error) {
            alert('Error initiating data transfer:', error);
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
                            <th scope="col">Age</th>
                            <th scope="col">Date of Birth</th>
                           <th scope="col">Sex</th>
                            <th scope="col">Address</th>
                            <th scope="col">Mobile Number</th>
                            <th scope="col">Membership Type</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            memberTemp.map((memberTemp, index) => (
                                <tr>
                                    <th scope="row" key={index}>{index + 1}</th>
                                    <td>{memberTemp.firstName_temp}</td>
                                    <td>{memberTemp.middleName_temp}</td>
                                    <td>{memberTemp.lastName_temp}</td>
                                    <td>{memberTemp.age_temp}</td>
                                    <td>{memberTemp.dateOfBirth_temp}</td>
                                  <td>{memberTemp.sex_temp}</td>
                                    <td>{memberTemp.address_temp}</td>
                                   <td>{memberTemp.mobileNumber_temp}</td>
                                    <td>{memberTemp.membershipType_temp}</td>
                                    <td>
                                        <Link className="btn btn-outline-primary mx-2 mt-2"
                                            to={`/editmembertemp/${memberTemp.id_temp}`}>
                                            Edit
                                        </Link>
                                        <button className="btn btn-danger mx-2 mt-2"
                                            onClick={() => deleteMemberTemp(memberTemp.id_temp)}>
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
                    <button className="btn btn-outline-primary mx-2 mt-2" onClick={triggerDataTransfer}>
                        Approve All
                    </button>
                    <Link className="btn btn-outline-danger mx-2 mt-2" to="/admin">
                            Back to Dashboard
                        </Link>
                </div>
            </div>
        </div>
    );
}
