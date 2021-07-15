package com.company;

import java.util.Scanner;

public class DegreeCheck {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        double ocenka = Double.parseDouble(scanner.nextLine());
        if (ocenka >= 5.50) {
            System.out.println("Excellent!");
        }
    }
}
