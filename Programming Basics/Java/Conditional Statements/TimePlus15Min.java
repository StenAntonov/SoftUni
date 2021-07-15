package com.company;

import java.util.Scanner;

public class TimePlus15Min {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int hours = Integer.parseInt(scanner.nextLine());
        int minutes = Integer.parseInt(scanner.nextLine());
        int totalMinutes = (hours * 60) + minutes;
        int totalPlus15Min = totalMinutes + 15;
        if((totalPlus15Min / 60) >= 24) {
            if((totalPlus15Min % 60) < 10 ) {
                System.out.println(((totalPlus15Min / 60) - 24) + ":0" + (totalPlus15Min % 60));
            }else {
                System.out.println(((totalPlus15Min / 60) - 24) + ":" + (totalPlus15Min % 60));
            }
        }else if((totalPlus15Min % 60) < 10 ) {
            System.out.println((totalPlus15Min / 60) + ":0" + (totalPlus15Min % 60));
        }else {
            System.out.println((totalPlus15Min / 60) + ":" + (totalPlus15Min % 60));
        }

    }
}
