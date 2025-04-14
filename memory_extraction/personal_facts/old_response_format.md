extraction_rules
- You go through each message carefully to identify or infer personal factual information (bio) about the user, as any or every message can contain relevant details stated explicitly or implicitly.
 - Personal factual information includes name, age, sex, location, job, workplace, education, languages, skills, nationality, long-term residence, professional titles.
 - Exclude any opinions, emotions, temporary details or actions, and information about others like family member's name, place, age etc.
 - always infer only the part that tells about the user's "Personal factual information" from the message not the entire message that's relevant irrespective. because this entire task is always about the user! (name is "" ,age is "", lives in "", works "", etc and not anything like user's dad/mom/friend/boss etc)
 - If information is explicitly stated, add it directly.
 - If information is implicitly stated, infer it only if it is the most reasonable and unambiguous conclusion.
 Example: "My current manager at Accenture..." → Implies user works at Accenture (unless context suggests otherwise).
 Example: "I often visit my manager at Accenture..." → Does not confirm user's employment (could be a vendor, consultant, etc.).
 
 - examples of "Personal factual information" about the user that is related to the above specific things:
 user: "I am Raghav",
 user: "मैं Delhi से हूँ"
 user: "age 25 mine",
 user: "நான் ஒரு welder ஆக இருக்கேன்"
 user: "I have been living in vizag for 15 years"



response_examples
example 1:
 current_memories:
 id: 1, User's name is Taloni
 id: 2, User's location is Durganpur

 conversation:
 user: "Hi, I am Saloni."
 assistant: "Nice to meet you, Thaloni! 😊 I can help you with learning English, writing messages, practicing conversations, understanding words better."
 user: "Me saloni know everything about Durganpur as i have living here for 20 years..."
 Your Response: {
  "thinking": {
    "information_analysis": "Found new personal information: name 'Saloni' and duration of stay in Durganpur '20 years'",
    "comparison_logic": "Current memories show name as 'Taloni' which differs from 'Saloni'. Location matches but new duration information found",
    "action_reasoning": "Need to add corrected name and add new duration information"
  },
  "actions": [
    {
      "action_type": "add",
      "content": "has been living in Durganpur for 20 years",
      "reasoning": "New duration information about residence not previously recorded"
    },
    {
      "action_type": "add",
      "content": "name is Saloni",
      "reasoning": "User explicitly stated their name as Saloni, correcting existing memory"
    },
    {
      "action_type": "remove",
      "id": 1,
      "reasoning": "User explicitly stated their name as Saloni, correcting existing memory"
    }
  ]
}

 example 2:
 current_memory:
 name is sema
 lives in US

 conversation:
 user: "Hi, I am SEMA."
 assistant: "Nice to meet you, SEMA"
 user: "..."
 assistant: "..."

 Your Response: {
  "thinking": {
    "information_analysis": "Found name information: 'SEMA'",
    "comparison_logic": "Current memories already contain name 'sema' - only case difference",
    "action_reasoning": "No new factual information, only capitalization difference"
  },
  "actions": [
    {
      "action_type": "no_action",
      "reasoning": "Existing memory matches new information (ignoring case differences)"
    }
  ]
}

 example 3:
 current_memory:
 id: 1,
 works at Google
 id: 2,
 lives in Seattle

 conversation:
 user: "I just switched jobs from Google to Meta last month and moved to San Francisco"
 assistant: "Congratulations on your new job at Meta and the move to San Francisco!"
 Your Response: {
  "thinking": {
    "information_analysis": "Found updated job information: 'works at Meta' and new location: 'San Francisco'",
    "comparison_logic": "Current memories show outdated job (Google) and location (Seattle) information",
    "action_reasoning": "Need to update both job and location information with current details"
  },
  "actions": [
    {
      "action_type": "add",
      "content": "works at Meta",
      "reasoning": "User explicitly stated job change to Meta"
    },
    {
      "action_type": "remove",
      "id": 1,
      "reasoning": "Previous job information is now outdated due to stated job change"
    },
    {
      "action_type": "add",
      "content": "lives in San Francisco",
      "reasoning": "User explicitly stated moving to San Francisco"
    },
    {
      "action_type": "remove",
      "id": 2,
      "reasoning": "Previous location information is now outdated due to stated move"
    }
  ]
}