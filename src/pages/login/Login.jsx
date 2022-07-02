import React from 'react'
import "./login.scss"
import {Sidebar} from "../../components/sidebar/Sidebar"
import {Navbar} from "../../components/navbar/Navbar"
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';

export const Login = () => {
  return (
    <div className='new'>
        <Sidebar />
        <div className="newContainer">
            <Navbar />
            <div className="up">
                <h1>Register New User</h1>
            </div>
            <div className="down">
                <div className="left">
                    <img src="./images/no-image.jpg" alt="" className='regImage'/>
                </div>
                <div className="right">
                    <form>
                        <div className="formInput">
                            <label htmlFor='file'>
                                Profile Image: <DriveFolderUploadOutlinedIcon className='icon' />
                            </label>
                            <input type="file" id='file' style={{display: "none"}}/>
                        </div>
                        <div className="formInput">
                            <label>Username</label>
                            <input type="text" placeholder='@username'/>
                        </div>
                        <div className="formInput">
                            <label>Full Name</label>
                            <input type="text" placeholder='Full Name'/>
                        </div>
                        <div className="formInput">
                            <label>Email</label>
                            <input type="email" placeholder='name@email.com'/>
                        </div>
                        <div className="formInput">
                            <label>Phone Number</label>
                            <input type="text" placeholder='Phone'/>
                        </div>
                        <div className="formInput">
                            <label>Password</label>
                            <input type="password" placeholder='*****'/>
                        </div>
                        <div className="formInput">
                            <label>Address</label>
                            <input type="text" placeholder='Full Address'/>
                        </div>
                        <div className="formInput">
                            <label>Country</label>
                            <input type="text" placeholder='Country'/>
                        </div>
                        <button>Register</button>
                    </form>
                </div>
            </div>
        </div>

    </div>
  )
}
