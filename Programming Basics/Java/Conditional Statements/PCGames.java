package com.company;

import java.util.Scanner;

public class PCGames {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int count = Integer.parseInt(scanner.nextLine());
        int HearthstoneCount = 0;
        double HearthstonePercent = 0;
        int ForniteCount = 0;
        double FornitePercent = 0;
        int OverwatchCount = 0;
        double OverwatchPercent = 0;
        int OthersCount = 0;
        double OthersPercent = 0;

        for ( int i = 0; i < count; i++) {
            String newGame = scanner.nextLine();
            if(newGame.equals("Hearthstone")) {
                HearthstoneCount++;
            }else if(newGame.equals("Fornite")) {
                ForniteCount++;
            }else if(newGame.equals("Overwatch")) {
                OverwatchCount++;
            }else {
                OthersCount++;
            }
        }
        HearthstonePercent = 100 / count * HearthstoneCount;
        FornitePercent = 100 / count * ForniteCount;
        OverwatchPercent = 100 / count * OverwatchCount;
        OthersPercent = 100 / count * OthersCount;
        System.out.printf("Hearthstone - %.2f" + "%%\n", HearthstonePercent);
        System.out.printf("Fornite - %.2f" + "%%\n", FornitePercent);
        System.out.printf("Overwatch - %.2f" + "%%\n", OverwatchPercent);
        System.out.printf("Others - %.2f" + "%%\n", OthersPercent);
    }
}
