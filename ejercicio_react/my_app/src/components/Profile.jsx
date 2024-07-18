import "./Profile.css";

function Profile({ name, img, telephone, address = "Por definir", age }) {
  return (
    <div className="card-person">
      <img className="card-image" src={img} alt={name} />
      <div className="card-content">
        <h3>{name}</h3>
        <p>Telefono: {telephone}</p>
        <p>Dirección: {address}</p>
        <p>Edad: {age}</p>
      </div>
    </div>
  );
}

export default Profile;
