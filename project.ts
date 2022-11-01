export class Project{
	projName:string;
	employees:Employee[];
	client;

    constructor(){
        this.projName = "SWC-BI"
        this.client = {cname : "SWC", 
                       cloc:"Sydney",
                       contact : 9988776655
                    }
        this.employees = [
               new Employee("Shrilata", "Manager", "shrilata@gmail.com"),
               new Employee("Soha", "Tech Analyst", "soha@gmail.com"),
               new Employee("Arnav", "Developer", "arnav@gmail.com"),
        ]
    }
}	
	
export class Employee{
    empName:string
    desig:string
    email:string

    constructor(empName:string, desig:string, email:string){
        this.empName = empName;
        this.desig = desig
        this.email = email
    }
	
}