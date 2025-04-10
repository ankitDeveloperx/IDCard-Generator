import { useState } from 'react';

const IDCardForm = ({ onAdd }) => {
  const [form, setForm] = useState({
    name: '',
    id: '',
    department: '',
    designation: '',
    phone: '',
    email: '',
    photo: '',
  });

  const updateField = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setForm({ ...form, photo: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(form);
    setForm({
      name: '',
      id: '',
      department: '',
      designation: '',
      phone: '',
      email: '',
      photo: '',
    });
    e.target.reset(); // Reset file input
  };

  return (
    <form className="form-box" onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" value={form.name} onChange={updateField} required />
      <input name="id" placeholder="ID No" value={form.id} onChange={updateField} required />
      <input name="department" placeholder="Department" value={form.department} onChange={updateField} required />
      <input name="designation" placeholder="Designation" value={form.designation} onChange={updateField} required />
      <input name="phone" placeholder="Phone" value={form.phone} onChange={updateField} required />
      <input name="email" placeholder="Email" value={form.email} onChange={updateField} required />
      <input type="file" accept="image/*" onChange={handlePhotoUpload} />
      <button className='gen-btn' type="submit">Generate Card</button>
    </form>
  );
};

export default IDCardForm;
