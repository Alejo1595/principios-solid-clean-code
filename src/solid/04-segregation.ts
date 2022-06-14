(() => {

  interface Bird {
    eat(): void;
  }

  interface FlyningBird {
    fly(): void;
  }

  interface GroundBird {
    run(): void;
  }

  interface SwimmingBirds {
    swim(): void;
  }

  class Tucan implements Bird, FlyningBird {
    public fly(): void { }
    public eat(): void { }
  }

  class Penguin implements Bird, SwimmingBirds {
    public eat(): void { }
    public swim(): void { }
  }

  class Ostrich implements Bird, GroundBird {
    public eat(): void { }
    public run(): void { }
  }

})();