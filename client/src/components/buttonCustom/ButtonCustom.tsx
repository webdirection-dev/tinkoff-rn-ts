import {FC} from "react"
import {Text, TouchableHighlight} from "react-native"
import {stylesButton} from "./style"
import {yellow500} from "../../static/styles/var"

interface IButtonProps {
    handleClick: () => void;
    title: string;
    color?: string[];
}

const ButtonCustom: FC<IButtonProps> = ({handleClick, title, color = [yellow500, '#FBBF24']}) => {
    const {button} = stylesButton

    return (
        <TouchableHighlight onPress={handleClick} underlayColor={color[1]} style={{...button, backgroundColor: color[0]}} >
            <Text style={{textAlign: 'center'}}>{title}</Text>
        </TouchableHighlight>
    )
}

export default ButtonCustom
