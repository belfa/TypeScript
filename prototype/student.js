function Student()
{
  this.course = 0;
  this.subjectList = null;
}
//Creamos la extensión
Student.prototype = new Person();             // heredamos de la clase Persona
Student.prototype.constructor = Student;      // corregimos el constructor de Student
Student.prototype.parent = Person.prototype;  // damos acceso al padre mediante la propiedad parent

//Añadimos métodos a los heredados de la clase padre
Student.prototype.register = function(course)
{
  this.course = course;

  switch (course)
  {
        case 1: this.subjectList = ['A', 'B', 'C'];break;
        case 2: this.subjectList = ['D', 'E', 'F', 'G'];break;
        case 3: this.subjectList = ['H', 'I', 'J'];break;
  }
};

// Sobreescribimos un método existente en el padre
Student.prototype.getHTMLInfo = function(){
  var info = this.parent.getHTMLInfo.call(this); // Llamada a la versión del padre

  if (this.course !== 0)
  {
    info += '<p><strong>CURSO: </strong>'+this.course+'</p>';
    info += '<p><strong>ASIGNATURAS: </strong>'+this.subjectList.join('-')+'</p>';
  }
  else
  {
      info += '<p>No está matriculado.</p>';
  }
  return info;
};
