import  { useRef, forwardRef } from 'react';

const CustomInput = forwardRef((props, ref) => {
  return <input ref={ref} {...props} />;
});

export const ForwRefDemo = ()=> {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <CustomInput ref={inputRef} placeholder="Type something..." />
      <button onClick={handleClick}>Focus the input</button>
    </div>
  );
}


