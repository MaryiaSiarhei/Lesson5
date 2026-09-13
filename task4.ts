// Написать функцию, которая проверяет - подходит ли пароль, переданный параметром, под заданные требования:
// Пароль должен содержать как минимум одну заглавную букву и цифру
// Пароль только из латинских букв
// Длина пароля должна быть не менее 10 символов
const validationPassword = (password: string): boolean => {
  //if (password.length < 10) {
  //  return false;
  //}
  //if (!/[A-Z]/g.test(password)) return false;
  //if (!/0-9/g.test(password)) return false;
  if (/^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{10,}$/g.test(password)) return true;
  return false;
};
console.log(validationPassword("sometesT1"));
