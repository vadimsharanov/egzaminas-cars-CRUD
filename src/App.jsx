import { useEffect, useState } from "react";

import axios from "axios";
import Cars from "./Components/Cars";
import NewCar from "./Components/NewCar";
import Statistika from "./Components/Statistika";
// import Sorting from "./Components/Sorting";
function App() {
  const [cars, setCars] = useState([]);
  const [carsCount, setCarsCount] = useState(0);
  const [carsTotalWeight, setCarsTotalWeight] = useState(0);
  const [postuKeitimoLaikas, setPostuKeitimoLaikas] = useState(Date.now());

  useEffect(() => {
    axios
      .get("http://localhost:3002/cars")
      .then(function (response) {
        // handle success4
        console.log(response.data);
        setCars(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, [postuKeitimoLaikas]);

  const addCar = (data) => {
    console.log(data);
    axios
      .post("http://localhost:3002/cars", data)
      .then(function (response) {
        // handle success4
        setPostuKeitimoLaikas(Date.now());
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };

  const deleteCar = (id) => {
    axios
      .delete("http://localhost:3002/cars/" + id)
      .then(function (response) {
        // handle success4
        setPostuKeitimoLaikas(Date.now());
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };

  const updateCar = (data, id) => {
    axios
      .put("http://localhost:3002/cars/" + id, data)
      .then(function (response) {
        // handle success4
        setPostuKeitimoLaikas(Date.now());
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };
  const getCount = () => {
    axios
      .get("http://localhost:3002/cars/count")
      .then(function (response) {
        // handle success4
        setCarsCount(response.data[0].carsCount);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };
  const getCarsTotalWeight = () => {
    axios
      .get("http://localhost:3002/cars/totalWeight")
      .then(function (response) {
        // handle success4
        setCarsTotalWeight(response.data[0].totalWeight);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };

  useEffect(() => {
    getCount();
    getCarsTotalWeight();
  }, [postuKeitimoLaikas]);

  // const crud = {
  //   add:addCow,
  //   delete: deleteCow,
  //   edit: updateCow,
  // }

  const sortByWeight = () => {
    let carsCopy = cars.slice();
    carsCopy = carsCopy.sort((a, b) => b.weight - a.weight);
    setCars(carsCopy);
  };

  const sortByPassengers = () => {
    let carsCopy = cars.slice();
    carsCopy = carsCopy.sort((a, b) => b.pasangers - a.pasangers);
    setCars(carsCopy);
  };

  return (
    <>
      <Statistika
        count={carsCount}
        totalWeight={carsTotalWeight}
        sortByWeight={sortByWeight}
        sortByPassengers={sortByPassengers}
      ></Statistika>
      {/* <Statistika count={carsCount} total={cowsTotalMilk} sortByWeight={sortByWeight}  sortByMilk={sortByMilk} ></Statistika> */}
      {/* <NewCow addCow={crud.add} ></NewCow> */}
      <NewCar addCar={addCar}></NewCar>
      <Cars cars={cars} deleteCar={deleteCar} updateCar={updateCar}></Cars>
      {/* <Cows updateCow={crud.edit} dateFormat={dateFormat} cows={cows} deleteCow={crud.delete} ></Cows> */}
    </>
  );
}

export default App;
