import { useState } from "react";

const button = () => {
  const [person, setPerson] = useState("tufan");
  const [color, setColor] = useState("red");
  const [temp, SetTemp] = useState("");
  const [temp1, SetTemp1] = useState("");
  const [cars, setCars] = useState(["tesla x", "nexon", "neta v"]);
  const [car, setCar] = useState({
    name: "bmw",
    model: "yellow",
    modelYear: 2011,
  });
  const updateNexon =()=>{
    setCars((caes)=>{
      cars[1]="tata nexon";
      return [...cars]
    });
  };
  return (
    <>
      <div>
        person : {person}
        <input
          type="text"
          placeholder="Enter your name"
          onChange={(e) => SetTemp(e.target.value)}
        />
        <button onClick={() => setPerson(temp)}>Change</button>
        color : {color}
        <input
          type="text"
          placeholder="Enter color"
          onChange={(e) => SetTemp1(e.target.value)}
        />
        <button onClick={() => setColor(temp1)}> Changecolor</button>
      </div>
      {car.modelYear}
      <button
        onClick={() =>
          setCar((prev) => {
            return { ...prev, modelYear: "2002" };
          })
        }
      >
        Change
      </button>

      <hr />
      {cars.length > 0 &&
        cars.map((car) => {
          return <li key={car}>{car}</li>;
        })}
        <button onClick={updateNexon}>cahnge</button>

        

        <div>
        <select >
          <option value="">Select Country</option>
          <option value="">Nepal</option>
          <option value="">India</option>
          <option value="">China</option>
            
          
        </select>
        <select >
          <option value="">Select city</option>
          <option value="">KTM</option>
          <option value="">SKH</option>
          <option value="">PKR</option>
        
        </select>
      </div>
    </>
  );
};

export default button;
