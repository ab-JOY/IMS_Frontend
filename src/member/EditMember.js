import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'


export default function EditMember() {

    let navigate = useNavigate()

    const {id}=useParams()

    const [member, setMember] = useState({
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

    const { firstName, middleName, lastName, age, dateOfBirth, sex, address, mobileNumber, membershipType} = member;

    const onInputChange = (e) => {
        setMember({ ...member, [e.target.name]: e.target.value })

    };

    useEffect(()=>{
        loadMembers()
    }, []);

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:8080/member/${id}`, member);
        navigate("/home");
    };

    const loadMembers = async ()=>{
        const result=await axios.get(`http://localhost:8080/member/${id}`)
        setMember(result.data)
    };


    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">Edit Member Information</h2>
                    <form onSubmit={(e) => onSubmit(e)}>
                        <div className="mb-3">
                            <label htmlFor="First Name" className="form-label">
                                First Name
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="First Name"
                                name="firstName"
                                value={firstName}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="Middle Name" className="form-label">
                                Middle Name
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Middle Name"
                                name="middleName"
                                value={middleName}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="Last Name" className="form-label">
                                Last Name
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Last Name"
                                name="lastName"
                                value={lastName}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Age" className="form-label">
                                Age
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Age"
                                name="age"
                                value={age}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="Date of Birth" className="form-label">
                                Date of Birth
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="MM-DD-YY"
                                name="dateOfBirth"
                                value={dateOfBirth}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="Sex" className="form-label">
                                Sex
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Sex"
                                name="sex"
                                value={sex}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="Mobile Number" className="form-label">
                                Mobile Number
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Mobile Number"
                                name="mobileNumber"
                                value={mobileNumber}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="Address" className="form-label">
                                Address
                            </label>
                            <select
                                className="form-select"
                                aria-label="Address"
                                name="address"
                                value={address}
                                onChange={(e) => onInputChange(e)}
                            >
                                <option value="" disabled>Select an address</option>
                                <option value="Casabaan">Casabaan</option>
                                <option value="Longos">Longos</option>
                                <option value="Tondo">Tondo</option>
                                <option value="Laoag">Laoag</option>
                                <option value="Lomboy">Lomboy</option>
                            </select>
                        </div>


                        <div className="mb-3">
                            <label htmlFor="Membership Type" className="form-label">
                                Membership Type
                            </label>
                            <select
                                className="form-select"
                                placeholder="Membership Type"
                                name="membershipType"
                                value={membershipType}
                                onChange={(e) => onInputChange(e)}
                            >
                                <option value="" disabled>Select type of Membership</option>
                                <option value="Member">Member</option>
                                <option value="Officer">Officer</option>
                            </select>
                        </div>

                        <button type="submit" className="btn btn-outline-primary">
                            Submit
                        </button>
                        <Link className="btn btn-outline-danger mx-2" to="/home">
                            Cancel
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    )
}
