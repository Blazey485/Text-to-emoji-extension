console.log("test 1 check check if text to emoji working");

document.addEventListener("keydown", (event) => {
	if (event.key !== " " && event.key !== "Enter") {
		return;
	}

	const element = event.target;

	if (
		element.tagName === "INPUT" ||
		element.tagName === "TEXTAREA"
	) {
		setTimeout(() => {
			let currentText = element.value;
			let cursorPosition = element.selectionStart;

			let textBeforeCursor = currentText.substring(
				0,
				cursorPosition,
			);
			let textAfterCursor =
				currentText.substring(cursorPosition);

			let words = textBeforeCursor.split(/(\s+)/);
			if (words.length === 0) return;

			let lastWordIndex = words.length - 1;
			let lastWord = words[lastWordIndex];

			let cleanWord = lastWord.trim();
			if (!cleanWord) {
				if (words.length >= 3) {
					lastWordIndex = words.length - 3;
					cleanWord = words[lastWordIndex].trim();
					lastWord = words[lastWordIndex];
				} else {
					return;
				}
			}

			let replacedWord = cleanWord;
			let matched = false;

			for (let shortcut in emojiDictionary) {
				if (
					cleanWord.toLowerCase() === shortcut.toLowerCase()
				) {
					replacedWord = emojiDictionary[shortcut];
					matched = true;
					break;
				}
			}

			if (!matched) {
				for (let shortcut in shortcutDictionary) {
					if (
						cleanWord.toLowerCase() ===
						shortcut.toLowerCase()
					) {
						replacedWord = shortcutDictionary[shortcut];
						matched = true;
						break;
					}
				}
			}

			if (matched) {
				words[lastWordIndex] = lastWord.replace(
					new RegExp(safeRegexEscape(cleanWord), "i"),
					replacedWord,
				);
				let newTextBeforeCursor = words.join("");

				element.value =
					newTextBeforeCursor + textAfterCursor;

				let newCursorPosition = newTextBeforeCursor.length;
				element.setSelectionRange(
					newCursorPosition,
					newCursorPosition,
				);

				element.dispatchEvent(
					new Event("input", { bubbles: true }),
				);
			}
		}, 0);
	} else if (element.isContentEditable) {
		setTimeout(() => {
			let selection = window.getSelection();
			if (!selection.rangeCount) return;

			let range = selection.getRangeAt(0);
			let textNode = range.startContainer;

			if (textNode.nodeType !== Node.TEXT_NODE) return;

			let currentText = textNode.nodeValue;
			let cursorPosition = range.startOffset;

			let textBeforeCursor = currentText.substring(
				0,
				cursorPosition,
			);
			let textAfterCursor =
				currentText.substring(cursorPosition);

			let words = textBeforeCursor.split(/(\s+)/);
			if (words.length === 0) return;

			let lastWordIndex = words.length - 1;
			let lastWord = words[lastWordIndex];

			let cleanWord = lastWord.trim();
			if (!cleanWord) {
				if (words.length >= 3) {
					lastWordIndex = words.length - 3;
					cleanWord = words[lastWordIndex].trim();
					lastWord = words[lastWordIndex];
				} else {
					return;
				}
			}

			let replacedWord = cleanWord;
			let matched = false;

			for (let shortcut in emojiDictionary) {
				if (
					cleanWord.toLowerCase() === shortcut.toLowerCase()
				) {
					replacedWord = emojiDictionary[shortcut];
					matched = true;
					break;
				}
			}

			if (!matched) {
				for (let shortcut in shortcutDictionary) {
					if (
						cleanWord.toLowerCase() ===
						shortcut.toLowerCase()
					) {
						replacedWord = shortcutDictionary[shortcut];
						matched = true;
						break;
					}
				}
			}

			if (matched) {
				words[lastWordIndex] = lastWord.replace(
					new RegExp(safeRegexEscape(cleanWord), "i"),
					replacedWord,
				);
				let newTextBeforeCursor = words.join("");

				textNode.nodeValue =
					newTextBeforeCursor + textAfterCursor;

				let newRange = document.createRange();
				newRange.setStart(
					textNode,
					newTextBeforeCursor.length,
				);
				newRange.collapse(true);
				selection.removeAllRanges();
				selection.addRange(newRange);

				element.dispatchEvent(
					new Event("input", { bubbles: true }),
				);
			}
		}, 0);
	}
});

function safeRegexEscape(str) {
	return str.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
}

//! This one is for Emojis, if u wanna add new emojies add it on top of others, and remember to follow the format as the others. so u gotta do  => ":name:":"emoji",  for words shortcut scroll down.
//! Emojis Dictionary
const emojiDictionary = {
	":rofl:": "🤣",
	":joy:": "😂",
	":sob:": "😭",
	":cry:": "😢",
	":smile:": "😄",
	":grin:": "😁",
	":laughing:": "😆",
	":sweat_smile:": "😅",
	":clown_face:": "🤡",
	":wink:": "😉",
	":heart_eyes:": "😍",
	":star_struck:": "🤩",
	":smirk:": "😏",
	":pensive:": "😔",
	":confused:": "😕",
	":grimacing:": "😬",
	":neutral_face:": "😐",
	":expressionless:": "😑",
	":yawning_face:": "🥱",
	":sleeping:": "😴",
	":drooling_face:": "🤤",
	":thinking:": "🤔",
	":shrug:": "🤷",
	":face_palm:": "🤦",
	":zipper_mouth_face:": "🤐",
	":lying_face:": "🤥",
	":nerd_face:": "🤓",
	":sunglasses:": "😎",
	":cowboy_hat_face:": "🤠",
	":partying_face:": "🥳",
	":scream:": "😱",
	":rage:": "😡",
	":face_with_symbols_over_mouth:": "🤬",
	":nauseated_face:": "🤢",
	":face_vomiting:": "🤮",
	":exploding_head:": "🤯",
	":blush:": "😊",
	":pleading_face:": "🥺",

	":thumbsup:": "👍",
	":thumbsdown:": "👎",
	":fist:": "👊",
	":v:": "✌️",
	":wave:": "👋",
	":pray:": "🙏",
	":clap:": "👏",
	":muscle:": "💪",
	":eyes:": "👀",

	":heart:": "❤️",
	":broken_heart:": "💔",
	":black_heart:": "🖤",
	":sparkles:": "✨",
	":hundred:": "💯",
	":boom:": "💥",

	":cat:": "🐱",
	":dog:": "🐶",
	":goat:": "🐐",
	":alien:": "👽",
	":ghost:": "👻",
	":robot:": "🤖",
	":poop:": "💩",

	":sunny:": "☀️",
	":crescent_moon:": "🌙",
	":cloud_rain:": "🌧️",
	":ice_cube:": "🧊",

	":tada:": "🎉",
	":trophy:": "🏆",
	":gift:": "🎁",
	":money_with_wings:": "💸",
	":hourglass_flowing_sand:": "⏳",

	":warning:": "⚠️",
	":no_entry:": "🚫",
	":white_check_mark:": "✅",
	":x:": "❌",
};

//! so here its pretty simple. u write the short cut then a single following it. and remember comma at the end so the loop doesnt stop at the start.
//! Shortcuts Dictionary
const shortcutDictionary = {
	tbh: "to be honest",
	idk: "I don't know",
	imo: "in my opinion",
	imho: "in my humble opinion",
	brb: "be right back",
	smh: "shaking my head",
	lol: "laughing out loud",
	lmao: "laughing my ass off",
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
	wdym: "what do you mean",
	ofc: "of course",
	omg: "oh my god",
	gtg: "got to go",
	cya: "see you",
	nvm: "nevermind",
	ikr: "I know right",
	rn: "right now",
	gg: "good game",
	gl: "good luck",
	hf: "have fun",
	hbu: "how about you",
	wfh: "work from home",
	ootd: "outfit of the day",
	tbt: "throwback Thursday",

	gonna: " going to",

	imma: " I am going to",
	fr: "for real",
	frfr: "for real for real",
	nocap: "no lie",
	cap: "lie",
	bet: "okay",
	sus: "suspicious",
	bussin: "really good",
	fin: "about to",
	lowkey: "kind of",
	highkey: "very",
	vibe: "feeling",
	vibing: "relaxing",
	slay: "doing great",
	ate: "did well",
	atethat: "you nailed it",
	rizz: "charisma",
	mid: "average",
	fire: "really good",
	drip: "style",
	ghost: "stop replying",
	simp: "overly obsessed",
	iykyk: "if you know you know",
	fomo: "fear of missing out",
	jomo: "joy of missing out",
	tmi: "too much information",
	afk: "away from keyboard",
	dm: "direct message",
	pm: "private message",
	nsfw: "not safe for work",
	ttyl: "talk to you later",
	bff: "best friends forever",
	goat: "greatest of all time",
	ong: "on God",
	k: "okay",
	bc: "because",
	cu: "see you",
	lmk: "let me know",
	afaik: "as far as I know",
	omw: "on my way",
	idc: "I don't care",
	tfw: "that feeling when",
	mood: "relatable",
	bffr: "be for real",
	delulu: "delusional",
};
