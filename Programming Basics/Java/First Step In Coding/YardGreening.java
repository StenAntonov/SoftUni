import java.util.Scanner;

public class YardGreening {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        double squareMeters = Double.parseDouble(scanner.nextLine());
        double price = squareMeters * 7.61;
        double discount = price * 0.18;
        double total = price - discount;
        System.out.printf("The final price is: %.2f lv.%nThe discount is: %.2f lv.", total, discount);
    }
}
