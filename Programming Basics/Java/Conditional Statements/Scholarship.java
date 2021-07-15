package com.company;

import java.util.Scanner;

public class Scholarship {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        double monthlyIncome = Double.parseDouble(scanner.nextLine());
        double avgGrade = Double.parseDouble(scanner.nextLine());
        double minimumWage= Double.parseDouble(scanner.nextLine());
        double socialScholarshipRight = 0;
        double gradeScholarshipRight = 0;
        if(monthlyIncome < minimumWage && avgGrade >= 4.5 ) {
            socialScholarshipRight = 0.35 * minimumWage;
        }
        if (avgGrade >= 5.5) {
            gradeScholarshipRight = avgGrade * 25;
        }
        if (socialScholarshipRight > gradeScholarshipRight) {
            System.out.printf("You get a Social scholarship %.0f BGN", socialScholarshipRight);
        }else if(gradeScholarshipRight >= socialScholarshipRight & gradeScholarshipRight != 0 || socialScholarshipRight != 0) {
            System.out.printf("You get a scholarship for excellent results %.0f BGN", gradeScholarshipRight);
        }else {
            System.out.println("You cannot get a scholarship!");
        }
    }
}