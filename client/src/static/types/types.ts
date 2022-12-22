export type TStyles = {[key: string]: string | number}
export type TObj = {[key: string]: string | number}

//RTK Query
export interface IErrorUseQuery {
    status: number;
    data: {error: {[key: string]: string}};
}
