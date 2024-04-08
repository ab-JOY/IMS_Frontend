import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faUsers, faUser, faAdd } from '@fortawesome/free-solid-svg-icons'; // Import the required icons

export default function AdminDashboard() {
  return (
    <div className="container align-items-md-center">
      <div className="col main pt-5 mt-3">
        <p className="lead d-none d-sm-block text-black">Admin Dashboard</p>
      </div>
      <div className="row mb-3">
        <div className="col-xl-3 col-sm-6 py-5">
          <div className="card text-white bg-success h-100">
            <div className="card-body bg-success">
              <div className="rotate">
                <FontAwesomeIcon icon={faAdd} size="2x" />
              </div>
              <Link className="text-uppercase adText" to="/addmember">Add New Member</Link>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 py-5">
          <div className="card text-white bg-danger h-100">
            <div className="card-body bg-danger">
              <div className="rotate">
                <FontAwesomeIcon icon={faEdit} size="2x" />
              </div>
              <Link className="text-uppercase adText" to="/home">Manage Members</Link>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 py-5">
          <div className="card text-white bg-info h-100">
            <div className="card-body bg-info">
              <div className="rotate">
                <FontAwesomeIcon icon={faUsers} size="2x" />
              </div>
              <Link className="text-uppercase adText" to="/pending">Pending Registrations</Link>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 py-5">
          <div className="card text-white bg-warning h-100"> {/* Fixed the bg color class */}
            <div className="card-body bg-warning">
              <div className="rotate">
                <FontAwesomeIcon icon={faUser} size="2x" />
              </div>
              <Link className="text-uppercase adText" to="/newadmin">Create New Admin Account</Link>
            </div>
          </div>
        </div>
        <div>
          <Link className="btn btn-outline-danger mx-2 mt-2" to="/">Logout</Link>
        </div>
      </div>
    </div>
  );
}
