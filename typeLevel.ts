interface User {
  id: number;
  name: string;
  email: string;
  isAdmin: boolean;
}

// Omit 'email' and 'isAdmin'
type UserWithoutSensitiveInfo = Omit<User, 'email' | 'isAdmin'>;

const user1: UserWithoutSensitiveInfo = {
  id: 2,
  name: "Bob"
  // email and isAdmin are removed
};
console.log(" -- Omit -- ");
console.log(user1);

// Pick 'name' and 'email'
type UserWithSensitiveInfo = Pick<User, 'name' | 'email'>;

const user2: UserWithSensitiveInfo = {
  name: "John",
  email: "johnsmith@gmail.com"
  // name and email are picked
};

console.log(" -- Pick -- ");
console.log(user2);