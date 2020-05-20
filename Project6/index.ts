// ------------------------------------------------------------------CLI-------------------------------------------------
// npm init -y
//npm install typescript ts-node-dev
//edit -> package.json
//npm start <--- uruchomienie


// -------------------------------------------------------------------BASICS--------------------------------------------------

const add = (a: number,b: number): number => {
    return a+b;

}


function add2(a: number, b: number): number{
    return a+b;
}



interface Post{
    title: string;
    daysOld: number;
    published: boolean;
}


const post: {title: string, daysOld: number, published: boolean} = {
    title: "Latest Typescript News",
    daysOld: 10,
    published: true
};

const printPost = (postToPrint: Post) => {
    return `${postToPrint} (${postToPrint.daysOld} days old)`;
}




class Car2{
    private color: string;
    private year: number;

    constructor(color: string, year: number){
        this.color = color;
        this.year = year;

    }

    // auitomatycznie stworzy properties i modyfikatory dostepu na podstawie konstrukutora
    // constructor(public color: string, public year: number){
    //     this.color = color;
    //     this.year = year;

    // }

    driver() {
        console.log('Vroom');
    }
}

const myCar = new Car2('red',2000);
myCar.driver();




// ------------------------------------------------------DECORATORS---------------------------------------

const Component = (target: any) => {
    console.log(target);
    
};

@Component
class Car3{
 
}



// -----------------------------------------------------------The module system----------------------------------------------
import {Car} from './Car';



interface Driveable{
    speed: number;
    drive(): string;
}


class Car4 implements Driveable{
    speed = 10;

    drive(){
        return `I am driving ${this.speed}`;
    }
}


const myCar4 =  new Car4();

const startDriving = (vehicle: Driveable) => {
    vehicle.drive();
};

startDriving(myCar4);


// ----------------------------------------------------------------------- GENERICS---------------------------------

 class ValueHolder<T>{
     value: T;
 }


 const numberHolder = new ValueHolder<number>();
 numberHolder.value = 20;


  const numberWrapper = (value: number): number[] => {
     return [value];
 };
// as generic
 const valueWrapper = <T>(value: T): T[] => {
     return [value];

 }

 valueWrapper<number>(1);
