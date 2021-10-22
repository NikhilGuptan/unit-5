// 1. create an interface for an object
interface LabeledValue {
    title: string;
    status:boolean;
    id:number;
  }

// 2. create a function getName
function getName(fName: string, lName?: string): string {
    return fName+lName
}

// 3. create an interface Address
interface Address {
    houseNumber:number;
    street:string;
    city:string;
    postalCode:number;
}
