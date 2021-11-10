import Car from "./Car";



// function Cars({ cows, dateFormat,deleteCow,updateCow }) {
    function Cars({cars,deleteCar, updateCar}) {
  return (
     
    <div className="cars-container">
      {cars.map((item) => (
        <Car key={item.id} car={item}  deleteCar={deleteCar} updateCar={updateCar} ></Car>
        // <Car key={item.id} cow={item} dateFormat={dateFormat} updateCow={updateCow} deleteCow={deleteCow}></Car>
      ))}
    </div>
  );
}
export default Cars;
