import "./style.css";

const Select = ({ currencies, setCurrency }) => {

    return (
       <p>
       <label className="form__labelOption">
            <span className="form__textOption">Waluta</span>
            <select
                onChange={({ target }) => setCurrency(target.value)}
                className="form__fieldOption">
                {currencies.map(currency => (
                    <option
                        key={currency.id}
                        value={currency.id}>
                        {currency.name}
                    </option>
                ))
                }
            </select>
        </label>
        </p>
    )
};

export default Select;