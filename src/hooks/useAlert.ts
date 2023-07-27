import { useEffect, useRef, useState } from "react";

const useAlert = (
    defaultValue: boolean,
): [boolean, (value: boolean) => void] => {
    const [isVisible, _setIsVisible] = useState(defaultValue);
    const timeout = useRef<number | null>(null);

    const setIsVisible = (value: boolean) => {
        _setIsVisible(value);

        if (value) {
            timeout.current = window.setTimeout(() => {
                timeout.current = null;
                _setIsVisible(false);
            }, 3000);
        }
    };

    useEffect(() => {
        return () => {
            if (timeout.current) {
                window.clearTimeout(timeout.current);
            }
        }
    },[])

    return [isVisible, setIsVisible];
};

export default useAlert;
