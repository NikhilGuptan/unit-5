
// Write a function to retrieve the type of the user or admin
interface User {
    type: 'user';
    name: string;
    age: number;
    occupation: string;
  }

  function user({type,name,age,occupation}:User): void{

  }