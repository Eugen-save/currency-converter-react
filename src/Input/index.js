import "./style.css";
import {useState} from 'react';

const Input = () => {

    const [amount, setAmount] = useState("");

    return (
        <label class="form__label">
        <span class="form__text">Kwota w PLN:</span>
        <input
            value={amount}
            onChange={({ target }) => setAmount(target.value)}
            placeholder="Wpisz kwotę w PLN"
            autofocus
            class="form__field"
            type="number"
            required
            step="0.01"
        />
    </label>
    );
       
};

export default Input;