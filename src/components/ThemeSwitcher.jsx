import { useTheme } from "./customHook";

export const ThemeSwitcher = () => {
    const [theme, updateTheme] = useTheme();

    return (
        <div className={theme}>
            <p>Current theme: {theme}</p>
            <button onClick={updateTheme}>Toggle Theme</button>
        </div>
    );
}