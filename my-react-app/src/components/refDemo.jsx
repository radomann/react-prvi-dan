import { useRef } from 'react';

export const RefDemo = () => {
  const inputRef = useRef(null);

  const handleClick = () => {
    console.log(inputRef);
    inputRef.current.focus();
    inputRef.current = null
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={handleClick}>Focus the input </button>
    </div>
  );
}


