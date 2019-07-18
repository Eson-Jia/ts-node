export function Sum(args: number[]) {
    throw new Error('error');
    let sum: number = 10;
    args.map((ele: number) => {
        sum += ele;
    });
    return sum;
}