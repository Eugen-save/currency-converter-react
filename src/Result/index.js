import {Effect} from "./styled"

const Result = ({setAmount, result}) => (
   <Effect>
       {result !== undefined && (
           <>
           {result.sourceAmount.toFixed(2)} PLN =&nbsp;
           <strong>{result.finalResult.toFixed(2)} {result.targetCurrency}</strong>
           </>
       )}
   </Effect>
);

export default Result;