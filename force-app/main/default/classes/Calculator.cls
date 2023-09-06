public class Calculator {
    public static void add(){
        Integer number1 = 10,number2 = 15;
        Integer sum = number1 + number2;
        System.debug('Addtion of numbers is::'+sum);
    }
    
    public static void sub(){
        Integer num1 = 25, num2 = 15;
        Integer sub = num1 - num2;
        System.debug('Substraction of number is::'+sub);
    }
    
    public static void multiply(){
        Integer num1 = 25, num2 = 15;
        Integer mul = num1 * num2;
        System.debug('Multiplication of number is::'+mul);
    }
    
    public static void division(){
        Integer num1 = 25, num2 = 15;
        Integer div = num1 / num2;
        System.debug('Division of number is::'+div);
    }
    
}