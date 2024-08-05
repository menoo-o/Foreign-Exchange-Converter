import './App.css';
import useCurrencyRates from './customHook/useCurrencyRates';
import { useState } from 'react';

function App() {
    const { rates, error, loading } = useCurrencyRates();
    const [fromCurrency, setFromCurrency] = useState('');
    const [toCurrency, setToCurrency] = useState('');
    const [amount, setAmount] = useState('');
    const [convertedAmount, setConvertedAmount] = useState('');

    const handleConvert = () => {
        if (fromCurrency && toCurrency && rates[toCurrency]) {
            const rate = rates[toCurrency];
            setConvertedAmount((amount * rate).toFixed(2));
        } else {
            setConvertedAmount('Invalid currency');
        }
    };

    return (
        <div className='container'>
            <div className="hero">
                <img src='/bgimg.jpg' alt='bg img' className='hero-image' />
                <div className='heading'>
                    <h1>CryptoCurrency Converter</h1>
                </div>
                <div className='glassmorph'>
                    <div className="exchange-container">
                        <div className='upper-upperhalf'>
                            <p className='from'>From</p>
                            <p className='to'>Amount</p>
                        </div>
                        <div className='middle-upperhalf'>
                            <input
                                className='currency'
                                type='text'
                                placeholder='From Currency (e.g., usd)'
                                value={fromCurrency}
                                onChange={(e) => setFromCurrency(e.target.value)}
                            />
                            <input
                                className='amount'
                                type='number'
                                placeholder='Enter Amount'
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className='swap'>
                        <button onClick={handleConvert}>Convert</button>
                    </div>
                    <div className="down">
                        <div className='upper-upperhalf'>
                            <p className='from'>To</p>
                            <p className='to'>Converted Amount</p>
                        </div>
                        <div className='middle-upperhalf'>
                            <input
                                className='exchanged-currency'
                                type='text'
                                placeholder='To Currency (e.g., eur)'
                                value={toCurrency}
                                onChange={(e) => setToCurrency(e.target.value)}
                            />
                            <input
                                className='exchanged-amount'
                                type='text'
                                placeholder='Exchanged Amount'
                                value={convertedAmount}
                                readOnly
                            />
                        </div>
                        <div className='info'>
                            <div className='rate'>
                                <h3>Exchange Rate:</h3>
                                <h4>1 {fromCurrency.toUpperCase()} = {toCurrency && rates[toCurrency] ? rates[toCurrency] : 'N/A'} {toCurrency.toUpperCase()}</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
        </div>
    );
}

export default App;
