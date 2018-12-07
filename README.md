# InGenious-project

## Introduktion

Ett projekt i kursen InGenious om användarvänlig AR <br/>

## Använding av git och hur man bidrar med kodändringar
Här kommer info om hur vi använder oss av git och Github.

### Hämta och sätt upp gitrepo (operativsystem linux/OSX)

Följ dessa steg så kommer du snart ha en färdig installation.
1.  Öppna kommandotolken
2.  Testa att köra:

    ```
    cat ~/.ssh/id_rsa.pub
    ```
    Funkar detta, hoppa över steg 3.
3.  Generera en ssh-nyckel med hjälp av detta kommando:
    ```
    ssh-keygen -t rsa -C “din mail” -b 4096
    ```

     Få ut denna nyckel genom att köra detta kommando:

    ```
    cat ~/.ssh/id_rsa.pub
    ```
4.  Kopiera HELA denna nyckel som visas i terminalen.
5.  Öppna webbläsaren och logga in på github.com
6.  Gå in på settings som finns i högra övre hörnet (klicka på din ikon)
7.  Klicka på menyvalet till vänster 'SSH and GPG keys'
8.  Klicka på 'New SSH key'
9.  Klistra in nyckeln du kopiera i steg 4. Döp med valfri titel och klicka på 'Add SSH key'.
10. Skriv i terminalen (när du är på den plats du vill spara projektet):

    ```
    git clone git@github.com:ricfri/InGenious-project.git
    ```
### Göra ändringar och bidra med kod till gitrepot (arbetsmiljö Atom)
1. Se till ha projektet öppet i Atom
2. Klicka på 'files' nere till höger.
3. Dubbelklicka och lägg till de filer du har ändrat så att det hamnar i 'Staged Changes'
4. Skriv ett 'commit message' där du skriver vad du ändrat
5. klicka på commit knappen
6. Klicka på 'push' där nere, så skickas det upp till gitrepot på github.
