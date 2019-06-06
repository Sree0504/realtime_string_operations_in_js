// 1. method1:

function phoneNumhide(phone, sizeOfHide){
    return phone.toString().replace(phone.toString().slice(1,sizeOfHide), "XXXXXX");
}
// the below method hides first six numbers
phoneNumhide(7661810910,6);
