// let User={
//     firstName:"lior",
//     lastName:"yosef",
//     age:24,
//     email:"aaaa@ssss"
// };

// let name="marcos";
// let lastName= "bazbih";
// let age=23;
// let email="vhjcfv@gmail.com";
// let ifIsPass=true;

// let person={name, lastName};
// let employed={name,lastName,age};
// let student={name,lastName,age,email,ifIsPass};

// let NewEmployed={person,age};
// console.log(person,employed,NewEmployed);

// ////////////////////////////////!

// class Car{

// }

// class Dogs{
//     name;
//     age;
//     type;
// }

// class Cats{
//     name;
//     age;
//     type;
//     constructor(nameFromUser,ageFromUser,typeFromUser){
//         this.name=nameFromUser;
//         this.age=ageFromUser;
//         this.type=typeFromUser;
//     }
// }

// class Student {
//     nameStudent;
//     class;
//     age;
//     constructor (nameFromUser,classFromUser,ageFromUser){
//         this.nameStudent=nameFromUser;
//         this.class=classFromUser;
//         this.age=ageFromUser
//     }
// }

// const dan=new Student( "dan","y",20);
// const lior=new Student("lior","t",17);

// console.log(dan,lior);

// class Employed {
//     nameEmployed;
//     lastNameEmployed;
//     phone;
//     born;

//     constructor (nameFromUser,lastNameFromUser,phoneFromUser,bornFromUser){
//         this.nameEmployed=nameFromUser;
//         this.lastNameEmployed=lastNameFromUser;
//         this.phone=phoneFromUser;
//         this.born=bornFromUser

//     }
// }

// const Employed1=new Employed("bar","ado",055-658699,1990);
// const Employed2=new Employed("dan","zmj",052-65599,1993);
// const Employed3=new Employed("kobi","wqp",050-65000,1991);

// console.log(Employed1,Employed2,Employed3);


////////////////  8  ////////////////////// !

// 8.	צרו טופס של משתמש:
// a.	שם פרטי
// b.	שם משפחה
// c.	גיל
// לחיצה על שלח יוצרת מופע של משתמש, עם אותם שדות.
// האובייקט יודפס ללוג.
// האובייקט יודפס למסך.
// הציגו טבלה עם הנתונים.
// כאשר לוחצים על שלח, נוסף כפתור עם השם של המשתמש שנוצר, ובעת לחיצה מודפס ללוג המידע של האובייקט

let firstName = document.getElementById("first");
let lastName = document.getElementById("last");
let age = document.getElementById("age");
let btn = document.getElementById("btn");
let contener = document.getElementById("contener");
let table = document.getElementById("table");

class Student {
    first;
    last;
    age;

    constructor(firstName, lastName, age) {
        this.first = firstName;
        this.last = lastName
        this.age = age
    }
}


btn.onclick = () => {
    let user1 = new Student(firstName.value, lastName.value, age.value);
    // contener.innerHTML=`${user1.first} <br> ${user1.last} <br> ${user1.age}`
    table.innerHTML += `<tr> <td>${user1.first}</td> <td> ${user1.last}</td> <td> ${user1.age}</td> </tr> <br>
    <button id="showData"> ${user1.first} </button>`
    showData.onclick = () => {
        console.log(user1.first);
    }


}



