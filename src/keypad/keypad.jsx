import './keypad.css';
import Key from '../key/key';

export default function keypad ({ setInput }) {
  const symbols = ['C', '+/-', '%', '/', '7', '8', '9', '*', '4', '5', '6', '-', '1', '2', '3', '+', '0','',  '.', '='];
  const renderKeypad = symbols.map((s) => (
    <Key key={s} value={s} setInput={setInput}/> 
  ))
  return (
      <div className="keypad">
        {renderKeypad}
      </div>
  )
}