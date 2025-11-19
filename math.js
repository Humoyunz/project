// 3. Oy raqami beriladi (1-12). Shu oy qaysi faslga tegishli ekanligini chiqaring.(1,2,12 - Qish; 3,4,5 - Bahor; 6,7,8 - Yoz; 9,10,11 - Kuz)
let oy = 9;
switch (oy) {
  case 12:
  case 1:
  case 2:
    console.log("Qish"); break;
  case 3:
  case 4:
  case 5:
    console.log("Bahor"); break;
  case 6:
  case 7:
  case 8:
    console.log("Yoz"); break;
  case 9:
  case 10:
  case 11:
    console.log("Kuz"); break;
  default:
    console.log("Xato! Oy raqami 1 dan 12 gacha bo‘lishi kerak.");
}


// 4. Oy raqami beriladi (1-12).Shu oyda nechta kun borligini chiqaring.(Kabisa yili hisobga olinmagan)
let oyRaqam = 2; 
switch (oyRaqam) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    console.log("31 kun"); break;
  case 4:
  case 6:
  case 9:
  case 11:
    console.log("30 kun"); break;
  case 2:
    console.log("28 kun"); break;
  default:
    console.log("Xato! Oy 1 dan 12 gacha bo‘lishi kerak.");
}


// 5.A va B sonlar beriladi, shuningdek amal raqami (1-4).Amal quyidagicha tanlanadi:1 - qo‘shish, 2 - ayirish, 3 - bo‘lish, 4 - ko‘paytirish
let A2 = 10, B2 = 5, amal = 4; 

switch (amal) {
  case 1:
    console.log("Natija:", A2 + B2);
    break;
  case 2:
    console.log("Natija:", A2 - B2);
    break;
  case 3:
    console.log("Natija:", A2 / B2);
    break;
  case 4:
    console.log("Natija:", A2 * B2);
    break;
  default:
    console.log("Xato! Amal 1-4 oralig‘ida bo‘lishi kerak.");
}


//For sikl operatorlariga oid misollar

// 1. k va n butun sonlar berilgan (n > 0). k sonini n marta ekranga chiqaruvchi dastur tuzilsin.
let k1 = 7;
let n = 5;

for (let i = 1; i <= n; i++) {
  console.log(k1);
}


// 2. a va b butun sonlar berilgan (a < b). a dan b gacha bo‘lgan barcha sonlarni va ularning sonini chiqaruvchi dastur.
let a9 = 3;
let b5 = 8;
let count = 0;

for (let i = a9; i <= b5; i++) {
  console.log(i);
  count++;
}

console.log("Jami sonlar soni:", count);


// 3. a va b butun sonlar berilgan (a < b). a va b orasidagi sonlarni (a va b dan tashqari) kamayish tartibida chiqarish va ularning sonini aniqlash dasturi.
let a3 = 3;
let b7 = 8;
let count3 = 0;

for (let i = b7 - 1; i > a3; i--) {
  console.log(i);
  count3++;
}

console.log("Jami sonlar soni:", count3);


// 4. 1 kg konfet narxi berilgan (haqiqiy son). 1 kg, 2 kg, ..., 10 kg konfet narxlarini chiqaruvchi dastur.
let narx = 12000; 

for (let i = 1; i <= 10; i++) {
  console.log(i + " kg konfet narxi =", narx * i, "so'm");
}


// 5. 1 kg konfet narxi berilgan (haqiqiy son).0.1 kg, 0.2 kg, ..., 0.9 kg konfet narxlarini chiqaruvchi dastur.
let narx2 = 20000; 

for (let i = 0.1; i < 1; i += 0.1) {
  console.log(i.toFixed(1) + " kg konfet narxi =", (narx2 * i).toFixed(2), "so'm");
}


// 6. 1 kg konfet narxi berilgan (haqiqiy son).1.2, 1.4, ..., 2 kg konfet narxlarini chiqaruvchi dastur.
let narx3 = 18000; 

for (let i = 1.2; i <= 2; i += 0.2) {
  console.log(i.toFixed(1) + " kg konfet narxi =", (narx3 * i).toFixed(2), "so'm");
}


// 7. a va b butun sonlar berilgan (a < b). a dan b gacha bo‘lgan barcha sonlarning yig‘indisini hisoblovchi dastur.
let a0 = 3;
let b0 = 8;
let sum = 0;

for (let i = a0; i <= b0; i++) {
  sum += i;
}

console.log("Yig‘indi =", sum);


// 8. a va b butun sonlar berilgan (a < b).a dan b gacha bo‘lgan barcha sonlarning ko‘paytmasini hisoblovchi dastur.
let a01 = 2;
let b8 = 5;
let kopaytma = 1;

for (let i = a01; i <= b8; i++) {
  kopaytma *= i;
}

console.log("Ko‘paytma =", kopaytma);


// 9. a va b butun sonlar berilgan (a < b).a dan b gacha bo‘lgan barcha sonlar kvadratlari yig‘indisini hisoblovchi dastur.
let a02 = 1;
let b9 = 5;
let kvSum = 0;

for (let i = a02; i <= b9; i++) {
  kvSum += i * i;
}

console.log("Kvadratlar yig‘indisi =", kvSum);


// 10. n butun son berilgan (n > 0).Quyidagi yig‘indini hisoblovchi dastur tuzilsin:S = 1 + 1/2 + 1/3 + ... + 1/n
let n10 = 5;
let S = 0;

for (let i = 1; i <= n10; i++) {
  S += 1 / i;
}

console.log("Natija S =", S);