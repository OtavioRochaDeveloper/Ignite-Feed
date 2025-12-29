import styles from './Header.module.css';

import Creative from '../assets/2.png';

export function Header() {
    return (
        <header className={styles.header}>
            <img src={Creative} alt="Logotipo do ignite"/>
        </header>
    );
}