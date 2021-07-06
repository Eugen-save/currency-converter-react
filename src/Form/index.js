import Select from "./Select";
import Input from "./Input";
import Button from "./Button";
import Result from "../Result";
import { useState } from "react";
import { useGetCurrencies } from "./useGetCurrencies";
import Loading from "./Message/Loading";
import Error from "./Message/Error";

const Form = () => {

    const [amount, setAmount] = useState("");
    const [result, setResult] = useState();
    const [targetCurrency, setTargetCurrency] = useState("EUR");

    const ratesData = useGetCurrencies();
    const status = ratesData.status;

    const calculateResult = (targetCurrency, amount) => {
        const rate = ratesData.rates[targetCurrency];

        setResult({
            sourceAmount: +amount,
            finalResult: amount * rate,
            targetCurrency,
        });
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        calculateResult(targetCurrency, amount);
        if (amount !== "") {
            amount.trim();
            setAmount("");
        }
    };
    switch (status) {
        case "loading":
            return (
                <Loading />);
        case "error":
            return (
                <Error />
            )
        case "success":
            return (
                <>
                    <form
                        onSubmit={onFormSubmit}>
                        <Input
                            amount={amount}
                            setAmount={setAmount}
                        />
                        <Select
                            targetCurrency={targetCurrency}
                            setTargetCurrency={setTargetCurrency}
                            rates={ratesData.rates}
                        />
                        <Button />
                    </form>
                    <Result
                        result={result}
                        setResult={setResult}
                        amount={amount}
                    />
                </>

            );
        default:
            return "";
    };
};

export default Form;