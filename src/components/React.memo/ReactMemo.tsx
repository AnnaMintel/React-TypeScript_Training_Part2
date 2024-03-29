import React, { useState } from "react";

const NewMessagerCounter = (props: { count: number }) => {
    return <div>{props.count}</div>
}

// const UsersSecret = (props: { users: Array<string> }) => {
//     return <div>{
//         props.users.map((u, i) => <div key={i}>{u}</div>)
//     }
//     </div>
// }

// const Users = React.memo(UsersSecret);

//2nd way

const Users =  React.memo ((props: { users: Array<string> }) => {
    return <div>{
        props.users.map((u, i) => <div key={i}>{u}</div>)
    }
    </div>
})


export const Example1 = () => {
    const [counter, setCounter] = useState(0);
    const [users, setUsers] = useState(["Helena" , "Krista", "Iviem"]);

    const addUser = () => {
        const newUsers = [...users, "Sveta" + new Date().getTime()];
        setUsers(newUsers);
    }

    return <>
    <button onClick={ () => setCounter(counter + 1)}>+</button>
    <button onClick={addUser}>add user</button>

            <NewMessagerCounter count={counter} />
            <Users users={users} />
    </>
}

