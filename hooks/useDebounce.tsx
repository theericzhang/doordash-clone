import { useState, useEffect } from 'react';

export default function useDebounce(value: any, delay: number) {
    const [debouncedValue, setDebouncedValue] = useState();

    useEffect(() => {
        const debounceTimer = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => {
            clearTimeout(debounceTimer);
        };
    }, [value, delay]);

    return debouncedValue;
}
