function newUser(name, age, country) {
    var name = name || 'Adhemar';
    var age = age || '35';
    var country = country || 'Italy';

    console.log(name, age, country);
}

newUser();
newUser('Daniela', '20', 'Ecuador');

//New way
function newAdmin(name = 'Jeremias', age = '15', country = 'CL') {
    console.log(name, age, country);
}

newAdmin();
newAdmin('Maria', '28', 'PE');