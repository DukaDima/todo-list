

// const data = { "distance": { "unit": "m", "value": 1000}, "convert_to": "ft" }
 
// console.log(data)

// const ratio = {
// MFt  : 0.3048,
// MmFt :  304.8,
// KmFt :  0.0003038,
// MYd  : 0.9144,
// MmYd :  914.4,
// KmYd :  0.0009144,

// }
// let newData = {
//     "unit": "",
//     "value": 0

// }

// function dataConvert(data) {
//     newData.unit=data.convert_to
    
//     if (data.distance.unit === "m" && data.convert_to === "ft") {
//         newData.value = Math.floor((data.distance.value / ratio.MFt) * 100) / 100
//     } else if (data.distance.unit === "ft" && data.convert_to === "m") {
//         newData.value = Math.floor((data.distance.value * ratio.MFt) * 100) / 100
//     } else if (data.distance.unit === "ft" && data.convert_to === "mm") {
//         newData.value = Math.floor((data.distance.value * ratio.MmFt) * 100) / 100
//     } else if (data.distance.unit === "mm" && data.convert_to === "ft") {
//         newData.value = Math.floor((data.distance.value / ratio.MmFt) * 100) / 100
//     } else if (data.distance.unit === "ft" && data.convert_to === "km") {
//         newData.value = Math.floor((data.distance.value * ratio.KmFt) * 100) / 100
//     } else if (data.distance.unit === "km" && data.convert_to === "ft") {
//         newData.value = Math.floor((data.distance.value / ratio.KmFt) * 100) / 100
//     } else if (data.distance.unit === "m" && data.convert_to === "yd") {
//         newData.value = Math.floor((data.distance.value / ratio.MYd) * 100) / 100
//     } else if (data.distance.unit === "yd" && data.convert_to === "m") {
//         newData.value = Math.floor((data.distance.value * ratio.MYd) * 100) / 100
//     } else if (data.distance.unit === "yd" && data.convert_to === "mm") {
//         newData.value = Math.floor((data.distance.value * ratio.MmYd) * 100) / 100
//     } else if (data.distance.unit === "mm" && data.convert_to === "yd") {
//         newData.value = Math.floor((data.distance.value / ratio.MmYd) * 100) / 100
//     } else if (data.distance.unit === "yd" && data.convert_to === "km") {
//         newData.value = Math.floor((data.distance.value * ratio.KmYd) * 100) / 100
//     } else if (data.distance.unit === "km" && data.convert_to === "yd") {
//         newData.value = Math.floor((data.distance.value / ratio.KmYd) * 100) / 100
//     } else {
//         console.log ("Некорректный формат ввода")
//     }
//    return newData
// }
// newData=dataConvert(data)

``
// console.log(newData)
// const newDataJSON = JSON.stringify(newData)
// console.log(newDataJSON)

//--------вариант через класс ------------------------------------------------

const data1 = { "distance": { "unit": "m", "value": 1}, "convert_to": "ft" }
console.log(data1)
const data2 = { "distance": { "unit": "yd", "value": 9}, "convert_to": "m" }

let newData = {
    "unit": "",
    "value": 0
}

class convertData {
    constructor(obj, kf) {
    const convertToM = `${obj.distance["unit"]}_to_m`
    const convertFromM = `m_to_${obj["convert_to"]}`
    const convertValue = obj.distance.value
    const newDataUnit = obj.convert_to
    const newDataValue = Math.floor(convertValue * kf[convertToM] * kf[convertFromM] * 100) / 100
    console.log(`ratio.${convertToM}`)
    console.log(newDataValue)
    return newData = {
            "unit": `${newDataUnit}`,
            "value": `${newDataValue}`
        }
    }
}

const ratio = {
    m_to_m: 1,
    ft_to_m: 0.3048,
    m_to_ft: 3.2808,
}
ratio.yd_to_m = 0.9144
ratio.m_to_yd = 1.0936

console.log(ratio)
const convert1 = new convertData(data1, ratio)
console.log(convert1)
const convert1JSON = JSON.stringify(convert1)
console.log(convert1JSON)
const convert2 = new convertData(data2, ratio)
console.log(convert2)
const convert2JSON = JSON.stringify(convert2)
console.log(convert2JSON)
////-----------------------------

// import dataJSON from '../data.json' assert { type: "json" }
// console.log(dataJSON)
// const data325 = JSON.parse(dataJSON)





