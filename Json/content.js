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

		for (let shortcut in emojiDictionary) {
			let emoji = emojiDictionary[shortcut];
			let safeShortcut = shortcut.replace(
				/[-\/\\^$*+?.()|[\]{}]/g,
				"\\$&",
			);

			// Creates a "Whole Word Only" pattern
			let regex = new RegExp(
				"\\b" + safeShortcut + "\\b",
				"g",
			);
			newText = newText.replace(regex, emoji);
		}
		for (let shortcut in shortcutDictionary) {
			let emoji = shortcutDictionary[shortcut];
			let safeShortcut = shortcut.replace(
				/[-\/\\^$*+?.()|[\]{}]/g,
				"\\$&",
			);

			// Creates a "Whole Word Only" pattern
			let regex = new RegExp(
				"\\b" + safeShortcut + "\\b",
				"g",
			);
			newText = newText.replace(regex, emoji);
		}

		if (originalText !== newText) {
			if (richText) {
				try {
					textBox.focus();

					const range = document.createRange();
					range.selectNodeContents(textBox);

					const selection = window.getSelection();
					selection.removeAllRanges();
					selection.addRange(range);

					document.execCommand(
						"insertText",
						false,
						newText,
					);
				} catch (e) {
					console.error(
						"Rich text replacement failed: ",
						e,
					);
				}
			} else {
				let start = textBox.selectionStart;
				let end = textBox.selectionEnd;

				let lengthDifference =
					newText.length - originalText.length;

				textBox.value = newText;
				textBox.setSelectionRange(
					start + lengthDifference,
					end + lengthDifference,
				);
			}
		}
	},
	true,
);

//! Emojis Dictionary
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

//! Shortcuts Dictionary
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
