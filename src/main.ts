export function merge(collection1: number[], collection2: number[], collection3: number[]): number[] {

    let collection3Reversed: number[] = [];
    for (let i = collection3.length - 1; i >= 0; i--) {
        collection3Reversed.push(collection3[i]);
    }

    let result: number[] = [];
    let counterC1 = 0;
    let counterC2 = 0;
    let counterC3 = 0;

    while (counterC1 < collection1.length || counterC2 < collection2.length || counterC3 < collection3Reversed.length) {
        let c1val = counterC1 < collection1.length ? collection1[counterC1] : Infinity;
        let c2val = counterC2 < collection2.length ? collection2[counterC2] : Infinity;
        let c3val = counterC3 < collection3Reversed.length ? collection3Reversed[counterC3] : Infinity;

        if (c1val <= c2val && c1val <= c3val) {
            result.push(c1val);
            counterC1++;
        } else if (c2val <= c1val && c2val <= c3val) {
            result.push(c2val);
            counterC2++;
        } else {
            result.push(c3val);
            counterC3++;
        }
    }

    return result;
}
