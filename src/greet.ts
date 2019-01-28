export function sayHello(name: string) {
    return `Hello from ${name}`;
}

export function TestPromise(echo: string): Promise<string> {
    return new Promise(resolve => {
        setTimeout(resolve, 1000, `${echo} ${echo}`);
    });
}