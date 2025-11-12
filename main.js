// ===============================
// JAVASCRIPT: O‘ZGARUVCHILAR VA MA’LUMOT TURLARI MISOLLAR
// ===============================

// 1. Foydalanuvchining ismini saqlaydigan o‘zgaruvchi yarating va uni konsolga chiqaring.
let ism = "Humoyun";
console.log("1:", ism, typeof ism);

// 2. Yoshingizni let yordamida saqlang, keyin 5 yilga oshiring.
let yosh = 20;
console.log("2: Boshlang‘ich yosh:", yosh, typeof yosh);
yosh += 5;
console.log("   5 yil o‘tib:", yosh);

// 3. const orqali o‘zgarmas qiymat sifatida PI ni e’lon qiling.
const PI = 3.14159;
console.log("3:", PI, typeof PI);

// 4. Ikki sonning yig‘indisini toping.
let a = 10;
let b = 5;
console.log("4: Yig‘indi =", a + b);

// 5. 5 xil turdagi o‘zgaruvchi
let str = "JavaScript";
let num = 100;
let bool = true;
let undef;
let nll = null;
console.log("5:", typeof str, typeof num, typeof bool, typeof undef, typeof nll);

// 6. var orqali ismni saqlang, keyin uni o‘zgartiring.
var nameVar = "Ali";
nameVar = "Vali";
console.log("6:", nameVar);

// 7. tug‘ilgan yil orqali yoshni hisoblang.
let tugilganYil = 2005;
let yosh2025 = 2025 - tugilganYil;
console.log("7: Yosh =", yosh2025);

// 8. ism va familiyani birlashtiring.
let firstName = "Humoyun";
let lastName = "Maxmudov";
let fullName = firstName + " " + lastName;
console.log("8:", fullName);

// 9. Template literal yordamida matn chiqaring.
console.log(`9: Salom, men ${firstName}man, yoshim ${yosh2025}da.`);

// 10. undefined qiymatli o‘zgaruvchi.
let something;
console.log("10:", something);

// 11. null qiymatli o‘zgaruvchi.
let empty = null;
console.log("11:", empty);

// 12. 3 xil o‘zgaruvchi (ism, yosh, talabami)
let name12 = "Aziz";
let age12 = 21;
let isStudent = true;
console.log("12:", typeof name12, typeof age12, typeof isStudent);

// 13. Matn uzunligini aniqlash.
let matn = "JavaScript";
console.log("13: uzunlik =", matn.length);

// 14. "25" matnini songa aylantiring.
let son14 = Number("25");
console.log("14:", son14, typeof son14);

// 15. 100 sonini matnga aylantiring.
let matn15 = String(100);
console.log("15:", matn15, typeof matn15);

// 16. Son qiymatini 3 ga ko‘paytirib yangi o‘zgaruvchiga yozing.
let num16 = 7;
let natija16 = num16 * 3;
console.log("16:", natija16);

// 17. Ikki matnni birlashtirib "Hello World!" hosil qiling.
let part1 = "Hello ";
let part2 = "World!";
console.log("17:", part1 + part2);

// 18. rang nomli o‘zgaruvchi yarating va o‘zgartiring.
let rang = "qora";
rang = "ko‘k";
console.log("18:", rang);

// 19. ism, familiya, yoshni bitta gapda chiqaring.
let ism19 = "Humoyun";
let fam19 = "Xakimjanov";
let yosh19 = 20;
console.log(`19: Men ${ism19} ${fam19}man, yoshim ${yosh19}da.`);

// 20. Boolean qiymatlar bilan ishlash.
let rost = true;
let yolgon = false;
console.log("20:", rost, yolgon);

// 21. typeof null va typeof undefined taqqoslash.
console.log("21:", typeof null, "vs", typeof undefined);

// 22. Qo‘shtirnoqli matn.
let quote = "Men \"JS\" ni o‘rganayapman.";
console.log("22:", quote);

// 23. son nomli o‘zgaruvchi yarating va ++ bilan oshiring.
let son = 9;
son++;
console.log("23:", son);

// 24. Bir qatorda bir nechta o‘zgaruvchi.
let ism24 = "Humoyun", yosh24 = 20, kasb = "Talaba";
console.log(`24: ${ism24}, ${yosh24} yoshda, kasbi: ${kasb}`);

// 25. Tug‘ilgan yil orqali yoshni hisoblash.
let tugilgan25 = 2005;
let yosh25 = 2025 - tugilgan25;
console.log("25: Yosh =", yosh25);
