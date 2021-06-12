import "./style.css";

const Form = () => (

    <form className="form">
        <fieldset className="form__field">
            <legend className="form__legend">Wybierz walutę</legend>
            <p>
                <label>
                    <select className="form__select">
                        <option value="EUR">EUR</option>
                        <option value="PLN">PLN</option>
                        <option value="USD">USD</option>
                        <option value="">Wybierz walutę</option>
                    </select><input className="form__input" type="number" min="1" step="any" value="1" required />
                </label>
            </p>
            <p>
                <label>
                    <select className="form__select">
                        <option value="PLN">PLN</option>
                        <option value="EUR">EUR</option>
                        <option value="USD">USD</option>
                        <option value="">Wybierz walutę</option>
                    </select><input className="form__input" type="number" min="1" step="any" disabled />
                </label>
            </p>

        </fieldset>

        <button className="form__button">Sprawdź</button>

    </form>
);

export default Form;