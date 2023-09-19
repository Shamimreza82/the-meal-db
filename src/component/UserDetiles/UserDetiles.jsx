import { useLoaderData, useNavigate } from "react-router-dom";

const UserDetiles = () => {
  const usedDetiles = useLoaderData();
  const navigate = useNavigate()
    const {name, username, website} = usedDetiles; 



  return (
    <div>
      <div className="card bg-base-100 shadow-xl">

        <div className="card-body items-center text-center">
          <h2 className="card-title">{username}</h2>
          <h2 className="card-title"> Name: {name}</h2>
          <p>{website}</p>
          <div className="card-actions">
            <button onClick={()=> navigate(-1) } className="btn btn-primary">Back</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetiles;
