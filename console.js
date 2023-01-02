console.log("Witaj Świecie");
console.log(window);
console.log("witaj", window, 100);
console.table([1, 2, 3, 4, 5]);
console.group("Grupa 123"); //początek grupy
console.log("Ala ma kota");
console.log("Kot ma Alę");
console.groupEnd(); //koniec grupy
console.groupCollapsed("Nazwa1");//grupa domyślnie zwinięta
console.log("Ala ma kota");
console.log("Kot ma Ale");
console.groupEnd();//koniec grupy
console.time("Timer"); //rozpoczynamy test
for (let i = 0; i < 100000; i++) {
    ;
}
console.timeEnd("Timer"); //kończymy test
function test() {
    let i = 0;
    //debugger //jest to instrukcja która przerywa działanie w tym miejscu. Mogę w tedy go badać w zakładce Source.
}

test();

var text = "ala";
text = "Janek ma żyrafę";
console.log({text})
let  a = 0;
a = 10;
const b = 0;
//b = 10; //błąd do stałej wartości nie można przypisać nowej wartości
const name= "Monika";
//name = "Ala"; //błąd
const tab = [1,2,3] //tablica to też obiekt
tab[3] = 4;
tab.push(5, 6);
console.log(tab)
tab = [1,2,3,4,5,6]; //błąd - podstawione inne liczby
