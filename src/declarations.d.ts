declare module '*.module.css' {
    const classes: { [key: string]: string };
    export default classes;
}

declare type Style = {
    [key: string]: string;
}