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
function try_function(){
    var re = new RegExp('llo?');

    var hello = "Helo world";

    var test = re.test(hello);

    print(test);
}

try_function();


function regex(filename){
    var re = new RegEx
}
