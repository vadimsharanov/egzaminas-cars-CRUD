import { useState } from "react";

function NewCar({ addCar }) {
  const [carPlate, setCarPlate] = useState("");
  const [carWeight, setCarWeight] = useState("");
  const [passengers, setPassengers] = useState("");
  const [priority, setPriority] = useState("");

  const inputController = (event, value) => {
    switch (value) {
      case "plate":
        setCarPlate(event.target.value);
        break;
      case "weight":
        setCarWeight(event.target.value);
        break;
      case "passengers":
        setPassengers(event.target.value);
        break;
      case "priority":
        setPriority(event.target.checked);
        break;
    }
  };

  const collectData = () => {
    let data = {
      carPlate: carPlate,
      carWeight: parseInt(carWeight),
      passengers: parseInt(passengers),
      priority: priority === true ? 1 : 0,
    };
    console.log(data);
    if (carPlate === "") {
      alert(`Laukas "Plate" negali buti tuscias!`);
      return ;
    }
    if (isNaN(parseInt(carWeight))) {
        alert(`Laukas "Weight" negali buti tuscias!`)
        return ;
    }
    if (isNaN(parseInt(passengers))) {
        alert(`Laukas "Passengers" negali buti tuscias!`)
        return ;
    }
    if (passengers < 0  ) {
        alert(`Laukas "Passengers" negali buti neigiamas!`)
        return ;
    }
    if (parseInt(carWeight) > 99.99) {
      alert(`Laukas "Weight" negali virsyti 99.99!`)
      return ;
    }
    if ( carWeight <= 0) {
      alert(`Laukas "Weight" turi buti didesnis nei nulis!`)
      return ;
      }
    else {
      addCar(data);
      setCarPlate("");
      setCarWeight("");
      setPassengers("");
      setPriority("");
      alert("Masina prideta!");
    }
  };

  return (
    <section>
      <div className="container ">
        <div className="row new-car">
          <div className="col-12  col-xl-3 col-lg-3">
            <div className="new-plate">
              <span>Plate:</span>
              <input
                type="text"
                onChange={(event) => inputController(event, "plate")}
                value={carPlate}
              />
            </div>
          </div>
          <div className="col-12  col-xl-3 col-lg-3 ">
            <div className="new-weight">
              <span>Weight:</span>
              <input
                type="number"
                onChange={(event) => inputController(event, "weight")}
                value={carWeight}
              />
            </div>
          </div>
          <div className="col-12  col-xl-3 col-lg-3 ">
            <div className="new-passengers">
              <span>Passengers:</span>
              <input
                type="number"
                onChange={(event) => inputController(event, "passengers")}
                value={passengers}
              />
            </div>
          </div>
          <div className="col-12  col-xl-2 col-lg-2 priority ">
            <div className="new-priority">
              <span>Priority:</span>
              <input
                value="on"
                className="checkbox"
                type="checkbox"
                onChange={(event) => inputController(event, "priority")}
              />
            </div>
          </div>
          <div className="col-12">
            <div className="new-button">
              <button onClick={collectData}>Done!</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default NewCar;
