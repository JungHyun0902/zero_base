function FishBread(flavor, price) {
  this.flavor = flavor;
  this.price = price;
  this.base = 'flour';
}

let bread_1 = new FishBread('redBean', 500);
let bread_2 = new FishBread('pizza', 1000);
let bread_3 = new FishBread('milk', 1000);

console.log(bread_1);
console.log(bread_2);
console.log(bread_3);

function User(name) {
  if(!new.target) {
    return new User(name);
  }
  this.name = name;
}

let user1 = User('john');
let user2 = new User('jane');
console.log(user1);
console.log(user2);
