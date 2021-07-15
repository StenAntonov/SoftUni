package com.company;

import java.util.Scanner;

public class PoolDay {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int count = Integer.parseInt(scanner.nextLine());
        double entry = Double.parseDouble(scanner.nextLine());
        double shezlongPrice = Double.parseDouble(scanner.nextLine());
        double umrellaPrice = Double.parseDouble(scanner.nextLine());
        double entryExpanses = count * entry;
        double umrellaExpanses = Math.ceil(count * 0.5) * umrellaPrice;
        double shezlongExpanses = Math.ceil(0.75 * count) * shezlongPrice;
        double totall = shezlongExpanses + umrellaExpanses + entryExpanses;
        System.out.printf("%.2f lv.", totall);
    }
}
