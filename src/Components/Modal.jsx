import React, { useState } from 'react';
import Modal from './Modal';

const Card = ({ title, onClick, gradientClass, colorClass, data }) => {
  const [expanded, setExpanded] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedRowIndex, setSelectedRowIndex] = useState(-1);

  const handleItemClick = (item, index) => {
    setSelectedItem(item);
    setSelectedRowIndex(index);
    setExpanded(!expanded); // Toggle expanded state
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
    setSelectedRowIndex(-1);
    setExpanded(false);
  };

  return (
    <div className={`relative mb-8 transition-all duration-300 ease-in-out`} onMouseEnter={() => setExpanded(true)} onMouseLeave={() => setExpanded(false)}>
      <div className={`bg-gradient-to-r ${gradientClass} hover:from-purple-600 hover:to-blue-500 p-20 rounded-3xl shadow-2xl transform hover:scale-110 transition-transform duration-300 ease-in-out cursor-pointer`}>
        <div className='text-center text-white text-6xl font-bold'>{title}</div>
      </div>
      {expanded && (
        <div className='mt-4'>
          <div className={`bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-4xl ${colorClass}`}>
            <table className='w-full text-white'>
              <thead>
                <tr>
                  <th className='text-left p-4'>ID</th>
                  <th className='text-left p-4'>Name</th>
                  <th className='text-left p-4'>Age</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={item.id} className={`border-t border-gray-700 cursor-pointer hover:bg-gray-700 hover:text-white transition-all duration-300 ease-in-out`} onClick={() => handleItemClick(item, index)}>
                    <td className={`p-4 ${index === selectedRowIndex ? 'bg-gray-700 text-white transform scale-110' : ''}`}>{item.id}</td>
                    <td className={`p-4 ${index === selectedRowIndex ? 'bg-gray-700 text-white transform scale-110' : ''}`}>{item.name}</td>
                    <td className={`p-4 ${index === selectedRowIndex ? 'bg-gray-700 text-white transform scale-110' : ''}`}>{item.age}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
      {selectedItem && (
        <Modal item={selectedItem} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default Card;
