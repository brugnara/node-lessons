/*
* Usando restify, creare un servizio che fornisca il file letto da filesystem (06-file.txt) chiamando l'url:
*
* GET /file/list.txt
*
* Il file deve essere letto solo all'avvio del programma e tenuto in memoria. Se però il file viene modificato,
* il programma deve riportare le modifiche rileggendolo, fornendo quindi a tutte le successive richieste il file
* aggiornato.
*
* */