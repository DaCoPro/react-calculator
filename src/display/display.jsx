import './display.css';

export default function display ({ total, input }) {
    return (
        <div className="display">
            <h1 className="total">{input}</h1>
        </div>
    )
}