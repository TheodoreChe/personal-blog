import React from 'react';
import { TYPE_OF_THEME } from 'constants/style';

type Props = {
    children: React.ReactNode;
};

export const AppContext = React.createContext({ typeOfTheme: undefined, toggleTheme: undefined });

export const AppProvider: React.FC<Props> = (props: Props) => {
    const [typeOfTheme, setTheme] = React.useState(TYPE_OF_THEME.DARK);
    const toggleTheme = (): void => {
        setTheme(typeOfTheme === TYPE_OF_THEME.DARK ? TYPE_OF_THEME.LIGHT : TYPE_OF_THEME.DARK);
    };

    return <AppContext.Provider value={{ typeOfTheme, toggleTheme }}>{props.children}</AppContext.Provider>;
};
