// 1. Sonning kvadratini qaytaruvchi funksiya
function kvadrat(n) {
    return n * n;
}
console.log("1:", kvadrat(5));

// 2. Ikki sondan kattasini topuvchi funksiya
function katta(a, b) {
    return a > b ? a : b;
}
console.log("2:", katta(10, 7));

// 3. Son juftmi yoki toqmi
function juftmi(n) {
    return n % 2 === 0 ? "Juft" : "Toq";
}
console.log("3:", juftmi(9));

// 4. Massivdagi sonlar yig‘indisini hisoblash
function yigindi(arr) {
    let sum = 0;
    for (let n of arr) sum += n;
    return sum;
}
console.log("4:", yigindi([1, 2, 3, 4]));

// 5. Matndagi harflar soni
function harfSoni(str) {
    return str.length;
}
console.log("5:", harfSoni("Hello"));

// 6. Minimal sonni topish
function minTop(arr) {
    return Math.min(...arr);
}
console.log("6:", minTop([8, 2, 6, 10]));

// 7. Maksimal sonni topish
function maxTop(arr) {
    return Math.max(...arr);
}
console.log("7:", maxTop([8, 2, 6, 10]));

// 8. Son musbatmi, manfiy yoki nol
function sonTuri(n) {
    if (n > 0) return "Musbat";
    if (n < 0) return "Manfiy";
    return "0";
}
console.log("8:", sonTuri(-5));

// 9. Faktorial (n!)
function factorial(n) {
    let f = 1;
    for (let i = 1; i <= n; i++) f *= i;
    return f;
}
console.log("9:", factorial(5));

// 10. Matnni teskari qilish
function reverse(str) {
    return str.split("").reverse().join("");
}
console.log("10:", reverse("salom"));

// 1. Massiv elementlarini ekranga chiqarish
let arr1 = [1, 2, 3, 4];
console.log("Massiv 1:", arr1);

// 2. Massivga yangi element qo‘shish
let arr2 = [10, 20, 30];
arr2.push(40);
console.log("Massiv 2:", arr2);

// 3. Massivdan oxirgi elementni o‘chirish
let arr3 = [5, 6, 7];
arr3.pop();
console.log("Massiv 3:", arr3);

// 4. Massivning uzunligini topish
let arr4 = ["a", "b", "c"];
console.log("Massiv 4 uzunlik:", arr4.length);

// 5. Massivni teskari qilish
let arr5 = [1, 2, 3];
console.log("Massiv 5:", arr5.reverse());

// 6. Massivdagi eng katta son
let arr6 = [3, 9, 1];
console.log("Massiv 6 max:", Math.max(...arr6));

// 7. Massivdagi eng kichik son
let arr7 = [3, 9, 1];
console.log("Massiv 7 min:", Math.min(...arr7));

// 8. Massiv elementlarini 2 barobar oshirish
let arr8 = [2, 4, 6];
let arr8_new = arr8.map(x => x * 2);
console.log("Massiv 8:", arr8_new);

// 9. Faqat juft sonlarni chiqarish
let arr9 = [1, 2, 3, 4, 5, 6];
let juftlar = arr9.filter(x => x % 2 === 0);
console.log("Massiv 9:", juftlar);

// 10. Massiv ichidagi yig‘indini topish
let arr10 = [1, 1, 1, 1];
let sum10 = arr10.reduce((a, b) => a + b, 0);
console.log("Massiv 10 yig‘indi:", sum10);
