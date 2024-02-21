import { Fragment } from 'react';

import styles from './page.module.css';

export default function Home() {
    return (
        <Fragment>
            <head>
                <title>Hemfree</title>
            </head>
            <body className={styles.ody}>
                <nav className={styles.nav}>
                    <a href="/" className={styles.navLinku}>
                        Hemfree{' '}
                    </a>
                    <a href="/" className={styles.navLink}>
                        Home{' '}
                    </a>
                    <a href="/login" className={styles.navLink}>
                        Login
                    </a>
                    <a href="/signup" className={styles.navLink}>
                        Sign Up
                    </a>
                </nav>

                <main>
                    <section id="Bienvenue" className={styles.container}>
                        <h3>Hemfree</h3>
                        <p>
                            Les meilleurs serveurs Minecraft
                        </p>
                    </section>
                    <section id="Serveurs" className={styles.servers}>
                        <h3 className={styles.heading}>Nos serveurs</h3>
                        <p className={styles.subHeading}>
                            Choisissez votre serveur
                        </p>
                        <div className={styles.serverContainer}>
                            <a href="Serveur2.html" className={styles.server}>
                                Serveur 1
                            </a>
                            <a href="Serveur1.html" className={styles.server}>
                                Serveur 2
                            </a>
                        </div>
                    </section>
                    <section
                        id="Contact"
                        className={[
                            styles.textCenter,
                            styles.contentSection,
                        ].join(' ')}
                    >
                        <div className="CON">
                            <div className="row">
                                <div className="CC">
                                    <h2>A propos</h2>
                                    <p>Vous pouvez nous consultez sur</p>
                                    <ul className="list-inline banner-social-buttons"></ul>
                                    <li className="list-inline-item">
                                        <button
                                            className="btn btn-primary btn-lg btn-default"
                                            type="button"
                                        >
                                            <i className="fa fa-facebook-plus fa-fw"></i>
                                            <span className="network-name">
                                                <a
                                                    href="https://www.facebook.com/profile.php?id=61556567765376"
                                                    target="_blank"
                                                >
                                                    Facebook
                                                </a>
                                            </span>
                                        </button>
                                    </li>
                                    <h1></h1>
                                    <li className="list-inline-item">
                                        <button
                                            className="btn btn-primary btn-lg btn-default"
                                            type="button"
                                        >
                                            <i className="fa fa-twitter fa-fw"></i>
                                            <span className="network-name">
                                                <a
                                                    href="https://twitter.com/HemfreeCraft"
                                                    target="_blank"
                                                >
                                                    Twitter
                                                </a>
                                            </span>
                                        </button>
                                    </li>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
                <footer>
                    <h2>Contact us</h2>
                    <a href="https://myaccount.google.com/u/5/?hl=fr&utm_source=OGB&utm_medium=act&pli=1">
                        Hemfree.minecraft@gmail.com
                    </a>
                    <h1></h1>
                    <a href="link">123-456-7890</a>
                    <p>&copy; 2024 - Hemfree</p>
                </footer>
            </body>
        </Fragment>
    );
}
