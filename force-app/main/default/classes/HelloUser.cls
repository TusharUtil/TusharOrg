public class HelloUser {
    public static void userName(String name){
        system.debug('Hello User'+name);
    }
    
    public static void div(Integer a,Integer b){
        Integer div = a/b;
        system.debug('division::::'+div);
    }
    
    public static void logIn(String usernameInput,String passwordInput){
        String name = 'Tushar';
        String name2 = 'Tushar';
        String username = 'Khorgadetushar015@gmail.com';
        String password = 'survi@12';
        System.debug(name == name2);
        if(username == usernameInput && password == passwordInput ){
            system.debug('Yes You are LoggedIn');
        }else{
            system.debug('No its Not,Please Enter Correct Credentials');
        }
    }
}