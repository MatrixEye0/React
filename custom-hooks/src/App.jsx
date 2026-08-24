import { useState } from "react";
import { InputBox } from "./components";
import useCurrencyInfo from "./customHooks/useCurrency";
import "./App.css";

function App() {
  const [amount, setAmount] = useState(0);

  const [from, setFrom] = useState("USD");

  const [to, setTo] = useState("INR");

  const [convertedAmount, setConvertedAmount] = useState(0);

  // Custom Hook
  const currencyInfo = useCurrencyInfo(from);

  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);

    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to.toLowerCase()]);
  };

  return (
    <div className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat">

      <div className="w-full">

        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">

          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >

            {/* FROM */}
            <div className="w-full mb-1">

              <InputBox
                label="From"
                amount={amount}
                CurrencyOption={options}
                selectCurrency={from}
                onCurrencyChnage={(currency) => {
                  setFrom(currency);
                }}
                onAmountChange={(amount) => {
                  setAmount(amount);
                }}
              />

            </div>


            {/* SWAP */}
            <div className="relative w-full h-0.5">

              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                Swap
              </button>

            </div>


            {/* TO */}
            <div className="w-full mt-1 mb-4">

              <InputBox
                label="To"
                amount={convertedAmount}
                CurrencyOption={options}
                selectCurrency={to}
                onCurrencyChnage={(currency) => {
                  setTo(currency);
                }}
                amountDisable
              />

            </div>


            {/* CONVERT */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>

          </form>

        </div>

      </div>

    </div>
  );
}

export default App;