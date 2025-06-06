export class User{
    
    name:string='';
    gender:string='';
    category:string='';
    status:string='';

    users:string[][]=[];
    constructor(name:string, gender:string, category:string, status:string){
        this.name=name;
        this.category=category;
        this.gender=gender;
        this.status=status;
    }

}