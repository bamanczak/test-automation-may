# Pesel

Projekt został wygenerowany przy użyciu [Angular CLI](https://github.com/angular/angular-cli).

## Warunki wstępne do uruchomienia aplikacji
- Zainstaluj [NodeJS](https://nodejs.org/en/)
- Zainstaluj Angualar CLI `npm install -g @angular/cli`

## Lokalny serwer developerski
Wykonaj `npm install` aby zainstalować potrzebne biblioteki
Wykonaj `ng serve` aby uruchomić aplikację lokalną.
Otwórz `http://localhost:4200/`. Aplikacja automatycznie się odświeży po zmianie plików.
Możesz też wykonać komendę `ng serve --open` aby aplikacja otworzyła się automatycznie w oknie przeglądarki

## Build

Komenda `ng build` buduje projekt. Artefakty build'u przechowywane są w `dist/`. Flaga `--prod` powinna być wykorzystana aby wykonać build produkcyjny.

## Uruchomienie lintera

Uruchom `ng lint` aby uruchomić linter TypeScriptu [TSLint](https://palantir.github.io/tslint/)

## Uruchomienie testów jednostkowych

Uruchom `ng test` aby wykonać testy jednostkowe z wykorzystaniem [Karma](https://karma-runner.github.io).
Kod testów jednostkowych znajduje się w `/src/app/app.component.spec.ts`.

## Uruchomienie testów end-to-end

Uruchom `ng e2e` aby wykonać testy end to end z wykorzystaniem [Protractor](http://www.protractortest.org/).
Kod testów e2e znajduje się w `/e2e/src/app.e2e-spec.ts`

## Zadanie 1 - setup
- [ ] Stwórz forka repozytorium
- [ ] Sklonuj sforkowane repozytorium (pracujemy na swoich repozytoriach)
- [ ] Uruchom aplikację lokalnie

## Zadanie 2 - naprawa testów
- [ ] Uruchom linter
- [ ] Napraw wszystkie błędy lintera (plik `/src/app/app.component.ts` )
- [ ] Uruchom testy jednostkowe
- [ ] Napraw testy jednostkowe
- [ ] Uruchom testy End-to-End
- [ ] Napraw test End-to-End

## Zadanie 3 - rozszerzenie unit testów
- [ ] Uruchom testy jednostkowe z flagą --code-coverage
- [ ] Zweryfikuj raport html pokrycia kodu w pliku .coverage\pesel\index.html
dopisz przypadki testowe, które zwiększa pokrycie - zignoruj przypadki dla funkcji onSubmit()

## Zadanie 4 - Konfiguracja pipeline'u CI
- [ ] Zaloguj się w [TravisCI](https://travis-ci.org/) z wykorzystaniem swojego GithubID
- [ ] Jeśli już masz konto, zastosuj "sync account"
- [ ] Uruchom CI dla repozytorium PESEL
- [ ] Utwórz nowy plik .travis.yml
- [ ] W pliku dodaj wstępną konfigurację CI

~~~
language: node_js
node_js:
  - "10"
dist: trusty
sudo: required
addons:
  chrome: stable
branches:
  only:
  - master
before_script:
  - npm install -g @angular/cli
script:
- ng build --prod --base-href https://bamanczak.github.io/pesel/
~~~
- [ ] `git commit` oraz `git push` - sprawdź czy Travis uruchomił Build
- [ ] rozszerz konfigurację CI o linter oraz testy jednostkowe, sprawdź czy wszystko działa na serwerze CI
- [ ] rozszerz konfigurację CI o testy e2e

## Zadanie 5 - Konfiguracja deploymentu
- [ ] w pliku z konfiguracją travisa dodaj

~~~
deploy:
  provider: pages
  skip_cleanup: true
  github_token: $GITHUB_TOKEN
  local_dir: dist/pesel
  on:
    branch: master
~~~
- [ ] [Wygeneruj Token dla Githuba](https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line)
- [ ] Dodaj token jako zmienną środowiskową w konfiguracji Builda w travisie: otwórz projekt w Travisie, kliknij prawym przyciskiem na "More options: Settings". Znajdź sekcję "Environment Variables", dodaj tam wygenerowany przed chwilą token z nazwą GITHUB_TOKEN (lub inną, zmień wtedy konfigurację .travis.yml)
- [ ] `git commit` oraz `git push` - sprawdź czy Travis uruchomił Build
- [ ] Wejdź w ustawienia swojego repozytorium, włącz GitHub Pages (wybierz branch gh-pages)

 ## Zadanie 6 - Udowodnienie, że całość działa
- [ ] W swoim repozytorium stwórz dodatkowy branch `valid`
- [ ] Wprowadź nieistotną zmianę na branchu `valid`
- [ ] `git commit` oraz `git push`
- [ ] stwórz Pull Request z `valid` do `master`
- [ ] W swoim repozytorium stwórz dodatkowy branch `invalid`
- [ ] Wprowadź na branchu `invalid` zmianę, która spowoduje, że któryś z testów nie przejdzie u
- [ ] `git commit` oraz `git push`
- [ ] stwórz Pull Request z `invalid` do `master`

 ## Zadanie *
- [ ] Co najmniej 1 rodzaj nieprawidłowego numeru PESEL jest oznaczany przez walidator jako prawidłowy. Jesteś w stanie go znaleźć?
- [ ] Jesteś w stanie go naprawić?
