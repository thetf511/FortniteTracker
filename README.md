# Fortnite-Statistik Discord-Bot

Dieser Discord-Bot ermöglicht es Benutzern, die Fortnite-Statistiken eines Spielers direkt in einem Discord-Channel abzurufen. Der Bot verwendet Discord.js und integriert den Fortnite Tracker für detaillierte Spielerstatistiken.

## Voraussetzungen

1. Node.js installieren: [Node.js](https://nodejs.org/)
2. Discord.js und dotenv installieren: `npm install discord.js dotenv`

## Konfiguration

1. Erstelle eine `.env`-Datei im gleichen Verzeichnis wie dein Bot-Code.
2. Füge deine Discord-Bot-Token in die `.env`-Datei ein:TOKEN=DEIN_DISCORD_BOT_TOKEN
## Verwendung

1. Führe den Code aus: `node bot.js`
2. Lade den Bot auf deinen Server ein.
3. Verwende den Befehl `!fortnite Spielername` im Discord-Chat, um die Fortnite-Statistiken anzuzeigen.

## Bot-Befehl

- `!fortnite Spielername`: Ruft die Fortnite-Statistiken für den angegebenen Spieler ab.

## Hinweise

- Der Bot reagiert nur auf Nachrichten, die mit `!fortnite` beginnen.
- Die Fortnite-Statistiken werden in einem Embed mit einem Link zum Fortnite Tracker präsentiert.
- Stelle sicher, dass dein Bot die erforderlichen Berechtigungen hat, um Nachrichten und Links zu senden.

**Viel Spaß mit deinem Fortnite-Statistik Discord-Bot!*
