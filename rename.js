/*
 * TODO:
 *      - Change all the filenames to uppercase (besides "a" and "b")
 *      - Replace "-" to " "
 *
 * XXX: - Le nombre de chiffres AVANT les lettres est FIX ou VARIABLE?
 *      Answer: VARIABLE (de 1 a 3)
 *
 *      - Le nombre de chiffres APRÈS les lettres est FIX ou VARIABLE?
 *      Answer: VARIABLE (de 1 a infty)
 *
 *      - Le nombre de lettres au milieu est FIX ou VARIABLE?
 *      Answer: VARIABLE (from 1 to 3)
 *
 *      Les lettres qui peuvent etre presente sont: "A B I V"
 *
 *      - Les lettres aux milieu: toutes majuscules? seulement certaines? les
 *      "a" et "b" doivent rester en minuscule seuelement si ils sont à la
 *      fin (càd que si il y a des "a" ou "b" au milieu des lettres, elles
 *      vont uppercase ou elle reste lower)?
 *      Answer:
 *
 *      - Il est possible que dans le dossier il y ait d'autres fichiers que
 *      l'on veut pas modifier (il faut check les fichiers avant de les rename
 *      ou pas)?
 *      Answer: Just check (maj too).
 */

/*
 * TEST AREA
 */

//theFile.rename("coucou.pdf") // if theFile is a File

//theFile = "coucou.pdf" // maybe it can work, idk

/*
 * Final code (in function of what the test gave)
 */






function rename(theFile){
    var re  = new RegExp('(\\d{1,3})([- ])([iI][abAB]|[iI]?[vV]|[iI]{0,3})([- ])(\\d*)'); //initialize the regex

    var matches = theFile.match(re); // get the groups of the regex given the filename, [0] is the match itself, form 1 till the end are the groups


    var newFile = matches[1]; //the new filename that will always start with the first group (the first 1-3 numbers)

    newFile += " "; // there will always be a space after the first group, as aksed

    var reAB = /[abAB]/;

    var current = matches[3];

    if (reAB.test(current)) 
        newFile += "I" + current.match(reAB)[0].toLowerCase();// if there is a [abAB], it can only start with an I (as said buy the employer)
    else
        newFile += current.toUpperCase(); // since there is no [abAB], it must go uppercase as it is

    newFile += " " + matches[5]; // always end with with last numbers, since they don't have to be modified :)

    return newFile;
}


//var theFile = "109-IA 1"; // mock filename
var theFile = ["144-iii-344", "132-i-11", "110-ib-351", "109-ia-1"]; // mock filename

for (var name in theFile){
    print("Input:  "+ theFile[name]);
    print("Output: "+ rename(theFile[name]));
    print()
}







