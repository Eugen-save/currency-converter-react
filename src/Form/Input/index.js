import "./style.css";

const Input = ({ amount, setAmount }) => {

    return (
        <p>
        <label className="form__labelInput">
            <span className="form__textInput">Kwota w PLN:</span>
            <input
                value={amount}
                onChange={({ target }) => setAmount(target.value)}
                placeholder="Wpisz kwotę w PLN"
                className="form__fieldInput"
                type="number"
                required
                step="0.01"
            />
        </label>
        </p>
    );

};

export default Input;