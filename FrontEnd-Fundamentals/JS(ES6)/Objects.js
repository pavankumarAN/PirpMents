function Students(name, age, branch, year) {
    this.name;
    this.age;
    this.branch;
    this.year;
    this.address = () => {
        console.log(`Hai I'm ${name} studying in ${branch}, ${year} and my age is ${age}`);
    }
    
}

var pavan = new Students("Pavan",25,"CSE",2019);
pavan.address();

var swmay = new Students("Channabasava Swamy", 25 , "MECH", 2019);
swmay.address();

pavan.yearBack = true;

swmay.yearBack = false;

console.log(pavan.yearBack);

console.log(swmay.yearBack);
