import { useState } from 'react';
import IDCardForm from './IDCardForm';
import IDCardDisplay from './IDCardDisplay';
import './IDCard.css';

const IDCard = () => {
  const [dataList, setDataList] = useState([]);

  const addCard = (data) => {
    setDataList([...dataList, data]);
  };

  const deleteCard = (index) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this ID card?");
    if (confirmDelete) {
      const updatedList = dataList.filter((_, i) => i !== index);
      setDataList(updatedList);
    }
  };

  return (
    <div className="main-box">
      <h2 className="heading">Employee ID Card Generator</h2>
      <IDCardForm onAdd={addCard} />
      <div className="card-list">
        {dataList.map((item, index) => (
          <IDCardDisplay key={index} info={item} onDelete={() => deleteCard(index)} />
        ))}
      </div>
    </div>
  );
};

export default IDCard;
