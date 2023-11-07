package learnjava;


import java.util.Scanner;

public class Pangram {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter a sentence to check for a pangram: ");
        String input = scanner.nextLine();

        boolean[] isAlphabetPresent = new boolean[26];
        input = input.toLowerCase();

        for (int i = 0; i < input.length(); i++) {
            char c = input.charAt(i);
            if ('a' <= c && c <= 'z') {
                isAlphabetPresent[c - 'a'] = true;
            }
        }

        boolean isPangram = true;
        for (boolean isPresent : isAlphabetPresent) {
            if (!isPresent) {
                isPangram = false;
                break;
            }
        }

        if (isPangram) {
            System.out.println("The input is a pangram.");
        } else {
            System.out.println("The input is not a pangram.");
        }

        scanner.close();
    }
}
