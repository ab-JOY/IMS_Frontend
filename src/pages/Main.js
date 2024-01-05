import React from 'react'
import { Link } from 'react-router-dom'

export default function Index() {
  return (
 
  <div className="body">
    <section>
      <div className="centered h-screen">
        <div>
          <div>
            <h1>San Vicente Tribal Association</h1>
          </div>
        </div>
        <div class='space-x-10'>
         <Link className="btn btn-outline-danger" to="/register">Register</Link>
        </div>
      </div>
    </section>
  </div>


  )
}
