function employeedata(Name: string,BaseSallary:number,Experience:number,rating:number):void{

if(rating>=5){
let variablepay=15;
let Hike:number=0;
let HikePercentage:number=0;
let Reward:number=5000;
let Bonus:number=1000;
    Hike = (BaseSallary * variablepay / 100) + Bonus + Reward; 

    console.log("Hiken for rating>5 employees :"+ Hike);
    HikePercentage = Hike / BaseSallary;
    console.log("Hike percentage for rating>5 employees :"+ HikePercentage*100);
}

    else if (rating >= 4 && rating < 5) {
        let variablepay = 15;
        let Hike: number = 0;
    let HikePercentage: number = 0;
        let Reward: number = 5000;
        let Bonus: number = 1000;
        Hike = (BaseSallary * variablepay / 100) + Bonus + Reward;

        console.log("Hiken for rating>=4 and <5 employees :" + Hike);
        HikePercentage = Hike / BaseSallary;
        console.log("Hike percentage for rating>=4 and <5 employees :" + HikePercentage*100);   
    }
    else if (rating >= 3 && rating < 4) {
        let variablepay = 10;
        let Hike: number = 0;
    let HikePercentage: number = 0;
        let Reward: number = 0;
        let Bonus: number = 1200;
        Hike = (BaseSallary * variablepay / 100) + Bonus + Reward;

        console.log("Hiken for rating>=3 and <4 employees :" + Hike);
        HikePercentage = Hike / BaseSallary;
        console.log("Hike percentage for rating>=3 and <4 employees :" + HikePercentage*100);
    }
    else if (rating <3) {
        let variablepay =3;
        let Hike: number = 0;
        let Reward: number = 0;
        let Bonus: number = 300;
        Hike = (BaseSallary * variablepay / 100) + Bonus + Reward;

        console.log("Hiken for rating>=4 and <5 employees :" + Hike);
    }


    
}
employeedata("Alice Johnson", 75000.0, 5.1, 4.2);
employeedata("Bob Smith", 68000.0, 3.2, 3.8);
employeedata("Carol Davis", 82000.0, 7.1, 4.5);
employeedata("David Brown", 90000.0, 10.2, 2.5);
employeedata("Eva Green", 60000.0, 2.4, 3.5);  