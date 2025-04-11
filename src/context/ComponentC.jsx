import ComponentD from "./ComponentD";

function ComponentC() {
  return (
    <div className="box text-warning">
      ComponentC
      <ComponentD />
    </div>
  );
}

export default ComponentC;
