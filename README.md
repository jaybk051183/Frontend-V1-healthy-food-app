# Deelopdracht 4. Installatiehandleiding

"Mijn gezonde eetgids", designed by Kailash Bhaggoe

## Inleiding

Mijn gezonde eetgids, zoals de naam het al aanduidt, is een gids voor mensen die het dagelijks lastig vinden om te zoeken naar de juiste voeding die een gezonde lifestyle ondersteunen. De applicatie dient mensen met overgewicht en een ongezonde leefpatroon bewuster te maken van de opties in voeding

![homepage](https://user-images.githubusercontent.com/98492016/200947788-c72baf2c-7173-4034-b62d-080c74533859.png)

## Applicatie starten

1. Open Webstorm of je eigen editor naar keuze en navigeer naar je terminal.
2. Zorg ervoor dat je een versie van Node.js heb geinstalleerd die hoger is dan 14. Dit kun je checken met de commando ```node -v```
3. Kies in WebStorm voor 'Nieuw project', en selecteer vervolgens een 'React Project'. Wanneer je jouw project een naam hebt gegeven, zal de installatiebeginnen. Gebruik je een andere editor? Voer het volgende commando handmatig in, in de Command Prompt of Terminal:

```
npx create-react-app <naam-van-jouw-app>
```
4. Clone het project van Github naar jouw locale machine en installeer de `node_modules` door het volgende commando in de terminal te runnen:

```
npm install
```

Wanneer dit klaar is, kun je de applicatie starten met behulp van:

```
npm start
```
of gebruik de WebStorm knop (npm start). Open [http://localhost:3000](http://localhost:3000/) om de pagina in de browser te bekijken.
5. Het installeren van het project kan een paar minuten in beslag nemen. Als je de melding
   happy hacking! krijgt te zien, is het goed gegaan.
6. Tenslotte is er gebruikt gemaakt van de NOVI Educational Backend (https://github.com/hogeschoolnovi/novi-educational-backend-documentation) en de volgende APIs en API keys zijn gebruikt voor het runnen van de applicatie:

```
https://www.edamam.com/ met API_ID= "b04454ec" & APP_KEY = "e03c1ff77a588dc048a805ab3d6f4239"
 ```

```
https://spoonacular.com/ met API_KEY = "078f9200662d4e819dc26b9c312f6156"
```

## Stappenplan

De onderstaand stappenplan kun je volgen voor het runnen van de applicatie:

1. Je dient je eerst te registreren voordat je kunt inloggen. 
2. Voor het registreren is een username, email en wachtwoord vereist. Belangrijk om te weten is dat je account na een uur vervalt. Dat betekent dat je je opnieuw dient te registreren indien een uur is verstreken!
3. Na het registreren kun je inloggen met je username en wachtwoord.
4. Voor het correct runnen van de applicatie dienen nog de volgende npm packages geinstalleerd te worden middels de onderstaande commando's:

```
npm install react-hook-form
```

```
npm install react-router-dom@5.2.0
```

```
npm install axios
```

```
npm install jwt-decode
```

```
npm install uuid
```

```
npm install react-icons
```

5.De applicatie zou nu prima moeten runnen. Geniet nog van de lekkere maaltijden!

Met vriendelijke groet,

Kailash Bhaggoe
