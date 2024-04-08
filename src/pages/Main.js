import React from 'react'
import { Link } from 'react-router-dom'

export default function Index() {
  return (
    <section id="home">
      <div className="hero-page">
        <div className="title">
          <h1>
            San Vicente <span>Tribal Association</span>
          </h1>
        </div>
        <Link to={"/register"}>
          <button className="button">Register</button>
        </Link>
        <Link className="button-login" to="/login">Login</Link>
      </div>
    </section>
  )
}
