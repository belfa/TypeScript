function Person()
{
  this.dni = '';
  this.firstName = '';
  this.lastName = '';
  this.age = 0;
}
Person.prototype.init = function (dni, firstName, lastName, age){
  this.dni = dni;
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
};

Person.prototype.getHTMLInfo = function(){
  var info = '';
  info +='<p><strong>DNI: </strong>'+this.dni+'</p>';
  info +='<p><strong>NOMBRE: </strong>'+this.firstName+'</p>';
  info +='<p><strong>APELLIDOS: </strong>'+this.lastName+'</p>';
  info +='<p><strong>EDAD: </strong>'+this.age+'</p>';
  return info;
};
