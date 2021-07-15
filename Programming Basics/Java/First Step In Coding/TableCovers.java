import java.util.Scanner;

public class TableCovers {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int count = Integer.parseInt(scanner.nextLine());
        double lenght = Double.parseDouble(scanner.nextLine());
        double widht = Double.parseDouble(scanner.nextLine());
        double carretArea = (lenght/2) * (lenght/2);
        double rectangleCover =  ((lenght + 2 * 0.30) * (widht + 2 * 0.3));
        double rectangleCoversPrice = (count * rectangleCover) * 7;
        double carretPrice = (count * carretArea) * 9;
        double priceUSD = rectangleCoversPrice + carretPrice;
        double priceBGN = priceUSD * 1.85;
        System.out.printf("%.2f USD%n%.2f BGN", priceUSD, priceBGN);
    }
}
