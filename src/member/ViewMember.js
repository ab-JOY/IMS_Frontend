import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function ViewMember() {

    const [member, setMember]=useState({
        firstName: "",
        middleName: "",
        lastName: "",
        age: "",
        dateOfBirth: "",
        sex: "",
        address: "",
        mobileNumber: "",
        membershipType: ""
  
    });

    const {id}=useParams();

    useEffect(()=>{
        loadMembers();
    }, []);

    const loadMembers=async ()=>{
        const result=await axios.get(`http://localhost:8080/member/${id}`)
        setMember(result.data)
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">Member Details</h2>
                    <div className="card">
                        <div className="card-header">
                            Details of Member with id: {member.id}

                            <ul className="list-group list-goup-flush">
                                <li className="list-group-item">
                                    <b>FIRST NAME:</b>
                                    {member.firstName}
                                </li>
                                <li className="list-group-item">
                                    <b>MIDDLE NAME:</b>
                                    {member.middleName}
                                </li>
                                <li className="list-group-item">
                                    <b>LAST NAME:</b>
                                    {member.lastName}
                                </li>
                                <li className="list-group-item">
                                    <b>Age:</b>
                                    {member.age}
                                </li>
                                <li className="list-group-item">
                                    <b>SEX:</b>
                                    {member.sex}
                                </li>
                                <li className="list-group-item">
                                    <b>DATE OF BIRTH:</b>
                                    {member.dateOfBirth}
                                </li>
                                <li className="list-group-item">
                                    <b>MOBILE NUMBER:</b>
                                    {member.mobileNumber}
                                </li>
                                <li className="list-group-item">
                                    <b>ADDRESS:</b>
                                    {member.address}
                                </li>
                                <li className="list-group-item">
                                    <b>Membership Type:</b>
                                    {member.membershipType}
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                    <Link className="btn btn-primary my-2" to={"/home"}>Back to Home</Link>
                </div>
            </div>
        </div>
    )
}
