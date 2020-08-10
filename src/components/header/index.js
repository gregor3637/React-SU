// import React from 'react';

// import Link from '../link';
// import styles from './index.module.css';
// import getNavigation from '../../utils/navigation';
// import Image from '../../images/white-origami-bird.png';

// const Header = (props) => {
//     const links = getNavigation();

//     return (
//         <header className={styles.navigation}>
//             <img src={Image} className={styles.logo} />
//             {
//                 links.map((navElement) => {
//                     return (
//                         <Link
//                             key={navElement.title}
//                             href={navElement.link}
//                             title={navElement.title}
//                             type="header"
//                         />
//                     )
//                 })
//             }
//         </header>
//     );
// };

// export default Header;


import React, { Component } from 'react'

import UserContext from '../../Context';
import Link from '../link';
import styles from './index.module.css';
import getNavigation from '../../utils/navigation';
import Image from '../../images/white-origami-bird.png';

class Header extends Component {

    static contextType = UserContext;

    render() {
        const {
            loggedIn,
            user
        } = this.context;

        const links = getNavigation(loggedIn, user);
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
    }
}

export default Header;