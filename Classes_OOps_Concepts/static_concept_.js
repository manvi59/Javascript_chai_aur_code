class user {
  constructor(name, interest) {
    (this.name = name), (this.interest = interest);
  }

  static func() {
    console.log("hey Ia ma static function nobody can access me");
  }
}

const ugii = new user("manvi", "nature");
ugii.func(); // ugii.func is not a function we can't access when static function is putting
