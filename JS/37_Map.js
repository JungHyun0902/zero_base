let map = new Map();

map.set('name', 'jude');
map.set(777, 0);
map.set('boolType', true);

console.log(map); // Map(3) { 'name' => 'jude', 777 => 0, 'boolType' => true }
console.log(map.get('name')); // jude
console.log(map.get(777)); // 0
console.log(map.get('boolType')); // true
console.log(map.size); // 3

map.delete('boolType'); // 'boolType' 삭제
console.log(map); // Map(2) { 'name' => 'jude', 777 => 0 }
map.clear(); // 모두 삭제 
console.log(map); // Map(0) {}

map.set('gender', 'male').set('age', 34).set('name', 'jude'); // set chaining
console.log(map); // Map(3) { 'gender' => 'male', 'age' => 34, 'name' => 'jude' }

// Map <-> Object 간 변화 
let recipe_juice = new Map([
  ['strawberry', 150],
  ['banana', 100],
  ['ice', 120],
]);

console.log(recipe_juice);

for(let items of recipe_juice.keys()) {
  console.log(items);
}
for(let amount of recipe_juice.values()) {
  console.log(amount);
}
for(let entity of recipe_juice) {
  console.log(entity);
}

recipe_juice_obj = Object.fromEntries(recipe_juice);
recipe_juice_kv = Object.entries(recipe_juice_obj);
recipe_juice_map = new Map(recipe_juice_kv);

console.log(recipe_juice_obj); // { strawberry: 150, banana: 100, ice: 120 }
console.log(recipe_juice_kv); // [ [ 'strawberry', 150 ], [ 'banana', 100 ], [ 'ice', 120 ] ]
console.log(recipe_juice_map); // Map(3) { 'strawberry' => 150, 'banana' => 100, 'ice' => 120 }

