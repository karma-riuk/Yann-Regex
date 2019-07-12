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
theFile.rename("coucou.pdf") // if theFile is a File

theFile = "coucou.pdf" // maybe it can work, idk

/*
 * Final code (in function of what the test gave)
 */

new RegExp('\\d{1,3}([- ])([iI]([abAB])|[iI]?[vV]|[iI]{0,3})([- ])\\d*')).test(theFile) // if theFile is a String

