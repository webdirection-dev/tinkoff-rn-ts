import {FC} from "react"
import {TextInput} from "react-native"
import {stylesField} from "./style"

interface IFieldProps {
    name: string;
    value: string;
    placeholder: string;
    handleCredentials: (name: string, value: string) => void;
    isSecure?: boolean;
}
const Field: FC<IFieldProps> = ({name, value, placeholder, handleCredentials, isSecure}) => {
    const {input} = stylesField

    return(
        <TextInput
            style={input}
            value={value}
            placeholder={placeholder}
            onChangeText={value => handleCredentials(name, value)}
            secureTextEntry={isSecure}
            autoCapitalize="none"
            showSoftInputOnFocus={false}
        />
    )
}

export default Field
