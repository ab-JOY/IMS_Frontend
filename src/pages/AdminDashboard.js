import React from 'react'
import { Link } from 'react-router-dom'

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
                            <i className="fa fa-edit fa-2x"></i>
                        </div>
                        <Link className="text-uppercase adText" to="/addmember">Add New Member</Link>
                    </div>
                </div>
            </div>
            <div className="col-xl-3 col-sm-6 py-5">
                <div className="card text-white bg-danger h-100">
                    <div className="card-body bg-danger">
                        <div className="rotate">
                            <i className="fa fa-edit fa-2x"></i>
                        </div>
                        <Link className="text-uppercase adText" to="/home">Update Existing Member</Link>
                    </div>
                </div>
            </div>
            <div className="col-xl-3 col-sm-6 py-5">
                <div className="card text-white bg-info h-100">
                    <div className="card-body bg-info">
                        <div className="rotate">
                            <i className="fa fa-users fa-2x"></i>
                        </div>
                        <Link className="text-uppercase adText" to="/pending">Pending Registrations</Link>
                    </div>
                </div>
            </div>
            <div className="col-xl-3 col-sm-6 py-5">
                <div className="card text-white bg-info h-100">
                    <div className="card-body bg-warning">
                        <div className="rotate">
                            <i className="fa fa-bar-chart fa-2x"></i>
                        </div>
                        <Link className="text-uppercase adText">Report</Link>
                    </div>
                </div>
            </div>
        </div>
        </div>
  )
}
