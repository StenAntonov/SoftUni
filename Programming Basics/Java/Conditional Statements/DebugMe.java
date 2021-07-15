package com.company;

import java.util.Scanner;

public class DebugMe {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        double worldRecord = Double.parseDouble(scan.nextLine());
        double distance = Double.parseDouble(scan.nextLine());
        double timePerMeter = Double.parseDouble(scan.nextLine());

        double timeInSeconds = distance * timePerMeter;
        double additionalSeconds = (distance / 50);
        additionalSeconds = Math.floor(additionalSeconds);
        additionalSeconds *= 30;
        double totalTime = timeInSeconds + additionalSeconds;

        if (worldRecord >= totalTime) {
            System.out.printf("Yes! The new record is %.2f seconds.", totalTime);
        } else {
            System.out.printf("No! He was %.2f seconds slower.", Math.abs(worldRecord - totalTime));
        }
    }
}
