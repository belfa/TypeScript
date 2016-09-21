function DemoOOP(){
  this.userList = null; // Lista de personas / alumnos
}

DemoOOP.prototype.init = function()
{
  var marcos;
  var carlos;

  this.userList = [];

  carlos = new Person();
  carlos.init('1','Carlos','González','23');

  marcos = new Student();
  marcos.init('2','Marcos','González','30');
  marcos.register(1);

  this.userList.push( carlos );
  this.userList.push( marcos );
};

DemoOOP.prototype.showUsers = function()
{
  var i = 0;
  var nUsers = this.userList.length;

  for(i=0; i<nUsers; i++)
  {
    document.write( this.userList[i].getHTMLInfo() );
    document.write( '<p>- - - - - - - - - - - - - - - - - -</p>');
  }
}
