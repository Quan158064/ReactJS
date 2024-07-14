"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const mathOperations_1 = require("./mathOperations");
// Câu 1
let fullName = "Nguyen Van A";
let age = 25;
let isStudent = true;
function printId(id) {
    if (typeof id === "string") {
        console.log(`ID: ${id}`);
    }
    else {
        console.log(`Employee ID: ${id}`);
    }
}
printId("ABC123");
printId(456);
let person = {
    name: "Nguyen Van B",
    age: 30
};
console.log(person);
let numbers = [1, 2, 3, 4, 5];
function sumArray(nums) {
    let total = 0;
    for (let num of nums) {
        total += num;
    }
    return total;
}
let sum = sumArray(numbers);
console.log(`Tổng của các phần tử trong mảng: ${sum}`);
let emp1 = ["Nguyen Van C", 28];
console.log(`Tên nhân viên: ${emp1[0]}, Tuổi: ${emp1[1]}`);
// Câu 3
// Định nghĩa đối tượng customer
let customer = {
    name: "Nguyen Van D",
    address: {
        street: "123 Main St",
        city: "Hanoi"
    }
};
let street = (_a = customer.address) === null || _a === void 0 ? void 0 : _a.street;
console.log(`Địa chỉ: ${street}`);
// Định nghĩa hàm getUserName
function getUserName(user) {
    var _a;
    return (_a = user.name) !== null && _a !== void 0 ? _a : "Guest";
}
// Ví dụ sử dụng hàm getUserName
let user1 = { name: "Nguyen Van F" };
let user2 = {};
console.log(`Tên người dùng: ${getUserName(user1)}`); // Output: Tên người dùng: Nguyen Van F
console.log(`Tên người dùng: ${getUserName(user2)}`); // Output: Tên người dùng: Guest
// Viết hàm calculateTotal
function calculateTotal(products) {
    let total = 0;
    for (let product of products) {
        total += product.price;
    }
    return total;
}
// Ví dụ sử dụng hàm calculateTotal
let products = [
    { name: "Apple", price: 1.2 },
    { name: "Banana", price: 0.5 },
    { name: "Orange", price: 0.8 }
];
let total = calculateTotal(products);
console.log(`Tổng giá của các sản phẩm: $${total}`);
// Định nghĩa class TemperatureConverter
class TemperatureConverter {
    // Phương thức chuyển đổi từ độ Fahrenheit sang Celsius
    static toCelsius(fahrenheit) {
        return (fahrenheit - 32) * 5 / 9;
    }
    // Phương thức chuyển đổi từ độ Celsius sang Fahrenheit
    static toFahrenheit(celsius) {
        return (celsius * 9 / 5) + 32;
    }
}
// Ví dụ sử dụng class TemperatureConverter
let fahrenheit = 100;
let celsius = 37;
console.log(`${fahrenheit}°F = ${TemperatureConverter.toCelsius(fahrenheit).toFixed(2)}°C`);
console.log(`${celsius}°C = ${TemperatureConverter.toFahrenheit(celsius).toFixed(2)}°F`);
let a = 10;
let b = 5;
console.log(`Addition: ${a} + ${b} = ${(0, mathOperations_1.add)(a, b)}`);
console.log(`Subtraction: ${a} - ${b} = ${(0, mathOperations_1.subtract)(a, b)}`);
console.log(`Multiplication: ${a} * ${b} = ${(0, mathOperations_1.multiply)(a, b)}`);
console.log(`Division: ${a} / ${b} = ${(0, mathOperations_1.divide)(a, b)}`);
let tasks = [];
// Hàm thêm công việc mới
function addTask(task) {
    tasks.push(task);
}
// Hàm xóa công việc theo id
function deleteTask(taskId) {
    tasks = tasks.filter(task => task.id !== taskId);
}
// Hàm cập nhật trạng thái hoàn thành của công việc
function updateTaskStatus(taskId, completed) {
    const task = tasks.find(task => task.id === taskId);
    if (task) {
        task.completed = completed;
    }
}
// Hàm hiển thị danh sách công việc
function displayTasks() {
    console.log("Danh sách công việc:");
    tasks.forEach(task => {
        console.log(`ID: ${task.id}, Title: ${task.title}, Completed: ${task.completed}`);
    });
}
// Hàm lọc các công việc theo mức độ ưu tiên
function filterTasksByPriority(priority) {
    return tasks.filter(task => task.priority === priority);
}
// Hàm sắp xếp danh sách công việc theo thời hạn hoàn thành
function sortTasksByDueDate() {
    return tasks.slice().sort((a, b) => a.dueDate.getTime() - b.dueDate.getTime());
}
// Thêm các công việc vào danh sách
addTask({ id: 1, title: "Task 1", description: "Description 1", dueDate: new Date("2023-07-10"), priority: "high", completed: false });
addTask({ id: 2, title: "Task 2", description: "Description 2", dueDate: new Date("2023-07-08"), priority: "medium", completed: false });
addTask({ id: 3, title: "Task 3", description: "Description 3", dueDate: new Date("2023-07-09"), priority: "low", completed: false });
// Hiển thị danh sách công việc
displayTasks();
// Cập nhật trạng thái hoàn thành của công việc
updateTaskStatus(1, true);
// Xóa công việc theo id
deleteTask(2);
// Hiển thị danh sách công việc sau khi cập nhật
displayTasks();
// Lọc các công việc theo mức độ ưu tiên "high"
let highPriorityTasks = filterTasksByPriority("high");
console.log("Công việc ưu tiên cao:", highPriorityTasks);
// Sắp xếp danh sách công việc theo thời hạn hoàn thành
let sortedTasks = sortTasksByDueDate();
console.log("Công việc sắp xếp theo thời hạn hoàn thành:", sortedTasks);
let products1 = [];
function addProduct(product1) {
    products1.push(product1);
}
function deleteProduct1(productId1) {
    products1 = products1.filter(product1 => product1.id !== productId1);
}
function updateProduct1(updatedProduct1) {
    const index = products1.findIndex(product1 => product1.id === updatedProduct1.id);
    if (index !== -1) {
        products1[index] = updatedProduct1;
    }
}
function displayProducts1() {
    console.log("Danh sách sản phẩm:");
    products1.forEach(product => {
        console.log(`ID: ${product.id}, Name: ${product.name}, Price: ${product.price}, Quantity: ${product.quantity}`);
    });
}
function calculateTotalPrice() {
    return products1.reduce((total, product) => total + product.price * product.quantity, 0);
}
function findProductById(productId) {
    return products1.find(product => product.id === productId);
}
