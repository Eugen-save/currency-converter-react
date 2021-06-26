import {Label, Text, FormSelect} from "../styled";

const Select = ({ currencies, setCurrency }) => {

    return (
       <p>
       <Label>
            <Text>Waluta</Text>
            <FormSelect
                onChange={({ target }) => setCurrency(target.value)}
                >
                {currencies.map(currency => (
                    <option
                        key={currency.id}
                        value={currency.id}>
                        {currency.name}
                    </option>
                ))
                }
            </FormSelect>
        </Label>
        </p>
    )
};

export default Select;