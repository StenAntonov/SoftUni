package com.company;

import java.util.Scanner;

public class Renovation {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int wallHeight = Integer.parseInt(scanner.nextLine());
        int wallWidth = Integer.parseInt(scanner.nextLine());
        int percentNotToPaint = Integer.parseInt(scanner.nextLine());
        String command = scanner.nextLine();
        int area = wallHeight * wallWidth * 4;
        double areaForPainting = Math.ceil(area - (area * percentNotToPaint / 100));

        while (!command.equals("Tired!")) {
            int paintLitters = Integer.parseInt(command);
            areaForPainting -= paintLitters;
            paintLitters -= paintLitters;
            if(areaForPainting < 0) {
                System.out.printf("All walls are painted and you have %.0f l paint left!", Math.abs(areaForPainting));
                break;
            }else if(areaForPainting == 0 && paintLitters == 0) {
                System.out.println("All walls are painted! Great job, Pesho!");
                break;
            }
            command = scanner.nextLine();
            if(command.equals("Tired!")) {
                System.out.printf("%.0f quadratic m left.", areaForPainting);
                break;
        }
        }
    }
}
