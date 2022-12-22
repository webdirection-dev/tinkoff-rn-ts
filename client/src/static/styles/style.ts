import {bgGeneral} from "./var"
import {TStyles} from "../types/types"

//SHADOW
export const BOX_SHADOW = {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 5,
}

export const containerShadow = {
    shadowColor: 'black',
    shadowOffset: {width: 5, height: 5},
    shadowOpacity: .2,
    elevation: 3,
    backgroundColor: bgGeneral,
}

//POSITION
export const centerItem = {
    justifyContent: 'center',
    alignItems: "center",
} as TStyles
