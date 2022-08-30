function a(num){
    if(num>10) return;
    console.log(num++);
    a(num);
}
a(1);