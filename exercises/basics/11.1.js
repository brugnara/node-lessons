/* Creare un file di log con script 11.0.js salvandolo in un file.
 Il file conterrà 50mila righe. Ogni riga darà informazioni casuali su un ipotetico dispositivo.

Obbiettivo:

Dalla lettura delle righe del file, si dovranno preparare degli script di ripristino.
I messaggi con INFO e LOG possiamo ignorarli.
i WARN richiedono un reboot del device (preparare quindi uno script che verrà eseguito dal SERVER, chiamato server_repair_IPDEVICE.sh)). Tali script dovranno contenere: echo 'Sto riavviando il dispositivo' > ~/WARN. Niente di più
DANGER richiedono assistenza, va quindi preparato un file 'richiesta_sostituzione.txt', contenente gli ip.
ERROR richiedono la preparazione di uno script bash, chiamato 'client_repair_IPDEVICE.sh'. Lo script, deve contenere:
  'echo 'device da controllare' > ~/ERROR

Consigli: usare espressioni regolari per estrarre gli IP ed il messaggio di errore.
Comporre gli script come preferito, l'importante è tener presente che l'esercizio 12 consisterà nell'eseguire
tali script.


*/
