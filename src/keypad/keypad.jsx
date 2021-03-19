import './keypad.css';
import Leftside from './leftside/leftside';
import Rightside from './rightside/rightside';

export default function keypad () {
    return (
        <div className="keypad">
          <Leftside /> 
          <Rightside /> 
        </div>
    )
}