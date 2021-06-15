import { useState } from "react";
import "./style.css";

const Form = ({ input }) => {

    const onFormSubmit = (event) => {
        event.preventDefault();


    };

    return (
        <form
            onSubmit={onFormSubmit}
            className="form">
            <p>
                {input}
            </p>
            <p>
                <label class="form__label">
                    <span class="form__text">Waluta</span>
                    <select className="form__field">
                        <option value="EUR">EUR</option>
                        <option value="USD">USD</option>
                    </select>
                </label>
            </p>

            <button className="form__button">Sprawdź</button>

        </form>)


};

export default Form;