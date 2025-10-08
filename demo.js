console.log("hello world!")

let name = "thinh"
console.log(name)

// nhập ,xuất dữ liệu 
// cách 1 : Dùng Readline(module) có sẵn
// khai báo thư viện 
const readline = require('readline');
// hoặc import readline from 'node:readline';
const rl = readline.createInterface({
    input: process.stdin,
    output:process.stdout

});

rl.question('Nhập tên của bạn :',(ten)=>{ // hàm mũi tên với ten là tham số
        console.log('Xin chào '+ ten);  // hoặc console.log(`Xin chào ${ten}`); với ` là dấu backtick
        rl.close();                       // tương đương console.log('Xin chào ', ten);
})
// cách 2 dùng thư viện bên ngoài (phải cài )(prompt-sync) gọn hơn 

const prompt = require('prompt-sync')();
let ten = prompt("nhập tên :");
console.log("chào "+ ten);

