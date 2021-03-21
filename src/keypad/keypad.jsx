import './keypad.css';
import Key from '../key/key';

export default function keypad ({ setInput, input, total, setTotal }) {
  const symbols = ['C', '+/-', '%', '/', '7', '8', '9', '*', '4', '5', '6', '-', '1', '2', '3', '+', '0','',  '.', '='];
  const renderKeypad = symbols.map((s) => (
    <Key key={s} value={s} setInput={setInput} input={input} total={total} setTotal={setTotal}/> 
  ))
  return (
      <div className="keypad">
        {renderKeypad}
      </div>
  )
}