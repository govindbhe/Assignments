let  sentence:string="java programing is fun and challenging";

let Wordlenght:number=sentence.split(" ").length;
console.log(Wordlenght);



for (let i: number = Wordlenght-1;i>=0;i--){
    console.log(sentence.split(" ")[i]);

}