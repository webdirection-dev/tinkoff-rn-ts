import {StyleSheet} from "react-native"
import {AntDesign, MaterialIcons} from '@expo/vector-icons'

export type TObjString = {[key: string]: string}
export type TObjStringNumber = {[key: string]: string | number}

//StyleSheet
export type TStyles = StyleSheet.NamedStyles<TObjStringNumber>

//NAVIGATION
export type TypeRootStackParamList = {
    Auth: undefined;
    Home: undefined;
    Profile: undefined;
    Services: undefined;
    Support: undefined;
    Chat: any;
    Payments: undefined;
    More: undefined;
}
export interface IFooterItem {
    iconName: keyof typeof AntDesign.glyphMap;
    title: keyof TypeRootStackParamList
}

//CREDIT CARD
export type TCurrency = 'RUB' | 'USD'
export type TCardName = 'Tinkoff Black' | 'Tinkoff All Airlines'

//IMPORTANT
export type TImportantIcon = Pick<IFooterItem, 'iconName'>
export interface IImportantItem extends Pick<IFooterItem, 'iconName'> {title: string}

//SERVICES
export interface IService {
    iconName: keyof typeof MaterialIcons.glyphMap;
    title: string;
    percent: string;
}
