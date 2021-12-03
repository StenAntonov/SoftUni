class Company {
    constructor () {
        this.departments = [];
        this.depts = [];
    }

    addEmployee(username, Salary, Position, Department) {
        if(username === '' || username === undefined || username === null){
            throw new Error('Invalid input!');
        }else if(Salary === '' || Salary === undefined || Salary === null){
            throw new Error('Invalid input!');
        }else if(Position === '' || Position === undefined || Position === null){
            throw new Error('Invalid input!');
        }else if(Department === '' || Department === undefined || Department === null){
            throw new Error('Invalid input!');
        }else if(Salary < 0){
            throw new Error('Invalid input!');
        }

        if(!this.depts.includes(Department)){
            this.depts.push(Department);
        }

        let newEmpleyye = {
            [username]: {
                Salary,
                Position,
                Department
            }
        };

        this.departments.push(newEmpleyye);
        
        return `New employee is hired. Name: ${username}. Position: ${Position}`;

    };

    bestDepartment(){
        let bestDeptSalary = 0;
        let  bestDepartment = '';
        let workers = [];
        for ( let i = 0 ; i < this.depts.length ; i++ ) {
            let dept = this.depts[i];
            let salaries = [];
            for (let worker of this.departments){
                let workerName = Object.keys(worker)[0];
               if(worker[workerName].Department === dept){
                salaries.push(worker[workerName].Salary);
               }
            };
            let averageSalary = salaries.reduce((a, b) => Number(a) + Number(b)) / salaries.length;
            if(bestDeptSalary < averageSalary){
                bestDeptSalary = averageSalary;
                bestDepartment = dept;
            }
        }

        for ( let i = 0 ; i < this.depts.length ; i++ ) {
            for (let worker of this.departments){
                let workerName = Object.keys(worker)[0];
               if(worker[workerName].Department === bestDepartment){
                   if(!workers.includes(worker)){
                       workers.push(worker);
                   }
               }
            };
        }

        let sorted = workers.sort((a, b) =>  b[Object.keys(b)[0]].Salary - a[Object.keys(a)[0]].Salary || Object.keys(a)[0].localeCompare(Object.keys(b)[0]));
    
        return `Best Department is: ${bestDepartment}\nAverage salary: ${bestDeptSalary.toFixed(2)}\n${sorted.map(w => `${Object.keys(w)[0]} ${w[Object.keys(w)[0]].Salary} ${w[Object.keys(w)[0]].Position}`).join('\n')}`;
    }
    
}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
