import {Label, Text, FormInput} from "../styled";

const Input = ({ amount, setAmount }) => {

    return (
        <p>
        <Label>
            <Text>Kwota w PLN:</Text>
            <FormInput
                value={amount}
                onChange={({ target }) => setAmount(target.value)}
                placeholder="Wpisz kwotę w PLN"
                type="number"
                required
                step="0.01"
            />
        </Label>
        </p>
    );

};

export default Input;