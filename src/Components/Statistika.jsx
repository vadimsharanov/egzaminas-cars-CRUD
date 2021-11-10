function Statistika({ count, totalWeight, sortByWeight, sortByPassengers }) {
  return (
    <div className="container">
      <div className="row statistika">
        <div className="col-12">
          {" "}
          <h1>Automobiliu kiekis: {count} </h1>{" "}
        </div>
        <div className="col-12">
          <h1>
            Bendras automobiliu svoris:{" "}
            <span style={{ color: totalWeight > 50 ? "red" : "black" }}>
              {totalWeight} t
            </span>
          </h1>
        </div>
        <div className="col-12">
          <button className="button-weight" onClick={sortByWeight}>
            Sort by weight
          </button>
        </div>
        <div className="col-12">
          <button className="button-passengers" onClick={sortByPassengers}>
            Sort by passengers
          </button>
        </div>
      </div>
    </div>
  );
}
export default Statistika;
