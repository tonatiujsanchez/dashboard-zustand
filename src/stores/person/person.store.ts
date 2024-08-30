import { create, type StateCreator } from "zustand"
import { persist } from "zustand/middleware"
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

const storeApi: StateCreator<PersonState & PersonActions> = (set)=>({
    firstName: '',
    lastName: '',
    setFirstName: (value:string)=> set(()=> ({ firstName: value })),
    setLastName: (value:string)=> set(()=> ({ lastName: value })),
})




export const usePersonState = create<PersonState & PersonActions>()(
    persist(
        storeApi,
        { 
            name: 'key-person-store',
            storage: firebaseStorage
        }
    )
)

