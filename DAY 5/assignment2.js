console.log("Hello World");

//const user = {
//      name:'Dilip', 
//      age:20,
//      email:'dilip@gmail.com',
//      login(){    
//   console.log('Dilip has logged in');
//    },
//     logout(){
//   console.log('Dilip has logged out');
//   },
// }

//console.log(user.age);

class User {
   constructor(name, age,email) {
     this.name = name;
     this.age = age;
     this.email = email;
     this.luCoins = 0;
     this.courses = [];
   }

   static greet(){
       console.log("Hello There!!!");
   }

   login(){
       console.log(`${this.name} have been  logged in`);
       
   }
   logout(){
       console.log(`${this.name} have been  logged out`);
       
   }
   addCoins(user){
       this.luCoins++;
       this.luCoins++;
       this.luCoins++;
       this.luCoins++;
       console.log(`${this.name} has ${this.luCoins} coins`);
       return user;
   }
   getDetails(){
       console.log(`Name is ${this.name}, email is ${this.email}`);
       
    }
   removecoins(user){
       this.lucoins--;
       this.lucoins--;
       console.log(`${this.name} had three lucoins and after removing it has ${this.luCoins}`);
    }
}
  class  Moderator extends User { 
      constructor(name,age,email){
       super(name,age,email);
    
    }
    deleteUSer(){
     users=users.filter(u=>{
         return users.u.email !=useremail;
     })   
    
    
    class admin extends Moderator{
       addCourse(user,course){
        user.courses.push(course);
        console.log(user);
        return user;
       }  
    } 
 let user1 = newuser("ahmed",24,'ah@gmail.com');
 user1.login();
 user1.logout();
      user1 = newuser("asrar",25,'a@gmail.com');
      Admin  =newadmin("krishnan",34,'k@gmail.com');
      Moderator = newmoderater("ashok",32,'1@gmail.com');
      let users = [user1,user2,moderator,admin];
      
    users.forEach(element => {
    console.log(element);       
    });

    user1.addCourse(user1,'javacript','phyton');


    }
}
    
