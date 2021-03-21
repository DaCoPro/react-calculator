import './key.css';

export default function key ({ value, setInput }) {
    function handleKeyClick() {
        setInput(value);
    }
    return (
        <div className="key">
            <h1 onClick={handleKeyClick}>{value}</h1>
        </div>
    )
}