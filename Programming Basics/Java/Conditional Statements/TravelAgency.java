package com.company;

import java.util.Scanner;

public class TravelAgency {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String town = scanner.nextLine();
        String paketType = scanner.nextLine();
        String vip = scanner.nextLine();
        int days = Integer.parseInt(scanner.nextLine());
        boolean invalidInput = false;
        double price = 0.0;

        if (!town.equals("Bansko") && !town.equals("Borovets") &&
                !town.equals("Varna") && !town.equals("Burgas")) {
            System.out.println("Invalid input!");
            invalidInput = true;
        }

        if (!paketType.equals("noEquipment") && !paketType.equals("withEquipment") &&
                !paketType.equals("noBreakfast") && !paketType.equals("withBreakfast")) {
            System.out.println("Invalid input!");
            invalidInput = true;
        }

        if (days < 1) {
            System.out.println("Days must be positive number!");
            invalidInput = true;
        }

        if (days > 7) {
            days--;
        }

        if (!invalidInput) {
            if (town.equals("Bansko") || town.equals("Borovets")) {
                if (paketType.equals("noEquipment")) {
                    if (vip.equals("yes")) {
                        price = days * 80 * 0.95;
                    } else {
                        price = days * 80;
                    }
                } else if (paketType.equals("withEquipment")) {
                    if (vip.equals("yes")) {
                        price = days * 100 * 0.90;
                    } else {
                        price = days * 100;
                    }
                }
                System.out.printf("The price is %.2flv! Have a nice time!", price);
            } else if (town.equals("Varna") || town.equals("Burgas")) {
                if (paketType.equals("noBreakfast")) {
                    if (vip.equals("yes")) {
                        price = days * 100 * 0.93;
                    } else {
                        price = days * 100;
                    }
                } else if (paketType.equals("withBreakfast")) {
                    if (vip.equals("yes")) {
                        price = days * 130 * 0.88;
                    } else {
                        price = days * 130;
                    }
                }
                System.out.printf("The price is %.2flv! Have a nice time!", price);
            }

        }

    }
}
