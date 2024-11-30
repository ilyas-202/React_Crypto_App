import { cryptoAssets, cryptoData } from "./data";


export function fakeFeatchCrypto() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(cryptoData)
        }, 1500)
    })
}

export function featchAssets() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(cryptoAssets)
        }, 1500)
    })
}