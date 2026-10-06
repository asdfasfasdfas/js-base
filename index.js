const language = prompt("Введи язык: ");
let greetingMessage;

switch (language) {
  case "en":
    greetingMessage = "Hello!";
    break;
  case "ru":
    greetingMessage = "Привет!";
    break;
  case "de":
    greetingMessage = "Gutten tag!";
    break;
  default:
    greetingMessage = "Неизвестный язык";
}

console.log(greetingMessage);
