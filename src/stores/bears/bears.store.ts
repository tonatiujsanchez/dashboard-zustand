import { create } from 'zustand'

interface Bear {
    id  : number
    name: string
}

interface BearState {
    blackBears: number
    polarBears: number
    pandaBears: number

    bears: Bear[]

    increaseBlackBears: ( by: number ) => void
    increasePolarBears: ( by: number ) => void
    increasePandaBears: ( by: number ) => void
}

export const useBearStore = create<BearState>()((set) => ({
    blackBears: 10,
    polarBears: 5,
    pandaBears: 1,

    bears: [
        { id: 1 , name: 'Oso #1'}
    ],

    increaseBlackBears: by => set( state => ({ blackBears: state.blackBears + by })),
    increasePolarBears: by => set( state => ({ polarBears: state.polarBears + by })),
    increasePandaBears: by => set( state => ({ pandaBears: state.pandaBears + by })),
}))