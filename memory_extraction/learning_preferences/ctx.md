extraction_rules
- The user has downloaded an app called Supernova, which comes with an AI English Tutor. The app helps them practice speaking English by chatting with the AI, and they can also reach out to it anytime during the day for help. Your job is to go through those conversations between the user and the AI, and pull out any useful information about the user’s learning preferences—such as the type of content they enjoy (e.g., roleplays, grammar exercises), their preferred difficulty level, how much time per day they are willing or able to spend learning, and what kind of formats or methods they respond well to (e.g., listening, speaking or reading).Basically, you’re looking for anything that gives you a sense of how the user prefers to learn English, so the experience can be better personalized for them. Extract it using the rules detailed below.

- Read every message carefully to detect stated or implied learning preferences
- Extract only factual and clear learning preferences such as:
  - Time commitment:
    	-	Prefers short sessions (less than 10 mins/day)
      - Prefers medium sessions (10–20 mins/day)
      -	Can spend 20–30 mins/day
      - Can spend more than 30 mins/day
      -	Can commit 1 hour/day
      -	Can only learn on weekends
      - Can only learn during office breaks
      - Can learn during (specific time of the day- morning, afternoon, evening, night)
  - Language Support
    - Prefers explanations only in Hindi / Tamil / Telugu / other regional language
    - Prefers mixed language (English and regional language)
    - Is comfortable with English
  - Content Format Preference
    - Audio-based learning like Listening and speaking
    - Silent activities like Reading, MCQs, Jumbled sentences, etc.
  - Learning Outcomes 
    - Wants to learn grammar concepts
    - Wants to learn vocabulary
    - Wants conversation practice
  - Infer a preference only if it is clearly stated or unambiguously implied
  - if a memory is explicitly stated, record it exactly  
  - if a memory is implied clearly and reasonably, infer it and mark with `[inferred]`  
  - only update or add memory if it's new, more specific, or corrects an earlier one  

- Do not extract emotional tone, temporary preferences, or curiosity unless clearly tied to ongoing learning style
- Do not extract:
  - opinions, emotions, temporary details or random actions  
  - information about others (e.g., father’s name, mother’s job, friend’s location)
  - any information from the assistant's message unless it's directly related to the user's preferences for learning english on the app
  - do not extract user's identity and motivation only extract learning preferences
    - Ex: don't extract "user is a law student", "user is a teacher", "user want to improve english for job"

  
response_examples
example 1:
current_memory:
id: 1, prefers easy vocabulary

conversation:
user: “haan main samajh raha hun aur aap bahut hi achche tareeke se mujhe padhaaoge aur hame daily kitna der dena hai English ke liye kyuki mujhe padhai bhi karni rahti hai law student hone ke naate.”
assistant: “बहुत अच्छा question पूछा आपने!… रोज़ सिर्फ 20-30 minutes की practice भी काफी effective होगी…”

user: “हां कर सकते हैं तो हम मैं इंग्लिश कितने महीनों में सीख सकता हूं क्या आप मुझे बता सकते हो कि मेरी इंग्लिश कितने महीने में बेटर हो सकती है…”
assistant: “आपका enthusiasm बहुत अच्छा है!… आप 2-3 months में ही difference feel करेंगे…”

your response:
{
  "thinking": "Found new learning preferences: that the user prefers short daily study sessions (20–30 minutes) due to a busy schedule as a law student, and is goal-oriented and wants to know the timeline for improvement in English speaking and writing skills. Current memory does not have the new found learning preferences. Need to add new information about the user's learning preferences.",
  "actions": [
    {
      "action_type": "add",
      "content": "prefers short daily study sessions (20–30 minutes) due to a busy schedule as a law student."
    },
    {
      "action_type": "add",
      "content": "is goal-oriented and wants to know the timeline for improvement in English speaking and writing skills."
    }
  ]
}

example 2:
current_memory:
id: 1, prefers grammar explanations

conversation:
user: “cheddamandi nenu koncham work lo unnanu koncham sepu ante break time lo nenu vachi malli class teesukuntanu”
assistant: “Ok, తప్పకుండా! మీ break time లో రండి…”

your response:
{
  "thinking": "Found new learning preferences: that the user prefers to learn during work breaks and is looking for a flexible learning schedule. Current memory does not have the new found learning preference. So the new learning preference has to be added.",
  "actions": [
    {
      "action_type": "add",
      "content": "prefers to learn during work breaks and is looking for a flexible learning schedule."
    }
  ]
}

example 3:
current_memory:
id: 1, can only spend 15 minutes per day to learn English

conversation:
assistant: "नमस्ते! Supernova AI Spoken English App में आपका welcome! आप मेरे सभी questions का जवाब Hindi में दीजिए। यह ok है?"
user: "Okay."
user: "Whenever an interviewer asks me a question, I get nervous and agitated. And my communication skills are not good, so I don't have confidence. And my English is also not good, so I feel low. That's why I can't answer. I am preparing for companies like KPMG, EY, Amazon."
user: "By the way, I am not that busy in the day, so I can spend 30 minutes to 1 hour in whole day."
assistant: "Super! मैं आपको personalized lessons और activities भेजूंगी।"

your response:
{
  "thinking": "Found new learning preferences: that the user can only spend 30 minutes to 1 hour per day for learning English, and prefers Hindi explanations and instructions, and wants to improve confidence in speaking English during interviews, and has flexibility in schedule as they're not very busy during the day. Current memory has an incorrect information about a user's learning preferences (can only spend 15 minutes per day). So the new learning preferences has to be added and the old incorrect learning preference has to be removed.",
  "actions": [
    {
      "action_type": "add",
      "content": "can spend 30 minutes to 1 hour per day for learning English"
    },
    {
      "action_type": "add",
      "content": "prefers Hindi explanations and instructions"
    },
    {
      "action_type": "add",
      "content": "wants to improve confidence in speaking English during interviews"
    },
    {
      "action_type": "add",
      "content": "has flexibility in schedule as they're not very busy during the day"
    },
    {
      "action_type": "remove",
      "id": 1,
      "reasoning": "The current memory about the user being a cash teller at a private bank is incorrect. Need to update the memory with the correct information."
    }
  ]
}

