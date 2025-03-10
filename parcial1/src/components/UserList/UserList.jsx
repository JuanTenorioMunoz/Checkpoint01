import { useEffect } from "react";
import UserItem from "../UserItem/UserItem";

const UserList = ({userData}) => {

    console.log("data", userData)

    return (
        <div className="user-list">
        {userData.map((user) => {
            return(
                <UserItem className="user-data" 
                name={user.name} 
                email={user.email}
                role={user.role}
                ></UserItem>
            ) 
        })}
        </div>
    )
}

export default UserList;