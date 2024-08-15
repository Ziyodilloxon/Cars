// axios import
import axios from "axios";
import axionsClient from "../utils/axios";

// rect imports
import { useEffect, useState } from "react";

function Home() {
  const [cars, setCars] = useState([]);
  useEffect(() => {
    axionsClient("/cars")
      .then((data) => setCars(data.data.data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      {cars.map((car) => {
        return (
          <div className="card glass w-96">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="car!"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{car.title}</h2>
              <p>How to park your car at your garage?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Learn now!</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
