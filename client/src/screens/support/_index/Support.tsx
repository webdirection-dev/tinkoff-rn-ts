import {FC} from "react"
import ChatList from "../chatList/ChatList"
import {IUser} from "../../../static/types/typesMongo"
import Chat from "../chat/Chat";

const Support:FC<{owner: IUser}> = ({owner: {_id, isAdmin}}) => (
    <>
        {isAdmin ? <ChatList _id={_id}/> : <Chat />}
    </>
)
export default Support
