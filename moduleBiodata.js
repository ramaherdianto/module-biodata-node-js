const biodata = require('./biodata')

const name = 'Ramadhan Herdianto'
const placeOfBirth = 'Karawang'
const dateOfBirth = '08 Desember 2001'
const address = 'Jln. Singadireja Karawang, Jawa Barat'

console.log(`Nama: ${biodata.name(name)}`)
console.log(`Tempat Lahir: ${biodata.placeOfBirth(placeOfBirth)}`)
console.log(`Tanggal Lahir: ${biodata.dateOfBirth(dateOfBirth)}`)
console.log(`Alamat: ${biodata.address(address)}`)
