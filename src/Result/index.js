import "./style.css"

const Result = ({setAmount, result}) => (
   <p className="result">
       <span></span>
       {result !== undefined && (
           <>
           {result.sourceAmount.toFixed(2)} PLN =&nbsp;
           <strong>{result.finalResult.toFixed(2)} {result.currency}</strong>
           </>
       )}
   </p>
);

export default Result;