import Layout from '../component/Layout';
import Fetch from 'isomorphic-unfetch';
import Prices from '../component/Prices';

const index = (props) => (
    <Layout>
        <div className="container">
            <h1>Welcome to BitzPrice</h1>
            <p>Check current Bitcoin rate</p>
            <Prices data={props.data} bpi={props.bpi} />
        </div>
    </Layout>

);
index.getInitialProps = async () => {
    const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');

    const data = await res.json();

    return {
        data: data,
        bpi: data.bpi
    };
}

export default index; 