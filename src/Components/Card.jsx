import React, { useState } from 'react';
import Modal from './Modal';

const Card = ({ title, gradientClass, colorClass, data }) => {
  const [expanded, setExpanded] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedRowIndex, setSelectedRowIndex] = useState(-1);

  const handleRowHover = (index) => {
    setSelectedRowIndex(index);
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
    setSelectedRowIndex(-1);
    setExpanded(false);
  };

  return (
    <div className={`relative mb-8 sm:mx-2 md:mx-4 lg:mx-6 transition-all duration-300 ease-in-out`} onMouseEnter={() => setExpanded(true)} onMouseLeave={() => setExpanded(false)}>
      <div className={`bg-gradient-to-r ${gradientClass} p-8 sm:p-20 md:p-30 rounded-3xl shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer`}>
        <div className='text-center text-white text-5xl md:text-6xl lg:text-7xl font-bold'>{title}</div>
      </div>
      {expanded && (
        <div className='mt-4'>
          <div className={`bg-gray-800 p-6 sm:p-8 rounded-lg shadow-lg ${colorClass}`}>
            {data && data.length > 0 ? (
              <table className='w-full text-white'>
                <thead>
                  <tr>
                    <th className='text-left p-3 sm:p-4'>ID</th>
                    <th className='text-left p-3 sm:p-4'>Name</th>
                    <th className='text-left p-3 sm:p-4'>Age</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, index) => (
                    <tr key={item.id} className={`border-t border-gray-700 transition-all duration-300 ease-in-out ${index === selectedRowIndex ? 'bg-gray-700 text-white' : ''}`} onMouseEnter={() => handleRowHover(index)} onMouseLeave={() => handleRowHover(-1)}>
                      <td className={`p-3 sm:p-4 ${index === selectedRowIndex ? 'font-bold' : ''}`}>{item.id}</td>
                      <td className={`p-3 sm:p-4 ${index === selectedRowIndex ? 'font-bold' : ''}`}>{item.name}</td>
                      <td className={`p-3 sm:p-4 ${index === selectedRowIndex ? 'font-bold' : ''}`}>{item.age}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p className="text-white">No data available</p>
            )}
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
