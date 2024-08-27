import React from "react";

const dateInfo = new Date();
const currentYear = dateInfo.getFullYear();
const userInput = prompt("Enter your birthyear");
const userAge = currentYear - Number(userInput);
let applyStatus;
const imgURL = "http://www......file.jpg";

if (userAge > 16) {
  applyStatus = "Congrats! you CAN apply driver license";
} else {
  applyStatus = "Sorry! you can NOT apply driver license";
}

function Header() {
  return (
    <header title="show something here" style={{ border: "2px solid red" }}>
      <img src={imgURL} alt={"logo"} />
      <h1 contentEditable="true">
        HELLO Header <br /> Your age is: {"---"} {userAge}, {applyStatus}
      </h1>
    </header>
  );
}

export default Header;
