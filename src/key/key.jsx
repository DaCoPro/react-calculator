import './key.css';

export default function key ({ value, setInput, input, total, setTotal }) {
    const operators = ['*', '/', '+', '-'];
    function handleNum() {
        let lastEl = input[input.length - 1];
        if (!input.length) {
            input.push(parseInt(value));
        } else if (input.length === 3) {
            let lNString = lastEl.toString() + value;
            input.pop();
            input.push(parseInt(lNString));
        } else if (parseInt(lastEl)) {
            let lNString = lastEl.toString() + value;
            input.push(parseInt(lNString));
            input.shift();
        }  else if (lastEl) {
            input.push(parseInt(value));
        }
    }
    function handleEqual () {
        
        let curNum = 0;
        let curOp = '';
        input.forEach(function(el) {
            let nextEl = input[0];
            if (parseInt(nextEl) && curNum) {
                curNum = nextEl;
            }
        });
    }
    function handleClear() {
        input = [];
        setInput(input);
    }
    function handlePM () {
        let tempTotal = total * -1;
        setTotal(tempTotal);
    }
    function handleOperator () {
        if (operators.includes(input[input.length - 1])) {
            input.pop();
            // input.push(value)
        }
        input.push(value);
    }
    function handleKeyClick() {
        if (parseInt(value) + 1) {
            handleNum();
        } else if (value === 'C') {
            handleClear();
        } else if (value === '+/-') {
            handlePM();
        } else if ( operators.includes(value)) {
            handleOperator();
        }
        
        setInput(input);
        console.log(input)
    }

    return (
        <div className="key"  onClick={handleKeyClick}>
            <h1>{value}</h1>
        </div>
    )
}