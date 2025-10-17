import React, { useMemo } from "react";

export default function SlowComponent({ multiplier }) {
    console.log("SlowComponent di-render")

    const sum = useMemo(() => {
        console.log("Melakukan perhitungan berat di SlowComponent...")
        let total = 0;
        for (let i = 0; i < 1000000; i++) {
            total += i * multiplier;
        }
        return total;
    }, [multiplier])

    return <p>Hasil perhitungan berat: {sum}</p>
}
