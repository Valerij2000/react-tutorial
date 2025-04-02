export default function Button() {
  let counter = 0;
  const handleClick = () => {
    console.log("Button clicked!");
  };

  const handleClick2 = (name) => {
    if (counter === 0) {
      counter++;
      alert(`Hello, ${name}!`);
    } else {
      alert("You have already clicked the button!");
    }
  };

  const handleClick3 = (e) => {
    e.target.style.backgroundColor = "white";
    e.target.style.color = "green";
  };

  return (
    <>
      <button
        className="btn btn-danger m-4"
        onClick={() => handleClick2("Valerij")}
      >
        Click me
      </button>
      <button className="btn btn-danger m-4" onClick={(e) => handleClick3(e)}>
        Click me with event param
      </button>
    </>
  );
}
