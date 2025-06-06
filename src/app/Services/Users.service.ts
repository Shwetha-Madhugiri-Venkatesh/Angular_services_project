import { EventEmitter, Injectable, Output } from "@angular/core";
import { User } from "../Models/User";
import { Logger } from "./Logger.service";

@Injectable()
export class Users{
    
    constructor(private logg:Logger){

    }
    users=[
        new User('shwetha','female','monthy','all site'),
        new User('Manu','male','monthy','all site'),
        new User('shwetha','female','monthy','all site'),
    ];

    get allUsers(){
        return this.users;
    }
    
    showTheUser:EventEmitter<User> = new EventEmitter<User>;

    raising_Event(user:User){
        this.showTheUser.emit(user);
    }
    add(name:string,gender:string, category:string, status:string){
        let new_user = new User(name,gender,category,status);
        this.users.push(new_user);
        this.logg.display(name,status);
    }
}