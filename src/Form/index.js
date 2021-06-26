import "./style.css";
import Select from "./Select";
import Input from "./Input";
import Button from "./Button";

const Form = ({ amount, setAmount, button, currency, currencies, setCurrency, onFormSubmit }) => {

    return (
        <form
            onSubmit={onFormSubmit}
            className="form">
            <Input
                amount={amount}
                setAmount={setAmount}
            />
            <Select
                currencies={currencies}
                currency={currency}
                setCurrency={setCurrency}
            />
            <Button />
        </form>)
};

export default Form;