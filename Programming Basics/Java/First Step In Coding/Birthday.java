import java.util.Scanner;

public class Birthday {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int lenght = Integer.parseInt(scanner.nextLine());
        int widht = Integer.parseInt(scanner.nextLine());
        int height = Integer.parseInt(scanner.nextLine());
        double percent = Double.parseDouble(scanner.nextLine());
        int obem = lenght * widht * height;
        double litters = obem * 0.001;
        double pureWater = litters * (1 - percent/100);
        System.out.printf("%.3f", pureWater);
    }
}
