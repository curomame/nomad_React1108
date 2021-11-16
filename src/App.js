import {useState, useEffect} from "react"



function App() {

  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [dollar, setDollar] = useState(0);
  const [convertcoin, setConvertcoin] = useState("BTC");
  const onChange = (e) => {

    let A = e.target.value;
    let B = coins.filter(function(data){return data.symbol === convertcoin})[0].quotes.USD.price;
    
    setDollar(A / B);
  }

  const checkDollar = (e) => {
    
    let D = coins.filter(function(data){return data.symbol === e.target.value})[0].quotes.USD.price;
    console.log(dollar);
    setDollar((prev) => prev / D);
    setConvertcoin(e.target.value);

    };

  console.log()

  useEffect(()=> {
    fetch("https://api.coinpaprika.com/v1/tickers")
    .then((res) => res.json())
    .then((json) => setCoins(json));
    setLoading(false);

  },[])
  
    return (
<div>
  <h1>The Coins! {loading ? "" : `${coins.length}`} </h1>
  <p>Input Your Dollar</p>
  <input onChange={onChange} type="number"></input>
  <hr/>
  {loading ? <strong> Loading... </strong> : (<select onChange={checkDollar}>{coins.map((coin)=> <option value={coin.symbol}>{coin.name} ({coin.symbol}) : {coin.quotes.USD.price} USD </option>)}</select>)}
  <hr/>
  {loading ? "" : <p>You can buy {dollar} {convertcoin} Coins</p> }
</div>
);
}

export default App;
