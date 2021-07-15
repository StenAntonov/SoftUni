package com.company;

import java.util.Scanner;

public class Shopping {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        double budget = Double.parseDouble(scanner.nextLine());
        int videoCards = Integer.parseInt(scanner.nextLine());
        int processors = Integer.parseInt(scanner.nextLine());
        int ram = Integer.parseInt(scanner.nextLine());
        double videoCardsPrice = videoCards * 250;
        double processorsPrice = 0.35 * videoCardsPrice * processors;
        double ramPrice = 0.10 * videoCardsPrice * ram;
        double totall = videoCardsPrice + processorsPrice + ramPrice;
        if(videoCards > processors) {
            totall *= 0.85;
        }
        if(budget >= totall) {
            System.out.printf("You have %.2f leva left!", budget - totall);
        }else {
            System.out.printf("Not enough money! You need %.2f leva more!", totall - budget);
        }
    }
}
