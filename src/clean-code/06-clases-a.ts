(() => {

  // No aplicando el principio de responsabilidad única, porque hay clases que se encargar de manejar muchas cosas debido a la herencia

  type Gender = 'M' | 'F';

  class Person {
    constructor(
      public name: String,
      public gender: Gender,
      public birthdate: Date) {
      this.name = name;
      this.gender = gender;
      this.birthdate = birthdate;
    }
  }

  class User extends Person {
    private lastAccess: Date;

    constructor(
      public email: string,
      public role: string,
      public name: String,
      public gender: Gender,
      public birthdate: Date
    ) {
      super(name, gender, birthdate);
      this.lastAccess = new Date();
    }

    checkCredencial(): boolean {
      return true;
    }
  }

  class UserSetting extends User {
    constructor(
      public workingDirectory: string,
      public lastOpenFolder: string,
      public email: string,
      public role: string,
      public name: String,
      public gender: Gender,
      public birthdate: Date
    ) {
      super(email, role, name, gender, birthdate);
      this.workingDirectory = workingDirectory;
      this.lastOpenFolder = lastOpenFolder;
    }
  }

  const userSetting = new UserSetting('./', '../', 'correo@correo.com', 'Admin', 'Julian', 'M', new Date());
  console.log({ userSetting });
})();