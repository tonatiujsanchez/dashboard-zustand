import { create, type StateCreator } from "zustand"
import { devtools, persist } from "zustand/middleware"
// import { customSessionStorage } from "../storages/session.storage"
import { firebaseStorage } from "../storages/firebase.storage"



interface PersonState {
    firstName: string
    lastName: string
}

interface PersonActions {
    setFirstName: ( value: string )=> void
    setLastName: ( value: string )=> void
}

const storeApi: StateCreator<PersonState & PersonActions, [["zustand/devtools", never]]> = (set)=>({
    firstName: '',
    lastName: '',
    setFirstName: (value:string)=> set(()=> ({ firstName: value }), false, 'setFirstName'),
    setLastName: (value:string)=> set(()=> ({ lastName: value }), false, 'setLastName'),
})


export const usePersonState = create<PersonState & PersonActions>()(
    devtools(
        persist(
            storeApi,
            { 
                name: 'key-person-store',
                storage: firebaseStorage
            }
        )
    )
)

