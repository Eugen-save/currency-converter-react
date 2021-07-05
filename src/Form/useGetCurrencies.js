import { useEffect, useState } from "react";

export const useGetCurrencies = () => {

    const [ratesData, setRatesData] = useState({
        status: "loading",
        date: null,
        rates: null,
    });

    useEffect(() => {
   
            const currenciesAPIUrl = "https://api.exchangerate.host/latest?base=PLN";

            const getAPI = async () => {
                try {
                    const response = await fetch(currenciesAPIUrl);

                    if (!response.ok) {
                        throw new Error(response.statusText);
                    }

                    const { date, rates } = await response.json();
                    setRatesData({ date, rates, status: rates ? "success" : "error" });
                } catch (error) {
                    setRatesData({ status: "error" });
                };
            };

            setTimeout(getAPI, 3_000);

    }, []);

    return ratesData;
}