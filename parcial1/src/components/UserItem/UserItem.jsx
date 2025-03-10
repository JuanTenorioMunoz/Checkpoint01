const UserItem = ({name, email, role}) => {
    return(
        <div className="user-data">
            <p>{name}</p>
            <p>{email}</p>
            <p>{role}</p>
        </div>
    )
}

export default UserItem;