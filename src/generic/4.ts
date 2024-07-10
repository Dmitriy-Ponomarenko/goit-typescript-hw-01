type User = {
    name: string;
    surname: string;
    email: string;
    password: string;
  };
  
  let currentUser: User = {
    name: "",
    surname: "",
    email: "",
    password: "",
  };
  
  function createOrUpdateUser(initialValues: Partial<User>): User {
    currentUser = { ...currentUser, ...initialValues };
    return currentUser;
  }
  
  createOrUpdateUser({
    email: "user@mail.com",
    password: "password123",
  });
  
  export {};