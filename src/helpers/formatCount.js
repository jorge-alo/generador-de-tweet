import React from 'react'

export const formatCount = (numero) => {
  console.log(numero)
  const num = parseInt(numero,10)
  console.log(num)
const lookUp = [
  {value: 1, symbol: ""},
  {value: 1e3, symbol: "K"},
  {value: 1e6, symbol: "M"},
  {value: 1e9, symbol: "G"},
  {value: 1e12, symbol: "T"},
  {value: 1e15, symbol: "P"},
  {value: 1e16, symbol: "E"}
]
const rx =/\.0+$|(\.[0-9]*[1-9])0+$/;
let item = lookUp.slice().reverse().find(item => 
  num >= item.value
)

  return item ? (num / item.value).toFixed(1).replace(rx,"$1")+item.symbol: "0"
}
