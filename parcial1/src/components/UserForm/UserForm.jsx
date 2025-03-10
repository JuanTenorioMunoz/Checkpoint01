const UserForm = ({setUser}) => {

    let name = ""
    let email = ""
    let role = ""

    const handleSubmit = (event) => {
		event.preventDefault();
        setUser(name, email, role);
	};

    const nameChanger = (event) =>{
        name = event.target.value;
        console.log(name)
    }

    const emailChanger = (event) =>{
        email = event.target.value;
        console.log(email)
    }

    const roleChanger = (event) =>{
        role = event.target.value;
        console.log(role)
    }

    return(
        <div className="user-form">
            <form onSubmit={handleSubmit}>
                <input onChange={(e) =>nameChanger(e)} className="name"></input>
                <input onChange={(e) =>emailChanger(e)}></input>
                <input onChange={(e) =>roleChanger(e)}></input>
                <button type="sumbit">Submit</button>
            </form>
        </div>
    )
}

export default UserForm;