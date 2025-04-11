import ComponentC from "./ComponentC";

function ComponentB() {
  return (
    <div className="box text-success">
      ComponentB
      <ComponentC />
    </div>
  );
}

export default ComponentB;
