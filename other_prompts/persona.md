async function getSystemUserPersonaVars(user: User) {
	const { persona } = user;

	if (!persona) {
		return {
			SYSTEM_USER_PERSONA: "No specific English learning level assigned yet",
		};
	}

	// Special cases that should return no persona
	const specialCases = [
		"spoken_english_adult_app_only",
		"teacherops",
		"Duplicate",
		"free",
		"Refunded",
	];

	if (specialCases.includes(persona)) {
		return {
			SYSTEM_USER_PERSONA: "No persona information available",
		};
	}

	// Check if it's a kid persona
	if (KID_PERSONAS.includes(persona as (typeof KID_PERSONAS)[number])) {
		const kidPersonaDescriptions: Record<
			(typeof KID_PERSONAS)[number],
			string
		> = {
			"spoken-english-kids-level-g-0":
				"The user is at the very beginning level - just starting their English adventure",
			"spoken-english-kids-level-g-1":
				"The user is at beginner level - learning basic English words and phrases",
			"spoken-english-kids-level-g-2-beginner":
				"The user is at early elementary level - starting to form simple sentences",
			"spoken-english-kids-level-g-2":
				"The user is at elementary level - building sentence formation skills",
			"spoken-english-kids-level-g-2-o":
				"The user is at elementary level - building sentence formation skills",
			"spoken-english-kids-level-g-3":
				"The user is at intermediate level - developing storytelling and conversation skills",
			"spoken-english-kids-level-g-4":
				"The user is at advanced level - mastering complex conversations and expressions",
		};

		const personaText =
			kidPersonaDescriptions[persona as (typeof KID_PERSONAS)[number]] ||
			"The user is learning English at their grade level";

		return {
			SYSTEM_USER_PERSONA: personaText,
		};
	}

	// Check if it's an adult persona (both UAC and level personas)
	if (ADULT_PERSONAS.includes(persona as (typeof ADULT_PERSONAS)[number])) {
		// Map both UAC and level personas to similar descriptions
		const adultPersonaDescriptions: Record<
			(typeof ADULT_PERSONAS)[number],
			string
		> = {
			// Level personas
			"spoken-english-adult-mentor":
				"The user is at mentor level - helping others learn English",
			"spoken-english-adults-level-0":
				"The user is at beginner level - just starting their English learning journey",
			"spoken-english-adults-level-1":
				"The user is at intermediate level - building basic conversational skills",
			"spoken-english-adults-level-2":
				"The user is at advanced level - developing everyday communication abilities",
			"spoken-english-adults-level-A0":
				"The user is at beginner level - just starting their English learning journey",
			"spoken-english-adults-level-A1":
				"The user is at intermediate level - building basic conversational skills",
			"spoken-english-adults-level-A2":
				"The user is at advanced level - developing everyday communication abilities",
			"spoken-english-adults-level-A3":
				"The user is at proficient learner level - comfortable with most daily conversations",

			// UAC personas mapped to similar levels
			"spoken-english-adults-uac":
				"No persona information available",
			"spoken-english-adults-uac-1":
				"No persona information available",
			"spoken-english-adults-uac-2":
				"No persona information available",
			"spoken-english-adults-uac-3":
				"No persona information available",
		};

		const personaText =
			adultPersonaDescriptions[persona as (typeof ADULT_PERSONAS)[number]] ||
			"The user is learning English at an adult level";

		return {
			SYSTEM_USER_PERSONA: personaText,
		};
	}

	return {
		SYSTEM_USER_PERSONA: "No persona information available",
	};
}