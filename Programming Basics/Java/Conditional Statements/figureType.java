package com.company;

import java.util.Scanner;

public class figureType {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String type = scanner.nextLine();
        double area = 0;
        switch (type) {
            case "square": {
                double a = Double.parseDouble(scanner.nextLine());
                area = a * a;

                break;
            }
            case "rectangle": {
                double a = Double.parseDouble(scanner.nextLine());
                double b = Double.parseDouble(scanner.nextLine());
                area = a * b;

                break;
            }
            case "circle": {
                double a = Double.parseDouble(scanner.nextLine());
                area = Math.PI * a * a;

                break;
            }
            case "triangle": {
                double a = Double.parseDouble(scanner.nextLine());
                double b = Double.parseDouble(scanner.nextLine());
                area = (a * b) / 2;
                break;

            }
        }
        System.out.printf("%.3f", area);
    }
}