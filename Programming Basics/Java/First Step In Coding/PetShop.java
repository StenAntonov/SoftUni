import java.util.Scanner;

public class PetShop {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int dogs = Integer.parseInt(scanner.nextLine());
        int otherAnimals = Integer.parseInt(scanner.nextLine());
        double dogFood = dogs * 2.50;
        double otherAnimalsFood = otherAnimals * 4;
        double total = dogFood + otherAnimalsFood ;
        System.out.printf("%.2f lv." , total);
    }
}
