let user = {name: 'john'};
let admin = {name: 'admin'};

function hello_func() {
  console.log('hello ' + this.name);
}
user.func = hello_func;
admin.func = hello_func;

user.func();
admin.func();

user['func']();
admin['func']();