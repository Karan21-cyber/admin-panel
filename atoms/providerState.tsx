import {atom} from "recoil";

export const pathState = atom({
    key:'pathState',
    default:'Dashboard',
})

export const navState = atom({
    key:"navState",
    default:true,
})