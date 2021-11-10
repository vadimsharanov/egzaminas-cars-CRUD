import { useEffect, useState } from "react";



// function Car({ car, dateFormat, deletecar,updatecar }) {
function Car({ car,deleteCar, updateCar}) {
  const [newWeight, setNewWeight] = useState(car.weight)
  const [newPriority, setNewPriority] = useState()

  const isChecked = () => {
    car.priority === 0 ? setNewPriority(false) : setNewPriority(true);
  };
  useEffect(() => {
      isChecked()
  }, [])
  
    const inputController = (event, value)=> {
        switch (value) {
            case "weight":
                setNewWeight(event.target.value)
                break;
                case "priority":
                    setNewPriority(event.target.checked)
                break;
        }
    }

    const collectData =() => {
        let data = {
            newWeight: parseInt(newWeight),
            newPriority: newPriority === true? 1: 0,
        }
        console.log(data);
        if (newWeight === "") {
            alert(`Laukas "Weight" negali buti tuscias!`)
            return ;
        }
        if (newWeight > 99.99) {
            alert(`Laukas "Weight" negali virsyti 99.99!`)
            return ;
        }
        if (newWeight <= 0) {
          alert(`Laukas "Weight" turi buti didesnis, negu nulis`)
          return ;
        }
        else {
          updateCar(data,car.id)
          alert("Atnaujinta!")
        }
    }
    
  return (
    <>
      <div className="one-car-container container">
        <div className="one-car-id">
          <div>ID: {car.id}</div>
        </div>
        <div className="one-car-name">
          <div>Plate: {car.plate}</div>
        </div>
        <div className="one-car-weight">
          Weight: {car.weight} t
          <input value={newWeight} onChange={(event)=> inputController(event, "weight")} />
        </div>
        <div className="one-car-passengers">
          <div>Passengers:  {car.pasangers}
          </div>
          {/* <input type="text" value={newTotalMilk} onChange={(event)=> inputController(event, "totalMilk")} /> */}
        </div>
        <div className="one-car-priority">
          <span style={{color: car.priority === 0? "red" : "#00FF21"}} >
          Priority: {car.priority === 0? "Ne" : "Taip"}
          </span>
          <input className="checkbox" value="on" type="checkbox" checked={newPriority} onChange={(event)=> inputController(event, "priority")} />
        </div>
        <div className="col-12 button-container ">
          <div>
            <button
              onClick={() => deleteCar(car.id)}
              className="trinimo-mygtukas"
            >
              Trinti
            </button>
          </div>
          <button onClick={collectData} className="redagavimo-mygtukas">Redaguoti</button>
        </div>
      </div>
    </>
  );
}

export default Car;
