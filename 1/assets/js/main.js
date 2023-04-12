var num= prompt();

if (num>99 && num<1000){
    
    var teklik=num%10;
    var onluq = ((num-teklik)/10)%10;
    var yuzluk = (num- (onluq*10 + teklik))/100;


    if (teklik==onluq && onluq==yuzluk && teklik==yuzluk) {
        alert ('bütün rəqəmlər bərabərdir');
    }
    else {
        alert ('bütün rəqəmlər bərabər deyil');
    }
}
else {
    alert ('write right input');
}