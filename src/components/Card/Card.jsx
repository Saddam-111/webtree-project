import './Card.css'
const Card = ({ user }) => {
  if(!user){
    return <p>Loading...</p>
  }
  return (
    <div className="card">
      <img src={user.picture.large} alt="User" />
      <div className="card-content">
      <h2>{user.name.first} {user.name.last}</h2>
      <p>Gender: {user.gender}</p>
      <p>Phone: {user.phone}</p>
      </div>

    </div>
  );
};

export default Card;
