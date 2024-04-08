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
        alert("you are about to submit")
        e.preventDefault();
        await axios.post(`http://localhost:8080/memberTemp`, memberTemp);
        navigate("/");
    }

    return (
    <div className="form-container">
      <h2 className="text-center m-4">Register</h2>
      <form className="form" onSubmit={(e) => onSubmit(e)}>
        <div className="mb-3">
          <label htmlFor="firstName_temp">First Name</label>
          <input
            type="text"
            className="form-input"
            id="firstName_temp"
            placeholder="First Name"
            name="firstName_temp"
            required
            value={firstName_temp}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="middleName_temp">Middle Name</label>
          <input
            type="text"
            className="form-input"
            id="middleName_temp"
            placeholder="Middle Name"
            name="middleName_temp"
            value={middleName_temp}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="lastName_temp">Last Name</label>
          <input
            type="text"
            required
            className="form-input"
            id="lastName_temp"
            placeholder="Last Name"
            name="lastName_temp"
            value={lastName_temp}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="age_temp">Age</label>
          <input
            type="text"
            required
            className="form-input"
            id="age_temp"
            placeholder="Age"
            name="age_temp"
            value={age_temp}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="dateOfBirth_temp">Date of Birth</label>
          <input
            type="date"
            required
            className="form-input"
            id="dateOfBirth_temp"
            placeholder="MM-DD-YY"
            name="dateOfBirth_temp"
            value={dateOfBirth_temp}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="sex_temp">Sex</label>
          <input
            type="text"
            required
            className="form-input"
            id="sex_temp"
            placeholder="Sex"
            name="sex_temp"
            value={sex_temp}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="mobileNumber_temp">Mobile Number</label>
          <input
            type="text"
            required
            className="form-input"
            id="mobileNumber_temp"
            placeholder="Mobile Number"
            name="mobileNumber_temp"
            value={mobileNumber_temp}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="address_temp">Address</label>
          <select
            className="form-input select"
            required
            aria-label="Address"
            id="address_temp"
            name="address_temp"
            value={address_temp}
            onChange={(e) => onInputChange(e)}
          >
            <option value="" disabled>
              Select an address
            </option>
            <option value="Casabaan">Casabaan</option>
            <option value="Longos">Longos</option>
            <option value="Tondo">Tondo</option>
            <option value="Laoag">Laoag</option>
            <option value="Lomboy">Lomboy</option>
          </select>
        </div>
        <div className="mb-3 get-all-col">
          <label htmlFor="membershipType_temp">Membership Type</label>
          <select
            className="form-input select"
            required
            id="membershipType_temp"
            name="membershipType_temp"
            value={membershipType_temp}
            onChange={(e) => onInputChange(e)}
          >
            <option value="" disabled>
              Select type of Membership
            </option>
            <option value="Member">Member</option>
            <option value="Officer">Officer</option>
          </select>
        </div>
        <div className="duo-button text-center get-all-col">
          <button type="submit" className="submit">
            Submit
          </button>
          <Link className="cancel-btn" to="/">
            <button className="cancel">Cancel</button>
          </Link>
        </div>
      </form>
    </div>

    )
}
