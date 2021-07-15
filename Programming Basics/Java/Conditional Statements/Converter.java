package com.company;

import java.util.Scanner;

public class Converter {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        double number = Double.parseDouble(scanner.nextLine());
        String entMetric = scanner.nextLine();
        String outMetric = scanner.nextLine();
        if(entMetric.equals("mm")) {
        number /= 1000;
        }else if(entMetric.equals("cm")) {
            number /= 100;
        }
        if(outMetric.equals("mm")) {
            number *= 1000;
        }else if(outMetric.equals("cm")) {
            number *= 100;
        }
        System.out.printf("%.3f", number);
    }
}
