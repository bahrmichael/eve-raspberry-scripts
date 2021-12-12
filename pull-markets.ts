import axios from 'axios';

async function runMe() {
    const res = await axios.get(`https://esi.evetech.net/v1/markets/10000002/orders/`);
    const {data} = res;
    console.log(data.length);
    console.log(data[0])
}

runMe().catch(console.error);