extraction_rules
- Here is the context of the extraction: the user has downloaded an app called Supernova, which comes with an AI English Tutor. The app helps them practice speaking English by chatting with the AI, and they can also reach out to it anytime during the day for help. Your job is to go through those conversations between the user and the AI, and pull out any useful info—like their name, age, where they’re from, or what’s driving them to learn English. Maybe it’s for work, school, travel, or just personal growth. Basically, you’re looking for anything that gives you a sense of who the user is and why they’re using the app, extract it using the rules detailed below.


- go through each user message carefully of this conversation carefully
— any message may contain relevant identity information and motivation facts, either explicitly or implicitly.
- extract identity and motivation to learn english on the app only related to the user. 
- valid identity information include:
  - Name  
  - Age / Life Stage
  - Sex  
  - Education / Occupation Status  
  - Field of Study / Industry  
  - Location 
  - Language Known 
  - Technology Comfort  
- valid motivation information include:
  - Career & Job
  - Academic Goals
  - Parent-related (Help kids with studies)
  - Confidence / Social
  - Communication
  - Migration / Global Access
  - Personal Growth / Hobbies


- do not extract:
  - opinions, emotions, temporary details or random actions  
  - information about others (e.g., father’s name, mother’s job, friend’s location)
  - any information from the assistant's message unless it's directly related to the user's identity and motivation for learning english on the app


- if a memory is explicitly stated, record it exactly  
- if a memory is implied clearly and reasonably, infer it and mark with `[inferred]`  
- only update or add memory if it's new, more specific, or corrects an earlier one

response_examples
example 1:
current_memory:
id: 1, name is Sachin Rathod 

conversation:
user: “mujhe English bolna seekhna hai, kyunki High Court aur Supreme Court mein English hi chalti hai. To mera jo education hai, vo ab tak BA mein hua hai, Bachelor of Art…”
user: “main LLB first year ka student hoon.”
assistant: “Wonderful! एक law student!…”
user: “mujhe English bolna seekhna hai, kyunki High Court aur Supreme Court mein English hi chalti hai. To mera jo education hai, vo ab tak BA mein hua hai, Bachelor of Art…”
assistant: “आपका goal बिल्कुल clear है और बहुत important भी है!…”
user: “Lagta to hai ki 100% main ek achha English bol sakta hun… kyunki AI bahut fast hai.”
assistant: “Perfect! जो हमने अभी तक बात की है…”

your response:
{
  "thinking": "Found new identity information: that the user is an LLB first-year student and completed a Bachelor of Arts degree before pursuing law, new motivation facts: to learn English because legal proceedings in the High Court and Supreme Court are conducted in English. Current memory already has the user's name. Need to add new information about the user's education and motivation.",
  "actions": [
    {
      "action_type": "add",
      "content": "is an LLB first-year student"
    },
    {
      "action_type": "add",
      "content": "completed a Bachelor of Arts degree before pursuing law"
    },
    {
      "action_type": "add",
      "content": " wants to learn English because legal proceedings in the High Court and Supreme Court are conducted in English"
    },
    {
      "action_type": "add",
      "content": "is motivated to use AI tools for fast and effective English learning"
    }
  ]
}

example 2:
current_memory:
id: 1, wants to become fluent in English speaking and improve grammar to confidently speak in front of others 

conversation:
assistant: “ज़रूर! मैं आपकी English में help करूंगी…”
user: “मुझे English बोलने में दिक्कत आती है, grammar में problem आती है, और मैं अच्छे से लोग के सामने अच्छे से English में fluently बात नहीं कर पाता हूं…”  

your response:
{
  "thinking": "The user has mentioned their motivation to become fluent in English speaking and improve grammar to confidently speak in front of others. This motivation is already in memory. No new or more specific information is found, so no action is needed.",
  "actions": [
    {
      "action_type": "no_action"
    }
  ]
}

example 3:
current_memory:
id 1: is a cash teller at a private bank

conversation:
assistant: “చాలా బాగుంది! మీరు స్కూల్ స్టూడెంటా, కాలేజ్ స్టూడెంటా, హౌస్‌వైఫా, ఉద్యోగం చేస్తున్నారా, బిజినెస్ ఓనరా లేదా జాబ్ సీకరా?”
user: “Actually, I am working as a private employee. I wanted to learn English…”
assistant: “అద్భుతం! మీ కంపెనీ పేరు ఏమిటి?”
user: “Actually, I’m a private employee. I work for a bank…”
assistant: “గుడ్! కంపెనీలో మీ పాత్ర ఏమిటి?”
user: “Actually, I am a sales officer…”
assistant: “పర్వాలేదు! మీరు ఏ సిటీ నుండి వచ్చారు?”
user: “Karim Nagar”
assistant: “గుడ్! కంపెనీలో మీ పాత్ర ఏమిటి?”
user: “Actually, I am a sales officer, so when I go to a customer, I learn how to speak in English… I want to learn through your app.”
assistant: “అలాగే! మీరు ఎక్కువగా ఎవరితో ఇంగ్లీషులో communicate చేస్తారు?”
user: “We talk a lot with our customers. We also receive mails from the company every day… My English is not very good. I asked them if they could help me.”
assistant: “అద్భుతం! మీరు పనిలో communicate చేసే వ్యక్తులతో regularly discuss చేసే 5 common topics share చేయగలరా?”
user: “We talk to our customers in English… I have to explain these things to my boss. I have to send him an email. I am not able to send him an email. That is why I asked for your help.”

your response:
{
  "thinking": "Found new identity information: that the user is a sales officer at a private bank and from Karim Nagar, new motivation facts: to improve English because they struggle with understanding and replying to emails from the company and communicating with customers, and to explain customer issues to their boss and write professional emails. The current memory about the user being a cash teller at a private bank is incorrect. Need to update the memory with the correct information. And add new identity and motivation information.",
  "actions": [
    {
      "action_type": "add",
      "content": "is a sales officer at a private bank"
    },
    {
      "action_type": "add",
      "content": "is from Karim Nagar"
    },
    {
      "action_type": "add",
      "content": "wants to improve English because they struggle with understanding and responding to company emails and communicating with customers"
    },
    {
      "action_type": "add",
      "content": "wants to improve English to explain customer issues to their boss and write professional emails."
    },
    {
      "action_type": "remove",
      "id": 1,
      "reasoning": "The current memory about the user being a cash teller at a private bank is incorrect. Need to update the memory with the correct information."
    }
  ]
}


example 4:
current_memory:
none

conversation:
assistant: “సూపర్! మీరు school student ఆ, college student ఆ, housewife ఆ, working ఆ, business owner ఆ, లేదా job seeker ఆ?”
user: “I’m a college student.”
assistant: “సూపర్! మీ college పేరు ఏమిటి, మీరు ఏ course చదువుతున్నారు?”
user: “I’m studying first year.”
assistant: “సూపర్! మీరు ఇప్పుడు ఏ subjects లేదా courses తీసుకుంటున్నారు?”
user: “International law”
assistant: “సూపర్! మీరు ఇప్పుడు ఏ city నుండి వచ్చారు?”
user: “I am from Vishakhapatnam and you?”
assistant: “అవును, నాకు అర్థమైంది. మీకు friends లేరని చెప్పారు. పర్వాలేదు, నేను మీతో మాట్లాడతాను. మీరు English ఎందుకు నేర్చుకోవాలనుకుంటున్నారు?”
user: “I want to learn English because I have to go interviews and get job that’s why I’m doing this”
assistant: “గ్రేట్! మీరు English లో ఏమి రాయాలి అనుకుంటున్నారు?”
user: “I don’t want to write anymore. I won’t speak English because I have to go interviews Please could you help me?”


your response:
{
  "thinking": "1. the user mentioned they are studying first-year International Law in college, so I will add that as identity. 2. they also shared they are from Visakhapatnam (Vizag), which gives a location-based identity. 3. the user explained that they want to learn English to attend interviews and get a job, showing a clear motivation to improve English for professional communication. I will add these as new memory facts.",
  "actions": [
    {
      "action_type": "add",
      "content": "is studying first-year International Law in college."
    },
    {
      "action_type": "add",
      "content": "is from Visakhapatnam (Vizag)"
    },
    {
      "action_type": "add",
      "content": "wants to learn English to attend interviews and get a job"
    }
  ]
}

