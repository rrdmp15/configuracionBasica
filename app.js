import fs from 'fs';

process.stdin.setEncoding('utf8');

let userData = {
  users: []
};

let estadoActual = 'name';

console.log('Ingrese su nombre: ');

process.stdin.on('data', (input) => {
  const value = input.trim();

  if (estadoActual === 'name') {
    userData.users.push({ name: value });
    console.log('Ingrese su edad: ');
    estadoActual = 'age';
  } else if (estadoActual === 'age') {
    userData.users[0].age = value;
    console.log('Ingrese su email: ');
    estadoActual = 'email';
  } else if (estadoActual === 'email') {
    userData.users[0].email = value;

    fs.writeFile('informacion/data.json', JSON.stringify(userData), 'utf-8', (error) => {
      if (error) {
        console.log(error);
      } else {
        console.log('Guardado :)');
      }
    });
  }
});

process.stdin.on('end', () => {
  process.exit();
});