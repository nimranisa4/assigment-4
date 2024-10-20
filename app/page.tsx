import React from 'react';
import Card from './component/card/card';

export default function Home() {
  
  const students = [
    { Name: 'Nimra', Age: 19, RollNo: 12345, Day: 'Monday', bgColor: 'from-purple-500 to-pink-500' },
    { Name: 'Laiba', Age: 18, RollNo: 56789, Day: 'Tuesday', bgColor: 'from-yellow-400 to-red-400' },
    { Name: 'Kinza', Age: 17, RollNo: 90123, Day: 'Wednesday', bgColor: 'from-teal-400 to-blue-400' },
    { Name: 'Areeba', Age: 16, RollNo: 34567, Day: 'thursday', bgColor: 'from-blue-400 to-black-400' },
  ];

  return (


    <div className="min-h-screen bg-gray-100 flex flex-wrap justify-center items-center">
      {students.map((student, index) => (
        <div key={index} className={`p-4 m-4 bg-gradient-to-r ${student.bgColor} shadow-lg rounded-xl text-white`}>
          <Card
            Name={student.Name}
            Age={student.Age}
            RollNo={student.RollNo}
            Day={student.Day}
          />
        </div>
      ))}
    </div>
  );
}
