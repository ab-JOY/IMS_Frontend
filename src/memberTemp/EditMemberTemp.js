import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'


export default function EditMemberTemp() {

    let navigate = useNavigate()

    const {id}=useParams()

    const [memberTemp, setMembersTemp] = useState({
        firstName_temp: "",
        middleName_temp: "",
        lastName_temp: "",
        age_temp: "",
        dateOfBirth_temp: "",
        sex_temp: "",
        address_temp: "",
        mobileNumber_temp: "",
        membershipType_temp: ""
    });

    const { firstName_temp, middleName_temp, lastName_temp, age_temp, dateOfBirth_temp, sex_temp, address_temp, mobileNumber_temp, membershipType_temp} = memberTemp;

    const onInputChange = (e) => {
        setMember({ ...memberTemp, [e.target.name]: e.target.value })

    };

    useEffect(()=>{
        loadMembers()
    }, []);

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:8080/memberTemp/${id_temp}`, memberTemp);
        navigate("/home");
    };

    const loadMembers = async ()=>{
        const result=await axios.get(`http://localhost:8080/memberTemp/${id_temp}`)
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
                                name="middleName"
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
                                name="lastName"
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
                                name="age"
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
                                name="dateOfBirth"
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
                                name="sex"
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
                                name="mobileNumber"
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
                                name="address"
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
                                name="membershipType"
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
                        <Link className="btn btn-outline-danger mx-2" to="/home">
                            Cancel
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    )
}
