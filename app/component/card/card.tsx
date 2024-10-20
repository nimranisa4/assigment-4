import React from 'react';

interface tprops {
  Name: string;
  Age: number;
  RollNo: number;
  Day: string;
}

const Card = (props: tprops) => {
  return (
    <div className="p-4 m-4 bg-gradient-to-r from-blue-500 to-green-500 shadow-lg rounded-xl text-white">
      <h1 className="text-3xl font-extrabold">Name: {props.Name}</h1>
      <h2 className="text-2xl font-semibold">Age: {props.Age}</h2>
      <h3 className="text-xl font-medium">Roll No: {props.RollNo}</h3>
      <h4 className="text-lg italic">Day: {props.Day}</h4>
    </div>
  );
};

export default Card;
