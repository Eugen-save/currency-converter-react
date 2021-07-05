import Select from "./Select";
import Input from "./Input";
import Button from "./Button";
import Result from "../Result";
import { useState } from "react";
import { useGetCurrencies } from "./useGetCurrencies";
import { TextLoading, LoadingContainer, Circle, Animation } from "./Message/Loading/styled";

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
                <>
                    <LoadingContainer>
                        <Circle>
                            <Animation circle1></Animation>
                            <Animation circle2></Animation>
                            <Animation circle3></Animation>
                            <Animation circle4></Animation>
                            <Animation circle5></Animation>
                            <Animation circle6></Animation>
                            <Animation circle7></Animation>
                            <Animation circle8></Animation>
                            <Animation circle9></Animation>
                            <Animation circle10></Animation>
                            <Animation circle11></Animation>
                            <Animation circle12></Animation>
                        </Circle>
                        <TextLoading>
                            Strona jest w trakcie pobierania danych z Europiejskiego Banku Centralnego. Prośba o chwilę cierpliwości :)
                        </TextLoading>
                    </LoadingContainer>
                </>
            );
        case "error":
            return <p>Coś poszło nie tak</p>
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