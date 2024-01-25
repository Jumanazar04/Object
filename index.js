const user = {
    name: 'Jumanazar',
    age: 20,
    location: 'Andijan',
    email: 'yusupovjumanazar004@gmail.com',
    lang: ['uzbek', 'rus', 'enlish', 'qirgiz'],
    login: function(){
        console.log('nma gap');
    },
    logout: function(){
        console.log('Bo`pti');
    },
}


user['name'] = 'Yusupov';

console.log(user.name);

user.login();
user.logout();


