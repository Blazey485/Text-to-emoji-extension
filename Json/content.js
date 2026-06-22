console.log("test 1 check check if text to emoji working");

document.addEventListener("keydown", (event) => {
	if (event.key !== " " && event.key !== "Enter") {
		return;
	}

	const element = event.target;

	if (
		element.tagName === "INPUT" ||
		element.tagName === "TEXTAREA" ||
		element.isContentEditable
	) {
		setTimeout(() => {
			let isInput = element.value !== undefined;
			let currentText = isInput
				? element.value
				: element.innerText;
			let newText = currentText;

			let originalSelectionStart = isInput
				? element.selectionStart
				: null;

			for (let shortcut in emojiDictionary) {
				let emoji = emojiDictionary[shortcut];
				let safeShortcut = shortcut.replace(
					/[-\/\\^$*+?.()|[\]{}]/g,
					"\\$&",
				);
				let regex = new RegExp(
					"(?<![a-zA-Z])" + safeShortcut + "(?![a-zA-Z])",
					"gi",
				);
				newText = newText.replace(regex, emoji);
			}

			for (let shortcut in shortcutDictionary) {
				let fullForm = shortcutDictionary[shortcut];
				let safeShortcut = shortcut.replace(
					/[-\/\\^$*+?.()|[\]{}]/g,
					"\\$&",
				);
				let regex = new RegExp(
					"(?<![a-zA-Z])" + safeShortcut + "(?![a-zA-Z])",
					"gi",
				);
				newText = newText.replace(regex, fullForm);
			}

			if (currentText !== newText) {
				if (isInput) {
					element.value = newText;

					let lengthDifference =
						newText.length - currentText.length;
					let newSelectionPosition =
						originalSelectionStart + lengthDifference;

					element.setSelectionRange(
						newSelectionPosition,
						newSelectionPosition,
					);
				} else {
					element.innerText = newText;
				}

				element.dispatchEvent(
					new Event("input", { bubbles: true }),
				);
			}
		}, 0);
	}
});

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
