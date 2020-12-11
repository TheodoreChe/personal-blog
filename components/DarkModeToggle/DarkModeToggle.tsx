import React from 'react';
import styles from './DarkModeToggle.module.css';
import { TYPE_OF_THEME } from 'constants/style';
import { AppContext } from '../AppProvider/AppProvider';

export const DarkModeToggle: React.FC = () => {
    const { typeOfTheme, toggleTheme } = React.useContext(AppContext);

    return (
        <div className={styles.wrapper} onClick={toggleTheme}>
            {typeOfTheme === TYPE_OF_THEME.DARK ? <>🌙</> : <>🌤</>}
        </div>
    );
};
