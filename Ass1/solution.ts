1.function multiplyValue(value:number,multiplier?:number):number{
    if (multiplier!==undefined){
        return value*multiplier;
    }
    return value*2
}




2.function processInput(value:string|number|boolean): string|number {
    if (typeof value =="string"){
        return value.trim().toLowerCase();
    }
    if (typeof value =="number"){
        return value*10;
    }
    if (value == true){
        return "Active";
    }
    return "Inactive";
}


3. function formatCoordinate(
    coordinate:readonly[number,number,string]
):string{
    const latitude = coordinate[0];
    const longitude = coordinate[1];
    const locationname = coordinate[2];

    return "location: "+ locationname + "("+latitude+","+longitude+")"
}


4. function concatenateArrays<T>(...arrays:T[][]):T[]{
    let result:T[]=[];

    for (let array of arrays){
        result = result.concat(array);

    }
    return result;
    


}

5.interface Course{
    title:string;
    students:number;
    isPublished:boolean;

}
function getPopularCourses(courses:Course[],minStudents:number):Course[]{
    return courses.filter(courses=>courses.isPublished==true &&courses.students>=minStudents);
}

const courses:Course[]=[
    {title: "TypeScript Mastery",students:120,isPublished: true},
]


6.function pluckValues<T,k extends keyof T>(items:T[],key:k): T[K][]{
    let result: T[K][]=[];

    for (let i= 0; i<items.length;i++){
        result.push(items[i][key]);

    }
    return result ;

}

7. class Employee{
    protected name : string;
    private baseSalary: number;

    constructor (name:string,basesSalary:number){
        this.name=name;
        this.baseSalary=basesSalary;

    }
    getDetails():string{
        return "Employee:"+this.name+",Base Salray:"+this.baseSalary;
    }
}
class Manager extends Employee{
    private department : string;
    
    constructor (name:string,basesSalary:number,department:string){
        super(name,basesSalary);
        this.department=department;
       

    }
    getRoleInfo(){
        return "Manager of " + this. department + ": "+ this.name;
    }
}



8. function validateAgeAsync(age:number):Promise<string>{
    return new Promise((resolve,reject)=>{
        if (age>=18){
            setTimeout(()=>{
                resolve("Access Granted");
             } ,1000);

            }else {
                reject(new Error("Access Denied : Must be 18 or older"));

        }
    });
}

validateAgeAsync(20)
.then (result=>console.log(result))
.catch (error=>console.log(error))