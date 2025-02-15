"use strict";
// Write a function fetchWithError that returns a Promise. It should randomly either
// resolve with "Data fetched successfully!" or reject with "Data fetch failed!" after a
// delay of 1 second. Handle the rejection using .catch
Object.defineProperty(exports, "__esModule", { value: true });
function fetchWithError() {
    return new Promise((resolve, reject) => {
        const a = false;
        if (a !== false) {
            resolve("Data Fetched Successfully!");
        }
        else {
            reject("Data fetch failed!");
        }
        setTimeout(() => {
        }, 1000);
    });
}
fetchWithError().then((response) => {
    console.log(response);
}).catch((err) => {
    console.log(err);
});
