class LoginService {
    static loginIn = false;
    static logIn(value) {
        return this.loginIn = value;
    }
    static isLoggedIn() {
        return this.loginIn;
    }
}
export default LoginService;

