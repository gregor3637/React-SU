import React from 'react';

import Link from '../link';
import styles from './index.module.css';
import getNavigation from '../../utils/navigation';
import Image from '../../images/white-origami-bird.png';

const Header = (props) => {
    const links = getNavigation();

    return (
        <header className={styles.navigation}>
            <img src={Image} className={styles.logo} />
            {
                links.map((navElement) => {
                    return (
                        <Link
                            key={navElement.title}
                            href={navElement.link}
                            title={navElement.title}
                            type="header"
                        />
                    )
                })
            }
        </header>
    );
};

export default Header;