import './adder.css'
import {useState} from 'react';
const GIPVQ = () => {
  const [rzg, setRzg] = useState({qseljk: 6});
  return (
    <div>
      <button
        onClick={
          () => setRzg({
            ...rzg,
            qseljk: rzg.qseljk + 6
          })}>
        Cwc
      </button>
      <h1>{rzg.qseljk}</h1>
      <button
        onClick={
          () => setRzg({
            ...rzg,
            qseljk: rzg.qseljk - 4
          })}>
        Zveghjzj
      </button>
    </div>
  )
}
export default GIPVQ;