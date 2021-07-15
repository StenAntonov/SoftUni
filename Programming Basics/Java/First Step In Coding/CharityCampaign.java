
import java.util.Scanner;

public class CharityCampaign{

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int days = Integer.parseInt(scanner.nextLine());
        int cooks = Integer.parseInt(scanner.nextLine());
        int cakes = Integer.parseInt(scanner.nextLine());
        int gofretes = Integer.parseInt(scanner.nextLine());
        int pancakes = Integer.parseInt(scanner.nextLine());
        double cakeIncome = cakes * 45;
        double gofretesIncome = gofretes * 5.80;
        double pancakesIncome = pancakes * 3.20;
        double incomePerDay = cooks * (cakeIncome + pancakesIncome + gofretesIncome);
        double incomeAllDays = days * incomePerDay;
        double expenses = incomeAllDays / 8;
        double incomeEnd = incomeAllDays - expenses;
        System.out.printf("%.2f", incomeEnd);
    }
}
