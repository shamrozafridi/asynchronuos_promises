"use strict";
// Write a function simulateTask that simulates a task by logging "Task started",
// waits for 1 second, and then logs "Task completed". Use setTimeout for the delay.
Object.defineProperty(exports, "__esModule", { value: true });
function simulateTask() {
    console.log("Task Started");
    setTimeout(() => {
        console.log("Task Completed");
    }, 1000);
}
simulateTask();
