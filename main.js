// console.log("Abdulsamet Dursun"); //In console
// document.write("Baglanti Kontrol <br>"); //In Screen

// //numbers
// document.write(1, 5, 8, 9);
// document.write("<br>");
// document.write(1 + 2);
// document.write("<br>");
// document.write("1" + "2");

// //string
// document.write("<br>");
// document.write("Abdulsamet", "Dursun", "1", " ", "2");
// document.write("<br>");

// //boolean - true or false
// document.write("Is 1 is equal to 2 ?", false);
// document.write("<br>");

// //array
// document.write([1, 2, 3, 4, 5]);
// document.write("<br>");
// document.write(["Abdulsamet", "Ahmet"]);
// document.write("<br>");

// //object
// // console.log({
// //   isim: "Abdulsamet",
// //   soyisim: "Dursun",
// //   yas: "25",
// //   cinsiyet: "erkek",
// // });

// // console.log([
// //   {
// //     isim: "Abdulsamet",
// //     soyisim: "Dursun",
// //     yas: "25",
// //     cinsiyet: "erkek",
// //   },
// //   {
// //     isim: "Ahmet",
// //     soyisim: "Dursun",
// //     yas: "20",
// //     cinsiyet: "erkek",
// //   },
// //   {
// //     isim: "Erdal",
// //     soyisim: "Dursun",
// //     yas: "50",
// //     cinsiyet: "erkek",
// //   },
// //   {
// //     isim: "Sebiha",
// //     soyisim: "Dursun",
// //     yas: "47",
// //     cinsiyet: "kadin",
// //   },
// // ]);

// // console.log([
// //   {
// //     isim: "Abdulsamet",
// //     soyisim: "Dursun",
// //     yas: "25",
// //     cinsiyet: "erkek",
// //   },
// //   {
// //     isim: "Hasan",
// //     soyisim: "Celik",
// //     yas: "25",
// //     cinsiyet: "erkek",
// //   },
// // ]);

// //var
// // var can be change, and can change with new var
// // var teacherName = "Hasan Celik";
// // document.write("Teacher in this class ====> ", teacherName);
// // document.write("<br>");
// // var teacherName = "Mehmet Can Seyhan";
// // document.write("Teacher in this class ====> ", teacherName);

// //let
// // let can be change, and can change without new let
// // let teacherName = "Hasan Celik";
// // document.write("Teacher in this class ====> ", teacherName);
// // document.write("<br>");
// // teacherName = "Mehmet Can Seyhan";
// // document.write("Teacher in next class ====> ", teacherName);
// // document.write("<br>");
// // let thisWeekTitle;
// // thisWeekTitle = "JavaScript";
// // document.write(thisWeekTitle);
// // document.write("<br>");

// let classTime = "8pm";
// let teacher;
// document.write(
//   "Class Start Time ===> ",
//   classTime,
//   "Class Teacher Name ===> ",
//   teacher
// );

// teacher = "Furkan Evin";
// document.write("<br>");

// document.write(
//   "Class Start Time ===> ",
//   classTime,
//   "Class Teacher Name ===> ",
//   teacher
// );

// classTime = "10pm";
// document.write("<br>");
// document.write(
//   "Class Start Time ===> ",
//   classTime,
//   "Class Teacher Name ===> ",
//   teacher
// );
// document.write("<br>");

// let isim = "Abdulsamet";
// let soyisim = "Dursun";
// document.write("isim: ", isim, " ", "soyisim: ", soyisim);
// document.write("<br>");

// //const
// //const cannot be change
// const pi = 3.14;
// document.write(pi);

// const primaryColor = "orange";
// const secondaryColor = "red";

//JavaScript Operators
let name = "Abdulsamet";
let lastname = "Dursun";
let age = 25;
let birthYear = 1998;
let graduationYear = "2019";
let startYear = "2016";
let thisYear = "2023";

let num1 = 5;
let num2 = 10;
let num3 = "5";
// +
document.write(name + " " + lastname);
document.write("<br>");
document.write(age + birthYear);
document.write("<br>");
document.write("University Years ===>", startYear + " - " + graduationYear);
document.write("<br>");

// -
document.write("Person's Birth Year ===> ", thisYear - age);
document.write("<br>");

// *
document.write("Num1 x num2 ===>", num1 * num2);
document.write("<br>");

// /
document.write("Num2 / num1 ===>", num2 / num1);
document.write("<br>");

// = and !
document.write("Is Num1 equal to Num2?", num1 == num2);
document.write("<br>");
// ! means "not"
document.write("Is not Num1 equal to Num2?", num1 !== num2);

// =
let x = 5;
let y = "Number three";
x = y;
document.write("<br>");
document.write(x);

// +=
x = 6;
x += 2;
document.write("<br>");
document.write(x);

// -=
x -= 1;
document.write("<br>");
document.write(x);

// *=
x *= 7;
document.write("<br>");
document.write(x);

// /=
x /= 7;
document.write("<br>");
document.write(x);

//==
//num1's value is number equal to num3's value
document.write("<br>");
document.write("Is Num1 equal to Num3?", num1 == num3);

// ===
// num1 is number but num3 is string so they are not equal
document.write("<br>");
document.write("Is Num1 equal to Num3?", num1 === num3);

// !=
document.write("<br>");
document.write("Is NOT Num1 equal to Num2?", num1 != num2);
document.write("<br>");
document.write("Is NOT Num1 equal to Num3?", num1 != num3);

// !==
document.write("<br>");
document.write("Is NOT Num1 equal to Num2?", num1 !== num2);
document.write("<br>");
document.write("Is NOT Num1 equal to Num3?", num1 !== num3);