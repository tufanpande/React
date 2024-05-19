import { useState } from "react";

const Question = () => {
  const [Country, setCountry] = useState("");
  const [cities, setCities] = useState([]);

  const countries = {
    Nepal: ["Kathmandu", "Pokhara", "Butwal"],
    India: ["Mumbai", "Delhi", "Bangalore"],
    China: ["Beijing", "HongKOng"],
  };

  const handleCountryChange = (e) => {
    const country = e.target.value;
    setCountry(country);
    setCities(countries[country] || []);
  };

  return (
    <div>
      <select onChange={handleCountryChange}>
        <option value="">Select a Country</option>
        <option value="Nepal">Nepal</option>
        <option value="India">India</option>
        <option value="China">China</option>
      </select>

      {Country && (
        <select>
          <option>Select a City</option>
          {cities.map((city, index) => (
            <option key={index} value={city}>
              {city}
            </option>
          ))}
        </select>
      )}
    </div>
  );
};

export default Question;