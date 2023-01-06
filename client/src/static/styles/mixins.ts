import {TObjStringNumber} from "../types/types"
import {colorGrayMain, gray800} from "./var"

//FONT
export const title1 = {
    fontSize: 24,
    fontWeight: 'bold',
    color: gray800,
    textTransform: "capitalize"
} as TObjStringNumber

export const h1 = {
    fontSize: 40,
    fontWeight: '700',
} as TObjStringNumber

export const h2 = {
    fontSize: 30,
    fontWeight: '700',
    color: colorGrayMain,
} as TObjStringNumber

export const h3 = {
    fontSize: 20,
    fontWeight: '700',
    color: colorGrayMain,
} as TObjStringNumber

//CONTAINERS
export const generalContainer = {
    flex: 1,
    width: '100%',
    backgroundColor: 'white',
    paddingTop: 16,
}

export const wrapper = {
    paddingHorizontal: 20
}
