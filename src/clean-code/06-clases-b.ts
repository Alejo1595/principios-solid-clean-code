(() => {

  // No aplicando el principio de responsabilidad única, porque hay clases que se encargar de manejar muchas cosas debido a la herencia

  type Gender = 'M' | 'F';

  interface PersonProps {
    birthdate: Date;
    gender: Gender;
    name: String;
  }

  class Person {
    public birthdate: Date;
    public gender: Gender;
    public name: String;

    constructor({ birthdate, gender, name }: PersonProps) {
      this.name = name;
      this.gender = gender;
      this.birthdate = birthdate;
    }
  }

  interface UserProps {
    birthdate: Date;
    email: string;
    gender: Gender;
    name: string;
    role: string;
  }

  class User extends Person {
    private lastAccess: Date;
    public email: string;
    public role: string;

    constructor({ birthdate, email, gender, name, role }: UserProps) {
      super({ birthdate, gender, name });
      this.email = email;
      this.lastAccess = new Date();
      this.role = role;
    }

    checkCredencial(): boolean {
      return true;
    }

    getLastAccess(): Date {
      return this.lastAccess;
    }
  }

  interface UserSettingProps {
    birthdate: Date;
    email: string;
    gender: Gender;
    lastOpenFolder: string;
    name: string;
    role: string;
    workingDirectory: string;
  }

  class UserSetting extends User {
    public lastOpenFolder: string;
    public workingDirectory: string;

    constructor({ birthdate, email, gender, lastOpenFolder, name, role, workingDirectory }: UserSettingProps) {
      super({ email, role, name, gender, birthdate })
      this.lastOpenFolder = lastOpenFolder;
      this.workingDirectory = workingDirectory;
    }
  }

  const userSetting = new UserSetting({
    birthdate: new Date(),
    email: '',
    gender: 'M',
    lastOpenFolder: '',
    name: '',
    role: '',
    workingDirectory: '',
  });

  console.log({ userSetting });
})();