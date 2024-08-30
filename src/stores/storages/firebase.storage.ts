import { createJSONStorage, StateStorage } from "zustand/middleware"

const FIREBASE_URL = 'https://gag-fd02b.firebaseio.com/zustand'


const firebaseStorageApi:StateStorage = {
    getItem: async function (name: string): Promise<string | null> {
        try {
            const data = await fetch(`${ FIREBASE_URL }/${name}.json`)
                .then( res => res.json() )

            return JSON.stringify(data)

        } catch (error) {
            console.log(error)
            throw error
        }

    },
    setItem: async function (name: string, value: string): Promise<void> {
        await fetch(`${ FIREBASE_URL }/${name}.json`, {
            method: 'PUT',
            body: value
        })
        .then( res => res.json() )
    },
    removeItem: function (name: string): void | Promise<void> {
        console.log('removeItem', { name })
    }
}

export const firebaseStorage =  createJSONStorage( ()=> firebaseStorageApi )