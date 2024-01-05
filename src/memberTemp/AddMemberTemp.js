import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


export default function AddMemberTemp() {

    let navigate = useNavigate()

    const [memberTemp, setMemberTemp] = useState({
        firstName_temp: "",
        middleName_temp: "",
        lastName_temp: "",
        age_temp: "",
        dateOfBirth_temp: "",
        sex_temp: "",
        address_temp: "",
        mobileNumber_temp: "",
        membershipType_temp: ""
    })

    const { firstName_temp, middleName_temp, lastName_temp, age_temp, dateOfBirth_temp, sex_temp, address_temp, mobileNumber_temp, membershipType_temp } = memberTemp

    const onInputChange = (e) => {
        setMemberTemp({ ...memberTemp, [e.target.name]: e.target.value })

    }

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8080/memberTemp", memberTemp);
        navigate("/");
    }

    return (
        <div className="container">
            <div className="form">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">Register New Member</h2>
                    <form onSubmit={(e) => onSubmit(e)}>
                        <div className="mb-3">
                            <label htmlFor="First Name" className="form-label">
                                First Name
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="First Name"
                                name="firstName_temp"
                                value={firstName_temp}
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
                                name="middleName_temp"
                                value={middleName_temp}
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
                                name="lastName_temp"
                                value={lastName_temp}
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
                                name="age_temp"
                                value={age_temp}
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
                                name="dateOfBirth_temp"
                                value={dateOfBirth_temp}
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
                                name="sex_temp"
                                value={sex_temp}
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
                                name="mobileNumber_temp"
                                value={mobileNumber_temp}
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
                                name="address_temp"
                                value={address_temp}
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
                                name="membershipType_temp"
                                value={membershipType_temp}
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
                        <Link className="btn btn-outline-danger mx-2" to="/">
                            Cancel
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    )
}
