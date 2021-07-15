import java.util.Scanner;

public class AlcoholMarket {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        double whiskeyPrice = Double.parseDouble(scanner.nextLine());
        double quantityBeer = Double.parseDouble(scanner.nextLine());
        double quantityWine = Double.parseDouble(scanner.nextLine());
        double quantityRakiya = Double.parseDouble(scanner.nextLine());
        double quantityWhiskey = Double.parseDouble(scanner.nextLine());
        double rakiyaPrice = whiskeyPrice * 0.5;
        double winePrice = rakiyaPrice * 0.6;
        double beerPrice = rakiyaPrice * 0.2;
        double whiskeyTotal = whiskeyPrice * quantityWhiskey;
        double rakiyaTotal = rakiyaPrice * quantityRakiya;
        double wineTotal = winePrice * quantityWine;
        double beerTotal = beerPrice * quantityBeer;
        double Total = whiskeyTotal + beerTotal + rakiyaTotal + wineTotal;
        System.out.printf("%.2f", Total);
    }
}
