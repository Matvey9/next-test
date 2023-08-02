import styles from "../styles/index.module.css";
import Link from "next/link";
import Head from "next/head";

const MainContainer = ({children, keywords}) => {
    return (
        <>
            <Head>
                <meta keywords={"Moti, job" + keywords}></meta>
                <title>Main page</title>
            </Head>
            <nav className={styles.navbar}>
                <Link className={styles.link} href={"/"}>Main</Link>
                <Link className={styles.link} href={"/user"}>Users</Link>
            </nav>
            <div>
                {children}
            </div>
        </>
    );
};

export default MainContainer;