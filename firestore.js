const db = firebase.firestore();

export async function insert(item)
{
    //const borrar = db.collection("Frutas");
    //alert(borrar);

    try {
        //const response = await db.collection("Frutas").add(item);
        const response = await db.collection("users").doc("userX").set(item)
        return response;
    } catch (error) {
        throw new Error(error);
    }
}


export async function insertContactos(obj, userName)
{
    try {
        //const response = await db.collection("Frutas").add(item);
        const response = await db.collection("users").doc(userName).set(obj)
        return response;
    } catch (error) {
        throw new Error(error);
    }
}

export async function getUserInfo(userEmail)
{
    db.collection("users").doc(userEmail)
    .get()
    .then(function(doc) {
        if (doc.exists) 
            return doc.data()
            
        return undefined;
        
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });
}
//Hansel De los Santos