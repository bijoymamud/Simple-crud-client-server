import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Userss = () => {
    const loadedUsers = useLoaderData();
    const [users, setUsers] = useState(loadedUsers)



    const handleDelete = (_id) => {
        console.log('delete', _id);
        fetch(`http://localhost:5000/users/${_id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    alert('Successfully delete');

                    //UI theke delete korar jonno
                    const ramaining = users.filter(user => user._id !== _id);
                    setUsers(ramaining);

                }
            })

    }
    return (
        <div>
            <h3>{users.length}</h3>
            <div>
                {
                    users.map(user => <p key={user._id}>{user.name} : {user.email}: {user._id} <button onClick={() => handleDelete(user._id)}>X</button></p>)
                }
            </div>
        </div>
    );
};

export default Userss;