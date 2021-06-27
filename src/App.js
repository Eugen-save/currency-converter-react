import Form from "./Form";
import Header from "./Header";
import Container from "./Container";
import { useState } from 'react';
import currencies from "./currencies.js";
import Result from "./Result";
import Footer from "./Footer";
import Clock from "./Clock";
import { GlobalStyle } from "./styled";

function App() {

  const [amount, setAmount] = useState("");
  const [result, setResult] = useState();
  const [currency, setCurrency] = useState(currencies[0].id);

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
    <>
      <GlobalStyle />
      <Container>
        <Header
          title="Przelicznik walut"
        />
        <Clock
        />
        <Form
          onFormSubmit={onFormSubmit}
          currencies={currencies}
          currency={currency}
          setCurrency={setCurrency}
          amount={amount}
          setAmount={setAmount}
        />
        <Result
          result={result}
          setResult={setResult}
          amount={amount}
        />
        <Footer />
      </Container>
    </>
  );
};

export default App;
