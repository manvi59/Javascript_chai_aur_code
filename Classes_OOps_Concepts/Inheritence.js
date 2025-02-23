//  inheritence ------------take the property  from parents to child

class Teacher {
  constructor(sub, rating) {
    this.sub = sub;
    this.rating = rating;
  }

  bookFunc() {
    console.log("heyyy I love Mathamaticss !");
  }
}

class Student extends Teacher {
  constructor(sub, name) {
    super(sub), (this.sub = sub), (this.name = name);
  }

  read() {
    console.log(`heyyyyyy I love to read this  ${this.sub}`);
  }
}

const tea = new Teacher("Mathamatics", 10);
const stu = new Student("Computer", "manvi");
stu.read();
stu.bookFunc(); // heyyy I love Mathamaticss ! able to access because of inheritence
