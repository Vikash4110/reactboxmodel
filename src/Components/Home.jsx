import React, { useState, useEffect } from 'react';
import Card from './Card';

const data = {
  A: [
    { id: 1, name: 'Alice', age: 25 },
    { id: 2, name: 'Arnold', age: 30 },
    { id: 3, name: 'Annie', age: 22 },
  ],
  B: [
    { id: 1, name: 'Bob', age: 35 },
    { id: 2, name: 'Bella', age: 28 },
    { id: 3, name: 'Bill', age: 32 },
  ],
  C: [
    { id: 1, name: 'Charlie', age: 40 },
    { id: 2, name: 'Catherine', age: 29 },
    { id: 3, name: 'Carl', age: 36 },
  ],
};

const colorClasses = ['bg-red-500', 'bg-green-500', 'bg-blue-500', 'bg-yellow-500', 'bg-purple-500', 'bg-green-800'];
const gradientClasses = [
  'from-blue-500 to-purple-600',
  'from-green-400 to-blue-600',
  'from-red-400 to-yellow-600',
  'from-pink-500 to-red-500',
  'from-teal-400 to-cyan-500',
];

const Home = () => {
  const [selectedKey, setSelectedKey] = useState(null);
  const [colorClass, setColorClass] = useState(colorClasses[0]);
  const [gradientClass, setGradientClass] = useState(gradientClasses[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setColorClass((prevColorClass) => {
        const currentIndex = colorClasses.indexOf(prevColorClass);
        const nextIndex = (currentIndex + 1) % colorClasses.length;
        return colorClasses[nextIndex];
      });
      setGradientClass((prevGradientClass) => {
        const currentIndex = gradientClasses.indexOf(prevGradientClass);
        const nextIndex = (currentIndex + 1) % gradientClasses.length;
        return gradientClasses[nextIndex];
      });
    }, 2000); // Change color and gradient every 2 seconds

    return () => clearInterval(interval);
  }, []);

  const handleCardClick = (key) => {
    setSelectedKey(selectedKey === key ? null : key);
  };

  return (
    <div className='relative grid place-items-center text-richblack-100 text-3xl h-screen bg-gray-900'>
      <div className='flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:space-x-4 lg:space-x-12 mb-8'>
        <Card
          title="A"
          onClick={handleCardClick}
          gradientClass={gradientClass}
          colorClass={colorClass}
          data={data.A}
        />
        <Card
          title="B"
          onClick={handleCardClick}
          gradientClass={gradientClass}
          colorClass={colorClass}
          data={data.B}
        />
        <Card
          title="C"
          onClick={handleCardClick}
          gradientClass={gradientClass}
          colorClass={colorClass}
          data={data.C}
        />
      </div>
    </div>
  );
};

export default Home;
