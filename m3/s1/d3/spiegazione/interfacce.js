/*
Il type system è di tipo strutturale (Structural type system).
Il compiler quando fa il controllo / la comparazione dei tipi di dato si basa sulla struttura / forma.

*/
function inviaMessaggio(msg) {
    mailSender.sendTo(msg.email, msg.messaggio);
}
