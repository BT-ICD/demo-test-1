export class Cricketer{
  
    constructor(private id:number, private name:string, private avgScore:number){}
}
export interface ICricketer{
    id:number;
    name:string;
    avgScore:number;
}
