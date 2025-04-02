import "../styles/list.scss";

export default function List({ fruits }) {
  const sortedFruits = fruits.filter((value) => value.weight >= 200);

  const fruitList = sortedFruits.map((fruit) => (
    <li key={fruit.id} className="list-group-item">
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <h5 className="mb-1">
            <span className="fruit-name" style={{ color: fruit.color }}>
              {fruit.name}
            </span>
          </h5>
          <p className="mb-1">Origin: {fruit.origin}</p>
          <small>
            {fruit.isTropical ? "Tropical Fruit" : "Non-Tropical Fruit"}
          </small>
        </div>
        <div className="text-end">
          <p className="mb-0">Weight: {fruit.weight}g</p>
          <p className="mb-0">Price: ${fruit.price.toFixed(2)}</p>
        </div>
      </div>
      <div className="mt-2">
        <h6>Nutrients:</h6>
        <ul className="list-unstyled">
          {Object.entries(fruit.nutrients).map(([key, value]) => (
            <li key={key}>
              <small>
                {key}: {value}
              </small>
            </li>
          ))}
        </ul>
      </div>
    </li>
  ));

  return (
    <div className="container mt-4">
      <h2 className="mb-3">Fruit List</h2>
      <ul className="list-group">{fruitList}</ul>
    </div>
  );
}
