import { db } from '../firebase'

const chatModel = {
    addData : async (params, collectionName) => {
        const { _id, createdAt, text, user } = params
        db.collection(collectionName).add({
            _id: _id,
            createdAt: createdAt,
            text: text,
            user: user
        })
        .then((docRef) => {
            console.log("Document writted with ID: ", docRef.id);
        })
        .catch((error) => {
            console.log("Error: ", error);
        });
    },
    listData: async (collectionName, setMessages) => {
        const allChat = db.collection(
            collectionName
        ).orderBy('createdAt', 'desc')
        .onSnapshot((querySnapshot) => setMessages(
            querySnapshot.docs.map(doc=>({
                _id: doc.data()._id,
                text: doc.data().text,
                createdAt: doc.data().createdAt.toDate(),
                user: doc.data().user,
            }))
        ));
        return allChat ; 
    }
}

export default chatModel