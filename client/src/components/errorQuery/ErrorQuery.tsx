import {FC} from "react"
import {Text, View} from "react-native"
import {TObjString} from "../../static/types/types"

interface IErrorQuery {error: TObjString}

const ErrorQuery: FC<IErrorQuery> = ({error}) => {

    return (
        <View>
            <Text>{error.status}: {error.code}</Text>
            <Text>{error.description}</Text>
        </View>
    )
}

export default ErrorQuery
