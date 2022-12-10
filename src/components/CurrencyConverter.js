import { useState } from "react";
import ExchangeRate from "./ExchangeRate";

const CurrencyConverter = () => {
    const currencies = ["BTC", "ETH", "USDT", "BNB", "USDC", "BUSD", "XRP"];
    const [chosenPrimaryCurrency, setChosenPrimaryCurrency] = useState("BTC"); 
    console.log(chosenPrimaryCurrency); 
    const [chosenSecondaryCurrency, setChosenSecondaryCurrency] = useState("BTC"); 
    console.log(chosenSecondaryCurrency); 
    return (
        <div className="currency-converter">
            <h2>CurrencyConverter</h2>
            <div className="input-box">
                <table>
                    <tbody>
                        <tr>
                            <td>Primary Currency: </td>
                            <td>
                                <input 
                                    type="number" 
                                    name="currency-amount-1" 
                                    value={""}
                                />
                            </td>
                            <td>
                                <select
                                    value={chosenPrimaryCurrency} 
                                    name="currency-option-1" 
                                    className="currency-options" 
                                    onChange={(event => setChosenPrimaryCurrency(event.target.value))}
                                >
                                    {/* for each currency in currencies array, place currency inside options */}
                                    {currencies.map((currency, _index) => (<option key={_index}>{currency}</option>))}
                                </select> 
                            </td>
                        </tr>

                        <tr>
                            <td>Secondary Currency: </td>
                            <td>
                                <input 
                                    type="number" 
                                    name="currency-amount-2" 
                                    value={""}
                                />
                            </td>
                            <td>
                                <select
                                    value={chosenSecondaryCurrency} 
                                    name="currency-option-2" 
                                    className="currency-options" 
                                    onChange={(event => setChosenSecondaryCurrency(event.target.value))}
                                >
                                    {/* for each currency in currencies array, place currency inside options */}
                                    {currencies.map((currency, _index) => (<option key={_index}>{currency}</option>))}
                                </select> 
                            </td> 
                        </tr>
                    </tbody>
                </table>

            </div>

            <ExchangeRate />
        </div>
    );
}

export default CurrencyConverter;