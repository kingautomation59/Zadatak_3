### UPUTE ZA POKRETANJE TESTOVA

1. Otvoriti projekt u Visual studiu ili nekom drugom programu
2. Obrisati folder node_modules
3. U terminalu je potrebno pokrenuti naredbu: npm install
4. Nakon uspješne instalacije možete otvoriti test runner naredbom: npx cypress open (runner se zna otvarati malo duže cca 1-2 min kod 1. pokretanja)
5. U test runneru vidjet ćete file BonusZadatak.js klik na ime datoteke pokreće test
6. U test runneru je također moguće i mijenjanje browsera u kojem želimo da se test izvršava

*Za pokretanje testa u headless modu potrebno je upisati u terminal naredbu: npm run headTest
*Naredba za pokretanje testa u chromeu -> npm run chrome


### OBJAŠNJENJE FILEOVA KOJI SU KORIŠTENI KOD RJEŠAVANJA ZADATKA

*integration -> file u kojem se nalazi test
*cypress.json -> file u kojem se nalaze određene postavke npr. početna stranica Wikipedije
*pacakage.json -> u ovom file-u se nalaze skripte za pokretanje test u headed modu i chrome browseru

