package com.company;

import java.util.Scanner;

public class SumSecunds {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int a = Integer.parseInt(scanner.nextLine());
        int b = Integer.parseInt(scanner.nextLine());
        int c = Integer.parseInt(scanner.nextLine());

        int totalSec = a + b + c;
        if (totalSec % 60 < 10) {
            System.out.printf("%d:0%d", (totalSec / 60), (totalSec % 60));
        } else {
            System.out.printf("%d:%d", (totalSec / 60), (totalSec % 60));
        }
    }
}
