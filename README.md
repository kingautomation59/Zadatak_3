### UPUTE ZA POKRETANJE TESTOVA

1. Otvoriti projekt u Visual studiu ili nekom drugom programu
2. U terminalu je potrebno pokrenuti naredbu: npm install cypress --save-dev
3. Nakon uspješne instalacije možete otvoriti test runner naredbom: npx cypress open (runner se zna otvarati malo duže cca 1-2 min kod 1. pokretanja)
4. U test runneru vidjet ćete file BonusZadatak.js klik na ime datoteke pokreće test
5. U test runneru je također moguće i mijenjanje browsera u kojem želimo da se test izvršava

Za pokretanje testa u headless modu potrebno je upisati u terminal naredbu: npm run headTest
npm run chrome -> naredba za pokretanje testa u chromeu


### OBJAŠNJENJE FILEOVA KOJI SU KORIŠTENI KOD RJEŠAVANJA ZADATKA

integration -> file u kojem se nalazi test
cypress.json -> file u kojem se nalaze određene postavke npr. početna stranica Wikipedije
pacakage.json -> u ovom file-u se nalaze skripte za pokretanje test u headed modu i chrome browseru

