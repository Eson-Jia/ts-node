export function Sum(args: number[]) {
    let sum: number = 0;
    args.map((ele: number) => {
        sum += ele;
    });
    return sum;
}