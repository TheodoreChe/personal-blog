import React from 'react';
import { TYPE_OF_THEME } from 'constants/style';
import { AppContext } from 'modules/AppProvider/AppProvider';
import { Breadcrumb } from 'modules/Breadcrumb';
import { Header } from './components';
import styles from './Layout.module.css';

type Props = {
    children: React.ReactNode;
    pageName?: string;
    withHeader?: boolean;
};

export const Layout: React.FC<Props> = (props: Props) => {
    const { typeOfTheme } = React.useContext(AppContext);
    const classNameList = [styles.main, typeOfTheme === TYPE_OF_THEME.DARK ? styles.dark : styles.light]
        .filter(Boolean)
        .join(' ');
    return (
        <main className={classNameList}>
            {props.pageName && <Breadcrumb pageName={props.pageName} />}
            {props.withHeader && <Header />}
            <div className={styles.wrapper}>{props.children}</div>
        </main>
    );
};
