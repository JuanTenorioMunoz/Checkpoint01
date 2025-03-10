const UserList = () => {

    const handleSubmit = (event) => {
		event.preventDefault();
	};

    return(
        userData.map((user)=>
            <div className="user-form">
             <form onSubmit={handleSubmit}>
            <input className="name"></input>
            <input className="email"></input>
            <input className="role"></input>
            <button type="sumbit">Submit</button>
        </form>
    </div>)
        
    )
}

export default UserList;