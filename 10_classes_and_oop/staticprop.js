class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

   static createId(){
     return `123`
    }
}

const ritik = new User("Ritik")
// console.log(ritik.createId());


class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email=email
    }
}

const Iphone = new Teacher("IPhone","iphine@gmail.com")

Iphone.logMe()
console.log(Iphone.createId());

