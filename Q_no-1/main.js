"use strict";
// Write a simple asynchronous TypeScript function fetchGreeting that returns a
// greeting message after a 2-second delay using setTimeout.
Object.defineProperty(exports, "__esModule", { value: true });
function fetchGreeting() {
    setTimeout(() => {
        console.log("Eid Mubarak");
    }, 2000);
    console.log("Assalam-o-alekum");
}
fetchGreeting();
