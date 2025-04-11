import { useRef } from "react";

/**
 * 
 * @returns ✅ What’s happening:
useRef(null) → starts with a reference to nothing.

We attach ref={inputRef} to the input element.

When the button is clicked, we access .current → which points to the DOM input → and we focus it.
 */

function FocusInput() {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.focus(); // Access the actual input DOM node
  };

  return (
    <>
      <input
        className="form-control mb-3"
        id="exampleFormControlInput1"
        placeholder="Type something here"
        ref={inputRef}
        type="text"
      />
      <button className="btn btn-primary" onClick={handleClick}>
        Focus the input
      </button>
    </>
  );
}

export default FocusInput;
