export type TObjString = {[key: string]: string}
export type TObjStringNumber = {[key: string]: string | number}

//RTK Query
export interface IErrorUseQuery {
    status: number;
    data: {error: {[key: string]: string}};
}

//NAVIGATION
export type TypeRootStackParamList = {
    Auth: undefined;
    Home: undefined;
    Profile: undefined;
    Services: undefined;
    Support: undefined;
    Payments: undefined;
    More: undefined;
}

export type TCurrency = 'RUB' | 'USD'
export type TCardName = 'Tinkoff Black' | 'Tinkoff All Airlines'
