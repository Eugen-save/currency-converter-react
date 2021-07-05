import { Label, Text, FormSelect } from "../styled";

const Select = ({rates, setTargetCurrency, targetCurrency}) => {

    return (
        <p>
            <Label>
                <Text>Waluta</Text>
                <FormSelect
                    onChange={({ target }) => setTargetCurrency(target.value)}
                    value={targetCurrency}
                >
                    {Object.keys(rates).map((currency) => (
                        <option
                            key={currency}
                            value={currency}>
                            {currency}
                        </option>
                    ))
                    }
                </ FormSelect>
            </Label>
        </p>
    )
};

export default Select;