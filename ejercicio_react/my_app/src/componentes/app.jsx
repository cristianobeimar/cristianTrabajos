function Profile({ name, img, telephone, address, age }) {
  return (
    <>
      <img src={img} alt={name} />

      <div>
        <h3>{name}</h3>
        <p>telefono: {telephone}</p>
        <p>Direccion: {address}</p>
        <p>Edad: {age}</p>
      </div>

      <button>ver detalles</button>
    </>
  );
}
export default Profile;
