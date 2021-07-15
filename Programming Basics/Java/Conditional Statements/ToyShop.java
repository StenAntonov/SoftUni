package com.company;

import java.util.Scanner;

public class ToyShop {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        double excursionPrice = Double.parseDouble(scanner.nextLine());
        int puzzles = Integer.parseInt(scanner.nextLine());
        int dolls = Integer.parseInt(scanner.nextLine());
        int teddyBears = Integer.parseInt(scanner.nextLine());
        int minions = Integer.parseInt(scanner.nextLine());
        int trucks = Integer.parseInt(scanner.nextLine());
        double puzzlePrice = 2.60;
        double dollsPrice = 3;
        double teddysPrice = 4.10;
        double minionPrice = 8.20;
        double truckPrice = 2;
        double puzzleIncome = puzzles * puzzlePrice;
        double dollsIncome = dolls * dollsPrice;
        double teddyBearsIncome = teddyBears * teddysPrice;
        double minionsIncome = minions * minionPrice;
        double trucksIncome = trucks * truckPrice;
        double totalIncome = puzzleIncome + dollsIncome + teddyBearsIncome + minionsIncome + trucksIncome;
        double orders = puzzles + dolls + teddyBears + minions + trucks;
        if (orders >= 50) {
            totalIncome = (totalIncome * 0.75) * 0.9;
            if (totalIncome >= excursionPrice) {
                System.out.printf("Yes! %.2f lv left.", (totalIncome - excursionPrice));
            }else {
                System.out.printf("Not enough money! %.2f lv needed.", Math.abs(totalIncome - excursionPrice));
            }
        }else if (totalIncome >= excursionPrice) {
            System.out.printf("Yes! %.2f lv left.", ((totalIncome * 0.9) - excursionPrice));
        }else {
            System.out.printf("Not enough money! %.2f lv needed.", Math.abs((totalIncome * 0.9) - excursionPrice));
        }

    }
}
