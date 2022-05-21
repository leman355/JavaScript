// 1. Istifadəçi bir ədəd girməlidir ancaq bu ədəd 1000 - 100.000 arasında 3-ə bölünən bir ədəd olmalıdır.
// Həmin şərtlərə uyğun olaraq istifadəçiyə məlumat verin.
// 2. Aşağıdakı kodda
// 2.1. İstifadəçinin boyunu auto increment yoluyla bir artırın
// 2.2. telefonun markasını dəyişərək Samsung edin
// 2.3. Telefonun galaxy s22 markası olduğunu bildirən məlumat girin
// 2.4. İstifadəçinin adını silin
// 2.5. İstifadəçin ilk sifarişini silin
// 2.6. İstifadəçinin son sifarişini silin
// 2.7. İstifadəçinin sifarişlərinin başına ball əlavə edin
// 2.8. İstifadəçinin sifarişlərinin sonuna headphones əlavə edin
// 2.9. Bunları konsolda göstərin

// ```jsx
// const user = {
// name: 'Elnur',
// height: 179,
// phone: {
// model: 'Iphone',
// },
// orders: ['book', 'mouse', 'mousepad']
// }
// ```

// 3. `const info = ["Resul", "Serifov", 35]`
// Yuxarıdakı arrayı dinamik olaraq `["Resul Serifov", 25]` vəziyyətinə gətirin

// 1. Istifadəçi bir ədəd girməlidir ancaq bu ədəd 1000 - 100.000 arasında 3-ə bölünən bir ədəd olmalıdır.
// Həmin şərtlərə uyğun olaraq istifadəçiyə məlumat verin.

// function test(a) {
//   if (a < 1000 || a > 100000) {
//     console.log(
//       "Ədəd 1000-dən kiçik və ya 100000-dən böyükdür. [1000; 100000] diapazonda olan və 3-ə bölünən ədəd daxil edin"
//     );
//   } else {
//     if (a % 3 == 0) {
//       console.log("Сavab doğrudur");
//     } else {
//       console.log("Daxil edilmiş ədəd 3-ə bölünmür");
//     }
//   }
// }
// test(100);

// 2. Aşağıdakı kodda
// 2.1. İstifadəçinin boyunu auto increment yoluyla bir artırın
// 2.2. telefonun markasını dəyişərək Samsung edin
// 2.3. Telefonun galaxy s22 markası olduğunu bildirən məlumat girin
// 2.4. İstifadəçinin adını silin
// 2.5. İstifadəçin ilk sifarişini silin
// 2.6. İstifadəçinin son sifarişini silin
// 2.7. İstifadəçinin sifarişlərinin başına ball əlavə edin
// 2.8. İstifadəçinin sifarişlərinin sonuna headphones əlavə edin
// 2.9. Bunları konsolda göstərin

// const user = {
//   name: "Elnur",
//   height: 179,
//   phone: {
//     model: "Iphone",
//   },
//   orders: ["book", "mouse", "mousepad"],
// };

// // 2.1
// user.height++
// // 2.2
// user.phone.model='Samsung'
// // 2.3
// user.phone.marka="galaxy s22"
// // 2.4
// delete user.name
// // 2.5
// user.orders.shift()
// // 2.6
// user.orders.pop()
// // 2.7
// user.orders.unshift('ball')
// // 2.8
// user.orders.push('headphones')
// console.log(user)

// 3. `const info = ["Resul", "Serifov", 35]`
// Yuxarıdakı arrayı dinamik olaraq `["Resul Serifov", 25]` vəziyyətinə gətirin

// const info = ["Resul", "Serifov", 35]
// info[1]=info[0]+' '+info[1]
// info[2]-=10
// info.shift()
// console.log(info)

// ---------------WHILE----------------
// 1. `['cup', 'plate', 'spoon', 'knife', 'fork']`
// array’inin bütün elementlərini while ilə konsolda göstərin
// 2. `['xiyar', 'pomidor', 'sogan', 'yerkoku', 'sarimsaq', 'semeni']`
// bu array içərisində “s” hərfiylə başlayan elementləri dinamik şəkildə
//  konsolda göstərin
// 3. 1-dən 100-ə kimi olan bütün ədədlərin toplamını tapın (1+2+3+...+99+100)
// 4. `['kitab', 'defter', 'qelem', 'karandas', 'jurnal', 'pozan', 'vereq']`
// arrayinin 5-hərfli elementləri arasında 5 hərfli olanların son hərfini
//  while ilə göstərin. 5 hərfli olmayanları `continue` deyərək keçin.
// 5. 100000-dən aşağı doğru gedərək 9999-a bölünən ilk ədədi konsolda göstərin.
// 6. `'Men her gun Javascript oyrenirem’` bu stringin saitlər çıxarılmış
// vəziyyətini konsolda göstərin.

// -------------1--------
// let a=['cup', 'plate', 'spoon', 'knife', 'fork']
// n=0

// while(n<a.length){
//   console.log(a[n++])
// }

// 2. `['xiyar', 'pomidor', 'sogan', 'yerkoku', 'sarimsaq', 'semeni']`
// bu array içərisində “s” hərfiylə başlayan elementləri dinamik şəkildə
//  konsolda göstərin

// -------------2--------
// const x=['xiyar', 'pomidor', 'sogan', 'yerkoku', 'sarimsaq', 'semeni']
// const xFil=x.filter(i=>/^s/.exec(i))
// console.log(xFil)

// 3. 1-dən 100-ə kimi olan bütün ədədlərin toplamını tapın (1+2+3+...+99+100)

// -------------3--------
// var sum =0
// for(var i=0; i<=100; i++){
//   sum+=i
// }
// console.log(sum)

// 4. `['kitab', 'defter', 'qelem', 'karandas', 'jurnal', 'pozan', 'vereq']`
// arrayinin 5-hərfli elementləri arasında 5 hərfli olanların son hərfini
//  while ilə göstərin. 5 hərfli olmayanları `continue` deyərək keçin.

// -------------4--------
// let sozler = ['kitab', 'defter', 'qelem', 'karandas', 'jurnal', 'pozan', 'vereq']

// i = 0;
// while (i < sozler.length) {
//   if (sozler[i].length == 5) {
//     console.log(sozler[i]);
//   }
//   else{
//     i+=1
//     continue;
//   }
//   i += 1;
// }

// 5. 100000-dən aşağı doğru gedərək 9999-a bölünən ilk ədədi konsolda göstərin.

// -------------5--------
// for (let i = 100000; i > 0; i--) {
//   if (i % 9999 == 0) {
//     console.log(i);
//     break
//   } else {
//     i--;
//     continue;
//   }
// }

// 6. `'Men her gun Javascript oyrenirem’` bu stringin saitlər çıxarılmış
// vəziyyətini konsolda göstərin.

// -------------6--------
// let saitler=['a','ı','o','u','e','ə', 'i', 'ö','ü']
// let cumle='Men her gun Javascript oyrenirem'

// let yeni = (cumle) => cumle.replace(/[saitler]/gi, '')

// console.log(yeni('Men her gun Javascript oyrenirem'));

// ---------------FOR----------------
// > Aşağıdakı misalları `while` ilə yox `for`, `for in` və `for of` istifadə edərək həll edin!
// >
// 1. `['cup', 'plate', 'spoon', 'knife', 'fork']` array’inin bütün elementlərini ilə konsolda göstərin
// 2. `['pomidor', 'sogan', 'yerkoku', 'sarimsaq', 'semeni']` bu array içərisində “s” hərfiylə başlayan
// elementləri ilə dinamik şəkildə konsolda göstərin
// 3. 1-dən 100-ə kimi olan bütün ədədlərin toplamını ilə tapın (1+2+3+...+99+100)
// 4. `['kitab', 'defter', 'qelem', 'karandas', 'jurnal', 'pozan', 'vereq']` arrayinin 5-hərfli elementləri
//  arasında 5 hərfli olanların son hərfini for ilə göstərin. 5 hərfli olmayanları `continue` deyərək keçin.
// 5. 100000-dən aşağı doğru gedərək 9999-a bölünən ilk ədədi konsolda göstərin.
// 6. `'Men her gun Javascript oyrenirem’` bu stringin saitlər çıxarılmış vəziyyətini konsolda göstərin.
// 7. Aşağıdakı objecti:
// - Keylerini konsolda gosterin
// - Valuelerini konsolda gosterin

// ```jsx
// const computer = {
// cpu: 'intel i5',
// ram: '8',
// gpu: 'NVIDIA',
// }
// ```

// 8. (Çətin)

// ```jsx
// const letterList = ['a', 'a', 'b', 'a', 'c', 'b', 'b', 'e']
// const letterCount = {a: 0, b: 0, c: 0, e: 0}
// ```

// Yuxarıdakı array-ə görə objectdə qarşılıq gələn hərflərin sayını yazın və objecti-i konsolda göstərin. Nəticə aşağıdakı kimi olmalıdır:

// > Aşağıdakı misalları `while` ilə yox `for`, `for in` və `for of` istifadə edərək həll edin!
// >

// ---------1-------
// 1. `['cup', 'plate', 'spoon', 'knife', 'fork']` array’inin bütün elementlərini ilə konsolda göstərin

// let goods=['cup', 'plate', 'spoon', 'knife', 'fork']

// for(i in goods){
//     console.log(a[i])
// }

// for(i of goods){
//     console.log(i)
// }

// ---------2-------
// 2. `['pomidor', 'sogan', 'yerkoku', 'sarimsaq', 'semeni']` bu array içərisində “s” hərfiylə başlayan
// elementləri ilə dinamik şəkildə konsolda göstərin

// let veg = ["pomidor", "sogan", "yerkoku", "sarimsaq", "semeni", "ananas"];

// for (i of veg) {
//     // console.log(`${i}=> ${i.includes('s')}`)
//     if(i.includes('s')){
//         if (i[0].includes('s')){
//             console.log(i)
//         }
//     }
//     else{
//         continue
//     }
// }

// ---------3-------
// 3. 1-dən 100-ə kimi olan bütün ədədlərin toplamını ilə tapın (1+2+3+...+99+100)

// sum = 0;
// for (let i = 0; i <= 100; i++) {
//   sum += i;
// }
// console.log(sum);

// ---------4-------
// 4. `['kitab', 'defter', 'qelem', 'karandas', 'jurnal', 'pozan', 'vereq']` arrayinin 5-hərfli elementləri
//  arasında 5 hərfli olanların son hərfini for ilə göstərin. 5 hərfli olmayanları `continue` deyərək keçin.

// let acc = ["kitab", "defter", "qelem", "karandas", "jurnal", "pozan", "vereq"];

// for (i of acc) {
//   if (i.length == 5) {
//     console.log(i[4]);
//   } else {
//     continue;
//   }
// }

// ---------5-------
// 5. 100000-dən aşağı doğru gedərək 9999-a bölünən ilk ədədi konsolda göstərin.

// for(let i=100000;i>0;i--){
//     if(i%9999==0){
//         console.log(i)
//         break
//     }
//     else{
//         continue
//     }
// }

// ---------6-------
// 6. `'Men her gun Javascript oyrenirem’` bu stringin saitlər çıxarılmış vəziyyətini konsolda göstərin.

// let cumle='Men her gun Javascript oyrenirem'
// let saitler=['a','ı','o','u','e','ə', 'i', 'ö','ü']

// console.log(cumle.replace(/[saitler]/gi,''))

// ---------7-------

// 7. Aşağıdakı objecti:
// - Keylerini konsolda gosterin
// - Valuelerini konsolda gosterin

// const computer = {
//   cpu: "intel i5",
//   ram: "8",
//   gpu: "NVIDIA",
// };

// ---------key-------
// for(i in computer){
//     console.log(i)
// }
// ---------value----
// for (i in computer) {
//   console.log(computer[i]);
// }

// ---------8-------

// 8. (Çətin)
// const letterList = ["a", "a", "b", "a", "c", "b", "b", "e"];
// Yuxarıdakı array-ə görə objectdə qarşılıq gələn hərflərin sayını yazın və objecti-i konsolda göstərin. Nəticə aşağıdakı kimi olmalıdır:
// const letterCount = {a: 0, b: 0, c: 0, e: 0}

// const letterList = ["a", "a", "b", "a", "c", "b", "b", "e"];
// let letterCount = {};
// for (let i = 0; i < letterList.length; i++) {
//   let a = letterList[i];
//   if (letterCount[a] != undefined) {
//     letterCount[a]++;
//   } else {
//     letterCount[a] = 1;
//   }
// }
// console.log(letterCount)
// for (key in letterCount){
// console.log(`${key}: ${letterCount[key]}`);
// }
