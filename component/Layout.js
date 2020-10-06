import Navbar from './Navbar';
import Head from 'next/head';
import Link from 'next/link';

const Layout = (props) => (
    <div>
        <Head>
            <title> Bitcoin Price </title>
            <link rel="stylesheet" href="https://bootswatch.com/4/yeti/bootstrap.min.css" />
        </Head>
        <Navbar />
        {props.children}
    </div>
);

export default Layout;