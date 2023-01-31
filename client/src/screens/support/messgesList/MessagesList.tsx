import React, {FC, useEffect, useRef, useState} from "react"
import {View, Text, FlatList, ActivityIndicator, TouchableOpacity} from "react-native"
import {styles} from "./style"
import Loading from "../../../components/loading/Loading"
import MessageItem from "../messgeItem/MessageItem"

import {useMessagesList} from "./useMessagesList"
import {IMessage} from "../../../static/types/typesMongo"

const MessagesList:FC<{messages: IMessage[], success: any}> = ({messages, success}) => {
    const {container, noConversation} = styles
    const {ownerId} = useMessagesList()

    // let listViewRew
    // const handleDown = () => {
    //     console.log('test ', success.isSuccess)
    //     listViewRew && listViewRew.scrollToEnd({animated: true})
    // }
    // const handleUp = () => {
    //     listViewRew && listViewRew.scrollToOffset({animated: true, offset: 0})
    // }
    // useEffect(() => {
    //     console.log(success.isSuccess)
    //     if (success.isSuccess)  {handleDown()}
    // }, [success])

    return(
        <View style={container}>
            {
                success.status === 'fulfilled' && (
                    <>
                        <FlatList
                            data={messages}
                            renderItem={i => <MessageItem item={i.item} ownerId={ownerId}/>}
                            showsVerticalScrollIndicator={false}
                            keyExtractor={i => i._id}
                            // ref={ref => {listViewRew = ref}}
                            initialScrollIndex={messages.length -1}
                            getItemLayout={(data, index) => ({
                                length: 67,
                                offset: 67 * (index),
                                index,
                            })}

                            // ListFooterComponent={() => (
                            //     <View style={{marginVertical: 16, alignItems: 'center'}}>
                            //         <ActivityIndicator size={"small"} color={'#aaa'} />
                            //     </View>
                            // )}
                            // onEndReached={loadMoreItem}
                            // onEndReachedThreshold={0}
                            // ListHeaderComponent={() => (
                            //     <Text style={{ fontSize: 30, textAlign: "center",marginTop:20,fontWeight:'bold',textDecorationLine: 'underline' }}>
                            //         List of Persons
                            //     </Text>
                            // )}
                        />

                        {/*<View style={{*/}
                        {/*    position: 'absolute'*/}
                        {/*}}>*/}
                        {/*    <TouchableOpacity*/}
                        {/*        onPress={ () => setTest(test + 1) }*/}
                        {/*    ><Text>Down</Text></TouchableOpacity>*/}
                        {/*    <TouchableOpacity onPress={handleUp}><Text>Up</Text></TouchableOpacity>*/}
                        {/*</View>*/}
                    </>
                )
            }

            {success.noMessage && <Text style={noConversation}>Please write us in a chat</Text>}
            {success.status !== 'fulfilled' && !success.noMessage && success.isFirsLoad && <Loading />}
        </View>
    )
}
export default MessagesList
