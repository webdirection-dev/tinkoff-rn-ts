import {TCurrency, TCardName} from "./types"

export interface IUser {
    _id: string;
    createdAt: string;
    username: string;
    password: string;
    userPic: string;
    isAdmin: string;
    updatedAt: string;
    accessToken?: string;
    status: string;
}

export interface IStory {
    _id: string;
    title: string;
    images: string[];
}

export interface ICreditCard {
    _id?: string;
    createdAt?: string;
    updatedAt?: string;
    userId: string;
    cardName: TCardName;
    currency: TCurrency;
    cardNumber: string;
    balance?: number;
}

export interface IContact {
    _id: string;
    username: string;
    cardNumber: string;
    createdAt?: string;
    updatedAt?: string;
}

export interface IMessage {
    _id: string;
    createdAt?: Date;
    updatedAt?: Date;
    text: string;
}
