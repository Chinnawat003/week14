"use strict";
//5.Optional Parameter
function showDetall(id, email, name, staff) {
    console.log(`ID ${id},Name: ${name} Email: ${email} ,Staff:${staff}`);
    if (staff != undefined) {
        console.log(`ID ${id},Name: ${name} Email: ${email}`);
    }
}
showDetall(101, "Chinnawat Rattanamun", "Dong@gmail.com");
showDetall(101, "Chinnawat Rattanamun", "Dong@gmail.com");
showDetall(101, "Chinnawat Rattanamun", "Dong@gmail.com", "AWS CEO");
