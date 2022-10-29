import { CHANGE_MESSAGES, CHANGE_CHATS } from "./actionTypes";
import { db } from "../service/service";


const getPayloadFromSnapshot = (snapshot) => {
    return { chatId: snapshot.key, messages: snapshot.val() }
}

const getPayloadFromSnapshotChat = (snapshot) => {
    const chats = [];
    snapshot.forEach((chat) => {
        chats.push(chat.val());
    });
    return { id: snapshot.key, chats }
}


// добавление сообщений в чат
export const addMessageWithFirebase = (chatId, message) => async () => {
    db.child("messages").child(chatId).child(message.id).set(message);
};

// добавление чатов
export const addChatWithFirebase = (chatId, chat) => async () => {
    db.child("chats").child(chatId).set(chat);
};


//
export const initMessageTracking = () => (dispatch) => {
    db.child("messages").on("value", (snapshot) => {
        const payload = getPayloadFromSnapshot(snapshot);

        dispatch({
            type: CHANGE_MESSAGES,
            payload,
        });
    });
};

//
export const initChatTracking = () => (dispatch) => {
    db.child("chats").on("value", (snapshot) => {
        const payload = getPayloadFromSnapshotChat(snapshot);
        dispatch({
            type: CHANGE_CHATS,
            payload,
        });
    });
};

// Удаление сообщения
export const deleteMessageWithFirebase = (chatId, messageId) =>  {
    db.child("messages").child(chatId).child(messageId).remove();
};

