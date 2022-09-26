let tudo_utc = "2022-09-13T19:55:00.000Z";
let data_utc = tudo_utc.substring(0,10);
let hora_utc = tudo_utc.substring(11,19);
let datafinal_utc = data_utc.split('-').reverse().join('/');

console.log("CONVERSAO DE UTC PARA GMT:")
console.log(datafinal_utc + ' ' + hora_utc);

let tudo_gmt = "19/09/2022 16:55:00";
let data_gmt = tudo_gmt.substring(0,10);
let hora_gmt = tudo_gmt.substring(11,19);
let datafinal_gmt = data_gmt.split('/').reverse().join('-');

console.log("CONVERSAO DE GMT PARA UTC:");
console.log(datafinal_gmt + 'T' + hora_gmt + 'Z');
