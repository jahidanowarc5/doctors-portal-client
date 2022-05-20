import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({user,refetch}) => {
    const {email,role} = user;
    const makeAdmin = () =>{
        fetch(`https://mighty-taiga-47514.herokuapp.com/user/admin/${email}`,{
            method: 'PUT',
            headers:{
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => {
            if(res.status === 403){
                toast.error('failed to made an admin')
            }
            return res.json()})
        .then(data =>{
            if(data.modifiedCount > 0){
                refetch();
                toast.success(`successfully made an admin`)
            }
          
        } )
    }
    return (
        
      <tr>
      <th>1</th>
      <td>{email}</td>
      <td>{role !== 'admin' && <button onClick={makeAdmin} className="btn btn-xs">Admin</button>}</td>
      <td><button className="btn btn-xs">Remove admin</button></td>
    </tr>
    );
};

export default UserRow;