function getAdmins(map){
  let admins = [];
  for([key, value] of map){
    if(value === 'Admin'){
      admins.push(key);
    }
  }
  return admins;
}

const usuarios = new Map();

usuarios.set('Ana', 'Admin');
usuarios.set('Jorge', 'Admin');
usuarios.set('Caio', 'Admin');
usuarios.set('Bruna', 'User');

console.log(getAdmins(usuarios));