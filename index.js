// === Massiv va obyektlar === //

//     1 - masala

// const oquvchilar = [
//     { ism: "Ali", yosh: 17 },
//     { ism: "O'ktam", yosh: 18 },
//     { ism: "Sardor", yosh: 19 }
// ];

// function oquvchilarni() {
//     oquvchilar.forEach(oquvchi => {
//         console.log(`O'quvchi: ${oquvchi.ism}, Yoshi: ${oquvchi.yosh}`);
//     });
// }

// oquvchilarni();

// 2 - masala
// const mahsulotlar = [
//     { nom: "Olma", narx: 100 },
//     { nom: "Nok", narx: 150 },
//     { nom: "Banan", narx: 200 }
// ];

// function maxsulot(mahsulotlar) {
//     let res = mahsulotlar.map(function (v) {
//         return v.narx + (v.narx * 0.2)
//     })
//     return res
// }
// console.log(maxsulot(mahsulotlar));

// 3 - masala
// const oquvchilar = [
//     { ism: "Dilorom", yosh: 20 },
//     { ism: "Shahrizoda", yosh: 17 },
//     { ism: "Akbar", yosh: 19 }
// ];

// function yosh(oquvchi) {
//     let res = oquvchi.filter(function (v) {
//         return v.yosh >= 18;
//     })
//     return res
// }
// console.log(yosh(oquvchilar));

// 4 - masala

// const kitoblar = [
//     { nom: "Kitob A", muallif: "Said Ahmad" },
//     { nom: "Kitob B", muallif: "Zokir Khoshimov" },
//     { nom: "Kitob C", muallif: "Murodjon Abduqodirov" }
// ]
// function kitob(kitoblar) {
//     let res = kitoblar.filter(function (v) {
//         return v.muallif = 'Said Ahmad'
//     })
//     return res
// }

// console.log(kitob(kitoblar));

// 5 - masala

// const xodimlar = [
//     { ism: "Rashid", ishHaqi: 3000 },
//     { ism: "Dilshod", ishHaqi: 2500 },
//     { ism: "Farhod", ishHaqi: 4000 }
// ]
// function ish(xodimlar) {
//     let res = xodimlar.map(function (v) {
//         return v.ishHaqi + (v.ishHaqi * 0.1)
//     })
//     return res
// }
// console.log(ish(xodimlar));

// 6 - masala


// const oquvchilar = [
//     { ism: "Jasur", yosh: 21 },
//     { ism: "Sardorbek", yosh: 22 },
//     { ism: "Azizbek", yosh: 20 }
// ];

// function oquv(oquvchilar) {
//     let user = oquvchilar.map(function (v) {
//         return { ...v, ism: "Mr. " + v.ism };
//     });

//     return user
// }
// console.log(oquv(oquvchilar));

// 7 - masala

// const avtomobillar = [
//     { nom: "Tesla", tur: "elektr" },
//     { nom: "Toyota", tur: "benzin" },
//     { nom: "Nissan Leaf", tur: "elektr" }
// ]
// function car(avtomobillar) {
//     let res = avtomobillar.filter(function (v) {
//         return v.tur == 'elektr'
//     })
//     return res
// }
// console.log(car(avtomobillar));

// 8 - masala

// const foydalanuvchilar = [
//     { ism: "Aziz", email: "aziz@example.com" },
//     { ism: "Nodir", email: "nodir@example.com" },
//     { ism: "Malika", email: "malika@example.com" }
// ];

// function foydalanuvchi(foydalanuvchilar) {
//     return foydalanuvchilar.map(v => {
//         return { ism: v.ism, email: v.email };
//     });
// }

// console.log(foydalanuvchi(foydalanuvchilar));

// 9 - masala

// const mahsulotlar = [
//     { nom: "Televizor", narx: 500 },
//     { nom: "Konditsioner", narx: 700 },
//     { nom: "Butler", narx: 300 }
// ];

// function Qimmat(mahsulotlar) {
//     let maxnom = mahsulotlar[0];

//     mahsulotlar.forEach(function (mahsulot) {
//         if (mahsulot.narx > maxnom.narx) {
//             maxnom = mahsulot;
//         }
//     });

//     return maxnom;
// }

// console.log(Qimmat(mahsulotlar));

// 10 - masala


// const oquvchilar = [
//     { ism: "Zarina", ball: 85 },
//     { ism: "Doston", ball: 90 },
//     { ism: "Gulbahor", ball: 95 }
// ];

// function ball(oquvchilar) {
//     let res = oquvchilar.filter(function (v) {
//         return v.ball = 100
//     })
//     return res
// }
// console.log(ball(oquvchilar));


// === String metodiga oid masalalar === //

// 1-masala

// let str ="QULPIDDIN"
// let res = str.toLocaleLowerCase()
// console.log(res);

// 2-masala

// let str ="QULPIDDIN"
// let res = str.length
// console.log(res);

// 3-masala

// let arr = "Hello MIrzatillo !"
// function soz(arr){
//     let hello = (arr.slice(0,5) === 'Hello')
//     let undov =(arr.slice(-1) === '!')
//     return [hello , undov]
// }
// console.log(soz(arr));

// 4-masala

// let arr ='Salom dunyo'
// function soz(arr){
//     if(arr.length >10){
//         return arr.slice(0,10) + '...'
//     }
//     return arr
// }
// console.log(soz(arr));

// 5-masala

// let arr  = 'Salom'
// function soz(arr){
//    let res = ''
//    for (let i = 0; i < arr.length; i++) {
//     if(arr[i] === 'a'){
//         res += 'o'
//     }else{
//         res +=arr[i]
//     }
//    }
//    return res
// }
// console.log(soz(arr));


// 6-masala
// let arr ='Salomm dunyo'
// function soz(arr,index){
//     if(index < 0 || index >= arr.length){
//         return 'INdex mavjud emas'
//     }
//     return arr[index]
// }
// console.log(soz(arr,5));

// 7-masala
// let arr = 'JavaSCriptni men organyapman'
// function java(arr){
//     let mavjud = arr.includes('JavaSCript')
//     return mavjud ? "JavaScript mavjud." : 'JAvaScript mavjud emas';
// }
// console.log(java(arr));