// N1 - Create a Rectangle class. Rectangle should have: length and width.
// It should have getters and setters for all fields.
// It should have getArea() method.
// It should have getPerimeter() method.
// It should have toString() method.

class Rectangle {
	constructor (length, width){
		this.length = length;
		this.width = width;
	}

	get length(){
		return this._length;
	}
	set length(value){
		this._length = value;
	}

	get width(){
		return this._width;
	}
	set width(value){
		this._width = value;
	}

	getArea(){
		return this.length * this.width;
	}

	getPerimeter(){
		return 2 * (this.length + this.width);
	}

	toString(){
		return JSON.stringify(this);
	}
}

// N2 - Create an Employee class. Employee should have: id, firstName, lastName, position,
// salary, workingHours.
// It should have setters and getters for appropriate fields.
// It should have a method: getFullName().
// It should have a method: getAnnularSalary() which should be the total salary of the
// employee within a year.
// It should have a method: raiseSalary(percent), which increases the salary by the given
// percent and returns new salary.

class Employee {
	constructor(id, firstName, lastName, position, salary, workingHours){
		this.id = id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.position = position;
		this.salary = salary;
		this.workingHours = workingHours;
	}

	get id(){
		return this._id;
	}
	set id(value){
		this._id = value;
	}

	get firstName(){
		return this._firstName;
	}
	set firstName(value){
		this._firstName = value;
	}

	get lastName(){
		return this._lastName;
	}
	set lastName(value){
		this._lastName = value;
	}

	get position(){
		return this._position;
	}
	set position(value){
		this._position = value;
	}

	get salary(){
		return this._salary;
	}
	set salary(value){
		this._salary = value;
	}

	get workingHours(){
		return this._workingHours;
	}
	set workingHours(value){
		this._workingHours = value;
	}

	getFullName(){
		return `${this.firstName} ${this.lastName}`;
	}

	getAnnularSalary(){
		return this.salary * this.workingHours;
	}

	raiseSalary(percent){
		return this.salary + this.salary * percent / 100;
	}
}

// N3 - Create an Author class and a Book class.
// Author should have: name, email, gender.
// It should have appropriate getters and setters.
// It should have a toString method.
// Book should have: title, author(Author), price, quantity.
// It should have appropriate getters and setters.
// It should have a method: getProfit(), which calculates the profit from the book based on
// the price and quantity.
// It should have a toString method.

class Author {
	constructor(name, email, gender){
		this.name = name;
		this.email = email;

		if ((typeof(gender) === 'undefined' || gender === 'male' || gender === 'female')){
			this.gender = gender;
		} else {
			alert('Type male/female');
		}
	}

	get name(){
		return this._name;
	}
	set name(value){
		this._name = value;
	}
	get email(){
		return this._email;
	}
	set email(value){
		this._email = value;
	}
	get gender(){
		return this._gender;
	}
	set gender(value){
		this._gender = value;
	}
	toString(){
		return JSON.stringify(this);
	}
}
class Book extends Author{
	constructor(title, price, quantity){
		super();
		this.title = title;
		this.price = price;
		this.quantity = quantity;
	}

	get title(){
		return this._title;
	}
	set title(value){
		this._title = value;
	}
	get price(){
		return this._price;
	}
	set price(value){
		this._price = value;
	}
	get quantity(){
		return this._quantity;
	}
	set quantity(value){
		this._quantity = value;
	}

	getProfit(){
		return this.price * this.quantity;
	}
	toString(){
		return JSON.stringify(this);
	}
}

// N4 - Create an Account class. Account should have: id, name, balance.
// It should have setters for name and balance, and getters for all fields.
// It should have a method: credit(amount), which should add amount to balance and
// return the updated balance.
// It should have a method: debit(amount), which should subtract the amount from the
// balance, if amount is less than the balance, otherwise output “Amount exceeded
// balance.”
// It should have a method: transferTo(anotherAccount, amount): which should subtract the
// amount from the account balance and add it to the given anotherAccount and return the
// updated balance, if amount is less than the balance, otherwise output “Amount
// exceeded balance.”
// It should have a static method: identifyAccounts(accountFirst, accountSecond) which
// gets two accounts and identifies if they are the same or not, comparing all fields.
// It should have toString method.

class Account {
	id = 12;
	constructor (name, balance){
		this.name = name;
		this.balance = balance;
	}
	get id(){
		return this._id;
	}
	get name(){
		return this._name;
	}
	set name(value){
		this._name = value;
	}
	get balance(){
		return this._balance;
	}
	set balance(value){
		this._balance = value;
	}
	credit(amount){
		this.balance += amount;
		return this.balance;
	}
	debit(amount){
		if (amount > this.balance){
			return 'Amount exceeded balance.'
		}
		return this.balance - amount;
	}
	transferTo(amount, anotherAccount){
		if (amount > this.balance){
			return 'Amount exceeded balance.'
		}
		this.balance =- amount;
		anotherAccount = this.balance;
		return this.balance;
	}
	identifyAccounts = (accountFirst, accountSecond) => {
		const first = JSON.stringify(accountFirst);
		const second = JSON.stringify(accountSecond);
		if (first.length === second.length){
			for(let i = 0; i < first.length; i++){
				if(first[i] !== second[i]){
					return false
				}
			}
			return true;
		}
		return false;
	}
	toString(){
		return JSON.stringify(this);
	}
}

// N5 - Write classes: Person, Student, Staff.
// Person should have: firstName, lastName, gender, age.
// It should have appropriate getters and setters.
// It should have a method: toString().
// Student is inherited from Person. It should have programs(array of strings), year, fee.
// It should have appropriate getters and setters.
// It should have method: passExam(program, grade). Student should contain the data
// about its programs and exams. passExam will update that data, so if student passed all
// the exams(grade is great or equal to 50), its year should be increased by one.
// It should have a toString method.
// Teacher is inherited from Person. It should have program(string), pay.
// It should have appropriate getters and setters.
// It should have a toString method.

class Person {
	constructor(name, surname, gender, age){
		this.name = name;
		this.surname = surname;
		this.gender = gender;
		this.age = age;
	}
	get name(){
		return this._name;
	}
	set name(value){
		this._name = value;
	}
	get surname(){
		return this._surname;
	}
	set surname(value){
		this._surname = value;
	}
	get gender(){
		return this._gender;
	}
	set gender(value){
		this._gender = value;
	}
	get age(){
		return this._age;
	}
	set age(value){
		this._age = value;
	}
	toString(){
		return JSON.stringify(this);
	}
}

class Student extends Person {
	constructor(program, year, fee){
		super();
		this.program = program;
		this.year = year;
		this.fee = fee;
	}
	get program(){
		return this._program;
	}
	set program(value){
		this._program = value;
	}
	get year(){
		return this._year;
	}
	set year(value){
		this._year = value;
	}
	get fee(){
		return this._fee;
	}
	set fee(value){
		this._fee = value;
	}
}

class Teacher extends Person {

}