import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

const User = ({ user }) => {
  const { id, name, email, website, phone } = user;



  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title"> Name: {name}</h2>
          <p>Phone: {phone}</p>
          <p>Email: {email}</p>
          <p>Website: {website}</p>
          <div className="card-actions justify-end">
            <Link to={`/userDetiles/${id}`}>
            <button  className="btn btn-primary w-full">More detiles</button>
            </Link>
            
          </div>
        </div>
      </div>
    </div>
  );
};

User. propTypes ={
    user: PropTypes.object.isRequired
}


export default User;
