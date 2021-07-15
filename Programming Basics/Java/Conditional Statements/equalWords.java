package com.company;

import java.util.Scanner;

public class equalWords {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String word1 = scanner.nextLine().toLowerCase();
        String word2 = scanner.nextLine().toLowerCase();
        if ( word1.equals(word2)) {
            System.out.println("yes");
        }else {
            System.out.println("no");
        }
    }
}
