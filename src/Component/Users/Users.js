import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Profile from '../Modal/Profile/Profile';
import Update from '../Modal/Update/Update'; 


const Users = () => {
    const [user, Setuser] = useState([]);
    useEffect( ()=>{
        fetch('https://ums-mncv.onrender.com/api/users')
        .then(res => res.json())
        .then(data => Setuser(data));
    }, [user]);
    const today = new Date().toJSON().slice(0, 10);
const iurl = 'https://www.shutterstock.com/image-vector/vector-flat-illustration-grayscale-avatar-600nw-2264922221.jpg';
    const handlemidDelete = (id) => {
        const proceed = window.confirm("Are you sure you want to delete?");
        if (proceed) {
          const url = `https://ums-mncv.onrender.com/${id}`;
          console.log(url);
          fetch(url, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.deletedCount > 0) {
                const Setuser1 = user.filter((data) => data._id !== id);
                Setuser(Setuser1);
              }
            });
        }
      };
    
    return (
        <div className='p-4'>
            <div className='flex  mt-4'>
                <h1  className='text-4xl flex mx-auto text-center'> UMI - User Management System</h1>
            </div>
            <div className='flex justify-end p-3 m-3'> 
                 <button className="btn btn-primary " onClick={()=>document.getElementById('my_modal_4').showModal()}>Add User</button>
            </div>
            <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                <tr>
                    <th>SN</th>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Phone Number</th>
                    <th>Email</th>
                    <th>Office location</th>
                    <th>action</th>
                </tr>
                </thead>
                <tbody>
                {/* row 1 */}
                {
                    user.map((r,q ) =>(
                        <tr key={r._id}>
                     <td>{q + 1}</td>
                    <td>
                    <div className="flex items-center gap-3">
                        <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12"> 
                            <img src={r.image_url || iurl} alt="Avatar Tailwind CSS Component" />
                        </div>
                        </div>
                        <div>
                        <div className="font-bold">{r.first_name} {r.last_name}</div>
                        <div className="text-sm opacity-50">{r.country}</div>
                        </div>
                    </div>
                    </td>
                    <td>
                    {r.address_1} 
                    <br/>
                    <span className="badge badge-ghost badge-sm">{r.address_2}, {r.country}</span>
                    </td>
                    <td>{r.mobile_number}</td>
                    <td>{r.email}</td>
                    <th>
                    {r.office_location}
                    <Profile r={r} _id={r._id}></Profile>
                    <Update  r={r} _id={r._id} q={q}></Update>
                    </th>
                    <th>
                        <button className='btn btn-xs btn-error m-1' onClick={() =>handlemidDelete(r._id)} >x</button>   
                       <label  for={r._id} className="btn text-white p-1 m-1 btn-success btn-xs">📃 </label>
                       
                    </th>
                </tr>
                    ))
                }
                
                </tbody>
                {/* foot */}
                <tfoot>
                <tr>
                    <th>SN</th>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Phone Number</th>
                    <th>Email</th>
                    <th>Office location</th>
                    <th>action</th>
                </tr>
                </tfoot>
                
            </table>
            </div>
            {/* <JsonToExcel className="dfx "  title="Download excel" data={user}  fileName={`${today} Account Backup`} /> */}
        </div>
    );
};

export default Users;