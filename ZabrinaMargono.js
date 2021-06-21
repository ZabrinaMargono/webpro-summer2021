/* Callback - a*/
function mandi (){
    console.log("mandi");
}

/* Callback - b */
function sarapan (detik){
    setTimeout(()=>{
        console.log("Sarapan tertunda {detik} detik");
        detik();
    },3000);
}

/*Callback - c */
function berangkatSekolah(){
    console.log("Berangkat Sekolah");
}

/*Callback - d */

mandi();
berangkatSekolah(sarapan);

/*Callback - e*/
mandi();
sarapan();
berangkatSekolah()


/*2. Promise - a */

function helloWorld(){
    return new Promise (function (resolve, reject){
        setTimeout (()=>resolve ("Hello World :)"),2000);
    });
}

/*2 Promise - b */
async function messages(){
    msg = await helloWorld();
    console.log(msg);
}
/*2 Promise - c */
messages();

/*3 Fetch - a */

function ambilDataUser(){
    /*3 Fetch - b*/
    fetch ('https://jsonplaceholder.typicode.com/users')
    /*3 Fetch - c*/ 

    .then (response => response.json());
        return response.json();

    /*3 Fetch - d*/
    .then (function => function.users());
        console.log(users);
}
/*3 Fetch -e */
ambilDataUser();

/*4 Class - a*/

class Orang{
    /*4 Class - b*/
    constructor (nama,umur){
        this.nama = nama;
        this.umur = umur;
    }
    /*4 Class - c*/
    let (bekerja){
        console.log(`${this.nama} sedang bekerja seperti biasa`);
    }
};
/*4 Class - d */
Object (user1) = new Orang ("Zabrina", 21);
/*4 Class - e*/
    console.log (user1.bekerja);

    /*5. Inheritance - a*/
class Orang1{
    constructor(nama,umur){
        this.nama=nama;
        this.umur=umur;
    }

    /*5. Inheritance - b*/
    let (tidur){
        console.log(`${this.nama} sedang tidur`);
    }
    let (makan){
        console.log(`${this.nama} sedang makan`);
    }
}

/*5 Inheritance - c */

class Pelajar extends Orang2{
    /*5. Inheritance - d*/
    constructor(nama, umur, namaSekolah){
        /*5 Inheritance - e*/
        super (nama,umur);
        /*5 Inheritance - f,g*/
        this.namaSekolah=namaSekolah;
    }
    /*5 Inheritance - h*/
    let (belajar){
        console.log(`${this.nama} belajar di ${this.sekolah}`);
    }
}
    /* 5 Inheritance - i*/
Object (Pelajar) = new user ("John",17, "Unklab");  
console.log(user);



