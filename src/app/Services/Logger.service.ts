import { Injectable } from "@angular/core";

@Injectable({ 
    providedIn:'root',
})
export class Logger{
    display(name:string,status:string){
        console.log("A new user is added eith name "+name+" and the status "+status+" .");
    }
}