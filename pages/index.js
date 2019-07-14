import fetch from 'isomorphic-unfetch';

import Layout from "../components/Layout";
import Prices from "../components/Prices";

const Index = (props) => (
    <Layout>
        <div>
            <h1>Welcome to BitzPrice</h1>
            {props.time.updated}
            <Prices></Prices>
        </div>
    </Layout>
);

Index.getInitialProps = async () => {
    const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
    const data = await res.json();

    return {
        time: data.time,
        bpi: data.bpi
    }
};

export default Index;
