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
    speak: function (){
        console.log('I can speak:');
        this.lang.forEach((langs) => {
            console.log(langs);
        })
    }
}


user['name'] = 'Yusupov';

console.log(user.name);

user.login();
user.logout();
user.speak()


