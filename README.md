# InGenious-project

## Introduktion

Ett projekt i kursen InGenious om användarvänlig AR <br/>
Här kan du läsa om information relaterat projektets mjukvara för:

 - Gitstruktur och riktlinjer

## Gitstruktur och riktlinjer
Här kommer info om hur vi använder oss av git och Github.

### Hämta och sätt upp gitrepo

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
