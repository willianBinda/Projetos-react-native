import Realm from "realm";
import TaskSchema from '../Task'

const getRealm = async()=>{
    const app = new Realm.App({ id: "application-0-ibsji" });
    const credentials = Realm.Credentials.anonymous();
    const User = await app.logIn(credentials);
    return await Realm.open({
        path:"todo",
        schema:[TaskSchema],
        sync:{ user:User, partitionValue: "Jancer", flexible:false}
    });
}

export default getRealm
