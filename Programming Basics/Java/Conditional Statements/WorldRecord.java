package com.company;

import java.util.Scanner;

public class WorldRecord {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        double worldRecTime = Double.parseDouble(scanner.nextLine());
        double distance = Double.parseDouble(scanner.nextLine());
        double timePerMeter = Double.parseDouble(scanner.nextLine());
        double waterResistance = Math.floor(distance / 15) * 12.5;
        double IvanchoTime = distance * timePerMeter + waterResistance;
        if ( worldRecTime > IvanchoTime) {
            System.out.printf("Yes, he succeeded! The new world record is %.2f seconds.", IvanchoTime);
        }else {
            System.out.printf("No, he failed! He was %.2f seconds slower.", Math.abs(worldRecTime - IvanchoTime));
        }
    }
}
