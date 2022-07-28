class Car{

    // brand: string;
    // model: string;
    // year: number;
    // color: string;
    // started: boolean;
    // speed:number

    // constructor(brand:string, model:string, year:number,color:string){
    //     this.brand = brand;
    //     this.model = model;
    //     this.year = year;
    //     this.color = color;
    //     this.started = false;
    //     this.speed = 0
    // }

    /**
     * Propiedades que quiero que siempre tengan el mismo valor 
     * a la hora de crear un nuevo objeto a raiz de la clase, 
     * fuera del constructor.
     */
    started:boolean; 
    speed:number; 
    
    constructor(

        public brand:string, 
        public model:string, 
        public year:number,
        public color:string,
        
        ){
            this.started = false
            this.speed = 0
        }

    start():void{
        this.started = true
    }

    off():void{
        this.started = false
    }

    speed_up(much:number){
        this.speed += much
    }

    break_down(less:number){
        this.speed -= less
    }

    get how_much_speed():string{
        return `The car is fast as ${this.speed}km/h.`
    }


    get carStarted():boolean{
        return this.started
    }

}

let my_car: Car = new Car("Ferrari", "440", 2022, "White")

my_car.start()
my_car.speed_up(200)
my_car.break_down(33)
console.log(my_car.how_much_speed)

console.log(my_car)
