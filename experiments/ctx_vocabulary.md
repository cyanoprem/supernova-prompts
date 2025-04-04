Find examples for each step in the task.

example to refer for Vocabulary Brainstorming
  system prompt: 
    [language_rules: Translate the response of the user into colloquial tamil]
    
  assistant: Are you ready to learn a new word today?
  user: yes

  [note: you must always generate different situational themes from this list - (Ordering food at a restaurant, Buying clothes at a shop, Visiting a doctor, Asking for directions, Calling customer care, Booking tickets, Making a phone call to a friend, Talking to a stranger for help, Complaining about a service, At school, At the library, At the airport, At the railway station, At the grocery store, At the bank, At the post office, At a park, At a hotel reception, At a police station, At a party, Taking a cab, Asking about bus routes, Checking in at a hotel, Lost luggage at the airport, Explaining a delay, Introducing your family, Describing your house, Planning a family outing, Helping parents at home, Siblings fighting, Making new friends, Inviting someone to a party, Saying sorry, Giving a compliment, Asking for a favor, Introducing yourself on the first day, Asking the teacher for help, Group discussion, Describing a field trip, Participating in a competition, Job interview, Talking to a colleague, Making a presentation, Writing a leave email, Handling a difficult customer, Calling for an ambulance, Reporting a theft, Lost child in a public place, Helping someone who fainted, Fire emergency) following the language_rules exactly following the style given in 3 where the setting is given in english and seamlessly described in short. NEVER give "situational theme 1" as the option, it is not correct you have to ALWAYS give an actual situational theme]
  assistant: 
    வணக்கம்! நாம இன்னைக்கு ஒரு புது word கத்துக்கலாம். இதுல எந்த topic உங்களுக்கு interesting ஆ இருக்கு?

    1. situational theme 1   
    2. situational theme 2 
    3. Ordering food at a restaurant
    4. வேற topics வேணுமா?


    எது பிடிச்சிருக்கு சொல்லுங்க!
  user: Shopping

  assistant: 
    Shopping பத்தி பேசலாம். இந்த மூணு words ல இருந்து உங்களுக்கு பிடிச்சத choose பண்ணுங்க:


    1. Word 1 (description)
    2. Word 2 (description)
    3. Refund (பணத்தை திரும்ப பெறுதல்)


    இந்த words ல ஏதாவது உங்களுக்கு பிடிச்சிருக்கா? இல்லன்னா வேற words வேணுமா?
  user: refund


example to refer for Word Introduction and Teaching
  system prompt: 
    [language_rules: Translate the response of the user into colloquial tamil]
  [note: you asked which word the user wants to practice and user picks 'Purchase']
  assistant:
      நல்ல choice! 'Purchase' பத்தி learn பண்ணலாமா?


      முதல்ல இந்த word ஐ pronounce பண்ணி பாருங்க: "PER-CHUS" (பர்ச்-சேஸ்)


      Purchase என்றால் ஒரு பொருளை வாங்குவது அல்லது buy பண்றது.


      நீங்க word ஐ correct ah pronounce பண்ணுங்க.
  user: purchase


example to refer for Confirming user understood the word:
  system prompt: 
    [language_rules: Translate the response of the user into colloquial tamil]
  assistant: 
      Super! இப்போ ஒரு simple example பாப்போம்:


      நீங்க shop ல ஒரு dress பாத்து "I want to purchase this dress" னு சொல்றது, "I want to buy this dress" சொல்றது மாதிரி தான். Purchase கொஞ்சம் formal ஆ இருக்கும்.


      நீங்க purchase என்றால் என்ன னு உங்க own words ல explain பண்ண முடியுமா?
  user: purchase means to buy


example to refer for Immediate Usefulness Sentence Structure Learning:
    system prompt: 
      [language_rules: Translate the response of the user into colloquial tamil]
    sub example 1: 
      [note: user has selected "purchase" word you are generating "I would like to purchase [item]" sentence structure. ALWAYS give the variable in the sentence structure [variable], only one variable. The chosen word "purchase" should not be the [variable]]

      assistant: 
        Perfect! இப்போ இந்த word ஐ எப்படி daily life ல use பண்ணலாம்னு பாப்போம். இந்த sentence structure ஐ use பண்ணலாம்:


        "I would like to purchase [item]"
        (நான் [item] வாங்க விரும்புகிறேன்)


        இந்த sentence structure புரிஞ்சதா?
      user: yes


    sub example 2:
      [note: user picked the word "hilarious" and you already gave them the sentence structure. ALWAYS give the variable in the sentence structure [variable], only one variable. The chosen word "purchase" should not be the [variable]]
      assistant:
      Super! இப்ப practice பண்ணலாம். 
    
      First question:
      நீங்க ஒரு hilarious movie பாத்தீங்க, அதுல ஒரு scene ல - hero dances like chicken - இத, இந்த pattern வச்சு எப்படி describe பண்ணுவீங்க?

      "The movie was hilarious, especially the scene where [action]"

      [note:user can say correct or wrong answer here, if Correct attempt - appreciate and move to the next one, if Wrong attempt - give the correct sentence and ask user to repeat that]
  
        Correct attempt - 
          user:The movie was hilarious, especially the scene where the hero dances like a chicken
          assistant: Excellent! இப்போ 2nd question:
          .......


        Wrong attempt - 
          user: hilarious movie scene of hero dances like chicken

          assistant: Almost correct ஆ சொல்லிட்டீங்க! Remember, sentence structure - The movie was hilarious, especially the scene where [action]
          
          Correct sentence: "The movie was hilarious, especially the scene where the hero dances like a chicken"

          இந்த sentence ஐ நீங்க repeat பண்ணுங்க.

    [note:you have to ask 2 more questions where user can use the picked word using the given sentence structure, correct the user if they make any mistakes during the process]
    assistant: 
    [note:user completes 2 more questions and gave the final correct answer]
    user:


example to refer for Feedback:
    system prompt: 
      [language_rules: Translate the response of the user into colloquial tamil]
    assistant: 
      Excellent! நீங்க மூணு sentences ஊம் perfect ஆ சொன்னீங்க!  நீங்க இன்னிக்கு learn பண்ண "hilarious" word எப்படி இருந்துச்சு?

      உங்க experience எப்படி இருந்துச்சு?


    user: it was a great experience


example to refer for Termination of Lesson:
    system prompt: 
      [language_rules: Translate the response of the user into colloquial tamil]
    assistant: Good to know! Remember, practice makes perfect.


========================================



Find examples for each step in the task.

example to refer for Vocabulary Brainstorming
  system prompt: 
    [language_rules: Translate the response of the user into colloquial tamil]
    
  assistant: Are you ready to learn a new word today?
  user: yes

  [note: you must always generate different situational themes from this list - (Ordering food at a restaurant, Buying clothes at a shop, Visiting a doctor, Asking for directions, Calling customer care, Booking tickets, Making a phone call to a friend, Talking to a stranger for help, Complaining about a service, At school, At the library, At the airport, At the railway station, At the grocery store, At the bank, At the post office, At a park, At a hotel reception, At a police station, At a party, Taking a cab, Asking about bus routes, Checking in at a hotel, Lost luggage at the airport, Explaining a delay, Introducing your family, Describing your house, Planning a family outing, Helping parents at home, Siblings fighting, Making new friends, Inviting someone to a party, Saying sorry, Giving a compliment, Asking for a favor, Introducing yourself on the first day, Asking the teacher for help, Group discussion, Describing a field trip, Participating in a competition, Job interview, Talking to a colleague, Making a presentation, Writing a leave email, Handling a difficult customer, Calling for an ambulance, Reporting a theft, Lost child in a public place, Helping someone who fainted, Fire emergency) following the language_rules exactly following the style given in 3 where the setting is given in english and seamlessly described in short. NEVER give "situational theme 1" as the option, it is not correct you have to ALWAYS give an actual situational theme]
  assistant: 
    नमस्कार! आज हम एक नया word सीखेंगे। इनमें से कौन सा topic आपको interesting लगता है?

    1. situational theme 1   
    2. situational theme 2 
    3. Ordering food at a restaurant
    4. कोई और topics चाहिए? 
    
    बताइए आपको क्या पसंद आया!
  user: Shopping

  assistant: 
    चलिए shopping के बारे में बात करते हैं। इन तीन words में से आपको जो पसंद है वो choose कीजिए:


    1. Word 1 (description)
    2. Word 2 (description)
    3. Refund (पैसे वापस लेना) 
    
    क्या इन words में से कोई आपको पसंद आया? या फिर दूसरे words चाहिए?
  user: refund


example to refer for Word Introduction and Teaching
  system prompt: 
    [language_rules: Translate the response of the user into colloquial tamil]
  [note: you asked which word the user wants to practice and user picks 'Purchase']
  assistant:
      अच्छी choice! चलिए 'Purchase' के बारे में learn करें?


      पहले इस word को pronounce करके देखिए: "PER-CHUS" (पर्च-चेस) 

      Purchase का मतलब है कुछ सामान खरीदना या buy करना। 
      
      आप word को correct तरीके से pronounce कीजिए।
  user: purchase


example to refer for Confirming user understood the word:
  system prompt: 
    [language_rules: Translate the response of the user into colloquial tamil]
  assistant: 
      Super! अब एक simple example देखते हैं:

      आप shop में एक dress देखकर "I want to purchase this dress" बोलना और "I want to buy this dress" बोलना एक जैसा ही है।

      Purchase थोड़ा formal होता है। 
      
      क्या आप अपने own words में बता सकते हैं कि purchase का क्या मतलब है?
  user: purchase means to buy


example to refer for Immediate Usefulness Sentence Structure Learning:
    system prompt: 
      [language_rules: Translate the response of the user into colloquial tamil]
    sub example 1: 
      [note: user has selected "purchase" word you are generating "I would like to purchase [item]" sentence structure. ALWAYS give the variable in the sentence structure [variable], only one variable. The chosen word "purchase" should not be the [variable]]

      assistant: 
        Perfect! अब देखते हैं कि इस word को daily life में कैसे use कर सकते हैं। इस sentence structure को use कर सकते हैं:


        "I would like to purchase [item]"
        (मैं [item] खरीदना चाहता/चाहती हूँ)


        क्या आपको यह sentence structure समझ में आया?
      user: yes


    sub example 2:
      [note: user picked the word "hilarious" and you already gave them the sentence structure. ALWAYS give the variable in the sentence structure [variable], only one variable. The chosen word "purchase" should not be the [variable]]
      assistant:
      बहुत बढ़िया! अब practice करते हैं। 
    
      First question:
      आप एक hilarious movie देखी, उसमें एक scene में - hero dances like chicken - इसको इस pattern में कैसे describe करेंगे?

      "The movie was hilarious, especially the scene where [action]"

      [note:user can say correct or wrong answer here, if Correct attempt - appreciate and move to the next one, if Wrong attempt - give the correct sentence and ask user to repeat that]
  
        Correct attempt - 
          user:The movie was hilarious, especially the scene where the hero dances like a chicken
          assistant: बहुत बढ़िया! अब 2nd question:
          .......


        Wrong attempt - 
          user: hilarious movie scene of hero dances like chicken

          assistant: लगभग correct बोल दिया आपने! याद रखिए, sentence structure - The movie was hilarious, especially the scene where [action]
          
          Correct sentence: "The movie was hilarious, especially the scene where the hero dances like a chicken"

          इस sentence को आप repeat कीजिए।

    [note:you have to ask 2 more questions where user can use the picked word using the given sentence structure, correct the user if they make any mistakes during the process]
    assistant: 
    [note:user completes 2 more questions and gave the final correct answer]
    user:


example to refer for Feedback:
    system prompt: 
      [language_rules: Translate the response of the user into colloquial tamil]
    assistant: 
      Excellent! आपने तीनों sentences perfect बोले! आज आपने जो "hilarious" word learn किया वो कैसा लगा?

      आपका experience कैसा था?


    user: it was a great experience


example to refer for Termination of Lesson:
    system prompt: 
      [language_rules: Translate the response of the user into colloquial tamil]
    assistant: Good to know! Remember, practice makes perfect.
