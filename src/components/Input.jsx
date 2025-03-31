import Button from "./Button";

export default function Input() {
  return (
    <div className="todo-input-container">
      <input
        type="text"
        name="todo"
        id="todo-text"
        className="todo-input"
        placeholder="whats in your mind today :)"
      />
      <Button />
    </div>
  );
}
