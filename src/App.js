import Form from "./Form";
import Header from "./Header";
import Container from "./Container";
import Input from "./Input";
import Select from "./Select";
import Button from "./Button";
import { useState, useEffect } from 'react';
import currencies from "./currencies.js";
import Result from "./Result";
import Footer from "./Footer";
import "./App.css";
import Clock from "./Clock"

function App() {

  const [amount, setAmount] = useState("");
  const [result, setResult] = useState();
  const [currency, setCurrency] = useState(currencies[0].id);
  
  const date = new Date();
  const [time, setTime] = useState(date.getTime());

useEffect(() => {
  const intervalID = setInterval(() => {
setTime(time => time + 1000)
  }, 1000);

  return () => {
    clearInterval(intervalID);
  };
}, []);

  const calculateResult = (currency, amount) => {
    const rate = currencies.find(({ id }) => id === currency).rate;

    setResult({
      sourceAmount: +amount,
      finalResult: amount / rate,
      currency,
    });
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    calculateResult(currency, amount);
    if (amount !== "") {
      amount.trim();
      setAmount("");
    }
  };

  return (

    <Container>
      <Header
        title="Przelicznik walut"
      />
      <Clock
        time={time}
        setTime={setTime}
        date={date}
      />
      <Form
        onFormSubmit={onFormSubmit}
        input={
          <Input
            amount={amount}
            setAmount={setAmount}
          />
        }
        body={
          <Select
            currencies={currencies}
            currency={currency}
            setCurrency={setCurrency}
          />
        }
        button={
          <Button />
        }
      />
      <Result
        result={result}
        setResult={setResult}
        amount={amount}
      />
      <Footer />
    </Container>

  );
};

export default App;
