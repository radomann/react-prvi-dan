/* import { ThemeContext } from "../contexts/ThemeContext";

const {Consumer} = ThemeContext

export const ThemedButton = () => {
  return (
    <Consumer>
      {theme => <button className={theme}>I am styled by the theme context!</button>}
    </Consumer>
  );
}
 */
import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

export const ThemedButton = ()=> {
  const theme = useContext(ThemeContext);

  return <button theme={theme}>I am styled by the theme context!</button>;
}
