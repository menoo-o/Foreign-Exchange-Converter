import { useEffect, useState } from 'react';

export default function useCurrencyRates() {
    const [rates, setRates] = useState({});
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchRates = async () => {
            try {
                const response = await fetch('https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/usd.json');
                if (!response.ok) {
                    throw new Error('Error occurred while fetching data');
                }
                const result = await response.json();
                setRates(result.usd);
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        };

        fetchRates();
    }, []);

    return { rates, error, loading };
}
