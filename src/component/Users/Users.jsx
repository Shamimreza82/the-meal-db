import { useLoaderData } from "react-router-dom";
import User from "../User/User";

const Users = () => {

    const users = useLoaderData(); 

    return (
        <div>
            <div className="grid grid-cols-3 gap-4 my-7">
            {
                users.map(user => <User key={user.id} user={user}></User>)
            }
            </div>
        </div>
    );
};

export default Users;