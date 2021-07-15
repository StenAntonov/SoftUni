package com.company;

import java.util.Scanner;

public class GodzillaVsKong {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        double budget = Double.parseDouble(scanner.nextLine());
        int countStatists = Integer.parseInt(scanner.nextLine());
        double clothesPriceforOne = Double.parseDouble(scanner.nextLine());
        double dechorPrice = budget * 0.1;
        double clothesPrice = clothesPriceforOne * countStatists;
        if (countStatists > 150) {
            clothesPrice = (clothesPriceforOne * countStatists) * 0.9;
        }
        double totalExpenses = dechorPrice + clothesPrice;
        if ( budget >= totalExpenses) {
            System.out.printf("Action!%nWingard starts filming with %.2f leva left.", (budget - totalExpenses));
        }else {
            System.out.printf("Not enough money!%nWingard needs %.2f leva more.", Math.abs(budget - totalExpenses));
        }
    }
}
