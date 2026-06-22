![alt text](./screenshot_progress/wikipedia_console.png)
so i added manifest.json where i have basic stuff then i added a content js to check if my extension is running on other websites. click on image.png to view the console from wikipedia. Uh this is the reason why u can see my console message on wikipedia website

"content_scripts": [
{
"matches": ["<all_urls>"],
"js": ["content.js"]
}
]
ok så nå checker jeg for inputs. og hver gang jeg skriver noe nytt på en nettside så logger jeg you wrote; ....
![alt text](./screenshot_progress/image.png)

ok så nå det funke jeg skrive :sob: det komme. bra bra
![alt text](./screenshot_progress/sob_working.png)
