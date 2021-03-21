import './CalcFace.css';
import { useState } from 'react';
import Display from './display/display';
import Keypad from './keypad/keypad';

export default function CalcFace() {
  const [total, setTotal] = useState(0);
  const [input, setInput] = useState(0);

  return (
    <div className="CalcFace">
      <Display total={total} input={input}/> 
      <Keypad setInput={setInput}/> 
    </div>
  );
}

