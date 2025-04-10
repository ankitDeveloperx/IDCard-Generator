import './IDCard.css';

const IDCardDisplay = ({ info, onDelete }) => {
  const { name, id, department, designation, phone, email, photo } = info;

  return (
    <div className="card-box">
      <button className="delete-btn" title='click to Delete' onClick={onDelete}>X</button>
      <div className="top-box">
        <h3>AV TECH PVT. LTD.</h3>
        <p>Just Creative</p>
      </div>

      <div className="photo-box">
        <img src={photo || "https://via.placeholder.com/80"} alt="Profile" />
      </div>

      <div className="name-box">
        <h4>{name}</h4>
        <p>{designation}</p>
      </div>

      <div className="info-box">
        <p><b>ID No:</b> {id}</p>
        <p><b>Dept:</b> {department}</p>
        <p><b>Deg:</b> {designation}</p>
        <p><b>Phone:</b> {phone}</p>
        <p><b>Email:</b> {email}</p>
      </div>

      <div className="bottom-box">
        ankitDeveloperx
      </div>
    </div>
  );
};

export default IDCardDisplay;
