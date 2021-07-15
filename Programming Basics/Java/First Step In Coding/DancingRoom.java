import java.util.Scanner;

public class DancingRoom {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        double L = Double.parseDouble(scanner.nextLine());
        double W = Double.parseDouble(scanner.nextLine());
        double A = Double.parseDouble(scanner.nextLine());
        double roomArea = (L * 100) * (W * 100);
        double warderobeArea = (A *100) * (A * 100);
        double benchArea = roomArea / 10;
        double freeRoomArea = roomArea - (warderobeArea + benchArea);
        double dancers = freeRoomArea / (7000 + 40);
        System.out.printf("%.0f", Math.floor(dancers));
    }
}
