import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);
        String sentence = s.nextLine();
        String letter = s.nextLine();
        System.out.println(check(sentence, letter));
    }

    static String check(String sentence, String letter) {
        // For non-sensitive case
        sentence = sentence.toLowerCase();
        letter = letter.toLowerCase();
        //

        int index = sentence.indexOf(letter);
        return index < 0 ?  "The letter doesn't exist in the sentence" : sentence.substring(index + 1);
    }
}
