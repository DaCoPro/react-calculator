import './display.css';

export default function display ({ total }) {
    return (
        <div className="display">
            <h1>{total}</h1>
        </div>
    )
}