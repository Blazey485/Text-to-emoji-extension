console.log("test 1 check check if text to emoji working");

window.addEventListener(
	"input",
	function (event) {
		let textBox = event.target;

		let richText = textBox.isContentEditable;

		let originalText = richText
			? textBox.innerText
			: textBox.value;

		if (!originalText) return;
		let newText = originalText;

		//* replacing happens here.
		for (let shortcut in emojiDictionary) {
			let emoji = emojiDictionary[shortcut];
			newText = newText.replaceAll(shortcut, emoji);
		}
		//* replacing happens here.
		for (let shortcut in shortcutDictionary) {
			let emoji = shortcutDictionary[shortcut];
			newText = newText.replaceAll(shortcut, emoji);
		}

		if (originalText !== newText) {
			if (richText) {
				textBox.innerText = newText;

				let range = document.createRange();
				let sel = window.getSelection();
				range.selectNodeContents(textBox);
				range.collapse(false);
				sel.removeAllRanges();
				sel.addRange(range);
				let event = new Event("input", { bubbles: true });
				textBox.dispatchEvent(event);
			} else {
				let start = textBox.selectionStart;
				let end = textBox.selectionEnd;

				textBox.value = newText;

				textBox.setSelectionRange(start, end);
			}
		}
	},
	true,
);

//! This one is for Emojis, if u wanna add new emojies add it on top of others, and remember to follow the format as the others. so u gotta do  => ":name:":"emoji",  for words shortcut scroll down.

const emojiDictionary = {
	":rofl:": "🤣",
	":sob:": "😭",
	":smile:": "😄",
	":laughing:": "😆",
	":clown:": "🤡",
	":wink:": "😉",
	":heart_eyes:": "😍",
	":star_eyes:": "🤩",
	":smirk:": "😏",
	":pensive:": "😔",
	":grimacing:": "😬",
	":expressionless:": "😑",
	":bored:": "🥱",
	":sleeping:": "😴",
	":drool:": "🤤",
	":thinking:": "🤔",
	":shrug:": "🤷",
	":facepalm:": "🤦",
	":zipped_mouth:": "🤐",
	":lying:": "🤥",
	":nerd:": "🤓",
	":sunglasses:": "😎",
	":cowboy:": "🤠",
	":partying:": "🥳",
	":scared:": "😱",
	":rage:": "😡",
	":cursing:": "🤬",
	":sick:": "🤢",
	":vomit:": "🤮",
	":exploding:": "🤯",
	":blushing:": "😊",
	":pleading:": "🥺",
	":thumbsup:": "👍",
	":thumbsdown:": "👎",
	":fist:": "👊",
	":v_sign:": "✌️",
	":wave:": "👋",
	":pray:": "🙏",
	":clap:": "👏",
	":muscle:": "💪",
	":eyes:": "👀",
	":heart:": "❤️",
	":broken_heart:": "💔",
	":black_heart:": "🖤",
	":sparkles:": "✨",
	":100:": "💯",
	":collision:": "💥",
	":cat:": "🐱",
	":dog:": "🐶",
	":goat:": "🐐",
	":alien:": "👽",
	":ghost:": "👻",
	":robot:": "🤖",
	":poop:": "💩",
	":sun:": "☀️",
	":moon:": "🌙",
	":cloud_rain:": "🌧️",
	":ice:": "🧊",
	":party_popper:": "🎉",
	":trophy:": "🏆",
	":gift:": "🎁",
	":money:": "💸",
	":hourglass:": "⏳",
	":warning:": "⚠️",
	":forbidden:": "🚫",
	":check:": "✅",
	":cross:": "❌",
};

//! so here its pretty simple. u write the short cut then a single following it. and remember comma at the end so the loop doesnt stop at the start.
const shortcutDictionary = {
	tbh: "to be honest",
	idk: "I don't know",
	imo: "in my opinion",
	imho: "in my humble opinion",
	brb: "be right back",
	smh: "shaking my head",
	lol: "laughing out loud",
	lmao: "laughing myao",
	rofl: "rolling on the floor laughing",
	btw: "by the way",
	fyi: "for your information",
	asap: "as soon as possible",
	tgif: "thank God it's Friday",
	irl: "in real life",
	diy: "do it yourself",
	jk: "just kidding",
	np: "no problem",
	thx: "thanks",
	pls: "please",
	srsly: "seriously",
	wdym: "what do you mean? 🤔",
	ofc: "of course! ✅",
	omg: "oh my god! 😱",
	gtg: "got to go! 🏃",
	cya: "see ya! 👋",
	nvm: "nevermind 🤷",
	ikr: "I know, right? 🤝",
	rn: "right now ⏰",
	gg: "good game 🎮",
	gl: "good luck 🍀",
	hf: "have fun 🎉",
	hbu: "how about you? ❓",
	wfh: "work from home 🏡",
	ootd: "outfit of the day 👗",
	tbt: "throwback Thursday 📅",
};
