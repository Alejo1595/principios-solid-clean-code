(() => {

  // Aplicando el principio de responsabilidad única, porque hay clases que se encargar de manejar muchas cosas debido a la herencia
  // Es por eso que se debe tratar priorizar la composición frente a la herencia.

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
    email: string;
    role: string;
  }

  class User {
    public email: string;
    public role: string;
    private lastAccess: Date;

    constructor({ email, role }: UserProps) {
      this.email = email;
      this.lastAccess = new Date();;
      this.role = role;
    }

    checkCredencial(): boolean {
      return true;
    }

    get getLastAccess(): Date {
      return this.lastAccess;
    }
  }

  interface SettingProps {
    lastOpenFolder: string;
    workingDirectory: string;
  }

  class Setting {
    public lastOpenFolder: string;
    public workingDirectory: string;

    constructor({ lastOpenFolder, workingDirectory }: SettingProps) {
      this.lastOpenFolder = lastOpenFolder;
      this.workingDirectory = workingDirectory;
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

  class UserSetting {
    public person: Person;
    public user: User;
    public setting: Setting;

    constructor({ birthdate, email, gender, lastOpenFolder, name, role, workingDirectory }: UserSettingProps) {
      this.person = new Person({ birthdate, gender, name });
      this.user = new User({ email, role });
      this.setting = new Setting({ lastOpenFolder, workingDirectory });
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

  console.log(userSetting);

})();