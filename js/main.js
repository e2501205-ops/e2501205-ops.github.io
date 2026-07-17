console.log("Hello World !");
console.log("Hello World !!");
console.log("Hello World !!!");
console.log("Hello World !!!!");
const p = document.querySelector("p");
p.textContent = "Hello!!!";

let message1 = "初めまして！"

massage = "こんにちは！";

let message2 = "Hello !"

console.log(message1);
console.log(message2);
messagw1 = "おはようございます";
console.log(message1);

let text = "RenRen";

function sayHello(language) {

    let message = "";

    if (language === 0) {
        message = "こんにちは";
    } else if (language === 1) {
        message = "Hello";
    } else if (language === 2) {
        message = "Bonjour";
    } else if (language === 3) {
        message = "Hola";
    } else if (language === 4) {
        message = "你好";
    } else if (language === 5) {
        message = "Guten Tag";
    } 

    console.log(message);

    const p_hello = document.querySelector("#say_hello");
    p_hello.textContent = message;

}
