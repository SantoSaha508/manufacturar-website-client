import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import UserRow from './UserRow';

const Users = () => {
    const [users, setUsers] = useState([]);
    const [user, isLoading, refetch] = useAuthState(auth);

    useEffect(() => {
        fetch(`https://vast-badlands-60767.herokuapp.com/user` , {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [user])

    if(isLoading){
        return <Loading></Loading>
    }

    return (
        <div>
            <h2>All Users are here: {users.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>User</th>
                            <th>Make Admin</th>
                            <th>Remove User</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map(u => <UserRow
                                key={u._id}
                                u={u}
                                refetch={refetch}
                            ></UserRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;