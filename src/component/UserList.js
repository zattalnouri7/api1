import axios from 'axios'
import React, { useEffect, useState } from 'react'

function UserList() {
    const [users, setusers] = useState([])
    useEffect(() => {
        try {
            axios
                .get("https://jsonplaceholder.typicode.com/users")
                .then((res) => { setusers(res.data) })

        } catch (error) {
            console.log(error);

        }
    }, [])
    return (
        <div>
            {users.map((el) => <div>
                <h1>{el.name}</h1>
            </div>)}
        </div>
    )
}

export default UserList