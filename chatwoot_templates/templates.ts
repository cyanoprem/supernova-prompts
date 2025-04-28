import { USECASES_ENUM, type TemplateMap } from "./types";


const TEMPLATES: TemplateMap = {
 [USECASES_ENUM.WELCOME_MESSAGE]: {
   localized: {
     name: "ob1_msnova_welcome_gif_v1",
     language_code: "en",
     vars: {
       imageUrl: "https://r2.gosupernova.live/onboarding/welcome.jpg",
     },


     hi: {
       name: "ob1_msnova_welcome_gif_v1",
       language_code: "hi",
       vars: {
         imageUrl:
           "https://imagedelivery.net/j8wPfYmr-_HSd9btB36ffA/4172f88f-221c-494d-df67-26876fad0c00/1080x1080",
       },
     },
   },
   shared: {
     components: [
       {
         type: "header",
         parameters: [
           {
             type: "image",
             image: {
               link: "{{ imageUrl }}",
             },
           },
         ],
       },
     ],
   },
 },
 [USECASES_ENUM.WELCOME_ONBOARDING]: {
   localized: {
     name: "welcome_onboarding_video_v1",
     language_code: "en",
     vars: {
       videoUrl: "https://r2.gosupernova.live/onboarding/welcome-video.mp4",
     },


     hi: {
       name: "welcome_onboarding_video_v1",
       language_code: "hi",
       vars: {
         videoUrl:
           "https://r2.gosupernova.live/welcome_onboarding_video_v1_hindi.mp4",
       },
     },
   },
   shared: {
     components: [
       {
         type: "header",
         parameters: [
           {
             type: "video",
             video: {
               link: "{{ videoUrl }}",
             },
           },
         ],
       },
     ],
   },
 },
 [USECASES_ENUM.ANDROID_INSTALLATION]: {
   localized: {
     name: "android_app_installation_instructions_v1",
     language_code: "ta",
     vars: {
       videoUrl:
         "https://r2.gosupernova.live/onboarding/android_install_instruction.mp4",
     },


     hi: {
       name: "android_app_installation_instructions_v1",
       language_code: "en",
       vars: {
         videoUrl:
           "https://r2.gosupernova.live/android-install-instructions-hindi.mp4",
       },
     },
   },
   shared: {
     components: [
       {
         type: "header",
         parameters: [
           {
             type: "video",
             video: {
               link: "{{ videoUrl }}",
             },
           },
         ],
       },
     ],
   },
 },
 [USECASES_ENUM.IOS_INSTALLATION]: {
   localized: {
     name: "ios_app_installation_instructions_v1",
     language_code: "ta",
     vars: {
       videoUrl:
         "https://r2.gosupernova.live/onboarding/iphone_install_instruction.mp4",
     },


     hi: {
       name: "ios_app_installation_instructions_v1",
       language_code: "en",
       vars: {
         videoUrl:
           "https://r2.gosupernova.live/hindi-ios-install-instructions-v2.mp4",
       },
     },
   },
   shared: {
     components: [
       {
         type: "header",
         parameters: [
           {
             type: "video",
             video: {
               link: "{{ videoUrl }}",
             },
           },
         ],
       },
     ],
   },
 },
 [USECASES_ENUM.KIDS_DAY_1_REMINDER]: {
   localized: {
     name: "d1_riddle_challenge_v1",
     language_code: "ta",


     hi: {
       name: "d1_riddle_challenge_v1",
       language_code: "en",
     },
   },
   shared: {
     components: [
       {
         type: "header",
         parameters: [
           {
             type: "image",
             image: {
               link: "{{ image_url }}",
             },
           },
         ],
       },
     ],
   },
 },
 [USECASES_ENUM.KIDS_DAY_2_REMINDER]: {
   localized: {
     name: "d2_msnova_reminder_v1",
     language_code: "ta",
     vars: {
       videoUrl:
         "https://r2.gosupernova.live/reminder_attachments/d2_msnova_reminder_v1.mp4",
     },


     hi: {
       name: "d2_msnova_reminder_v1",
       language_code: "en",
       vars: {
         videoUrl: "https://r2.gosupernova.live/d2_msnova_reminder_hindi.mp4",
       },
     },
   },
   shared: {
     components: [
       {
         type: "header",
         parameters: [
           {
             type: "video",
             video: {
               link: "{{ videoUrl }}",
             },
           },
         ],
       },
     ],
   },
 },
 [USECASES_ENUM.KIDS_DAY_7_REMINDER]: {
   localized: {
     name: "d7_msnova_reminder_v1",
     language_code: "ta",
     vars: {
       videoUrl:
         "https://r2.gosupernova.live/reminder_attachments/d7_msnova_reminder_v1.mp4",
     },


     hi: {
       name: "d7_msnova_reminder_v1",
       language_code: "en",
       vars: {
         videoUrl:
           "https://r2.gosupernova.live/d7_msnova_reminder_v1_hindi.mp4",
       },
     },
   },
   shared: {
     components: [
       {
         type: "header",
         parameters: [
           {
             type: "video",
             video: {
               link: "{{ videoUrl }}",
             },
           },
         ],
       },
     ],
   },
 },
 [USECASES_ENUM.ADULTS_DAY_1_REMINDER]: {
   localized: {
     name: "missed_activity_reminder_adult_day1_v1",
     language_code: "en",


     hi: {
       name: "missed_activity_reminder_adult_day1_v1",
       language_code: "hi",
     },
   },
   shared: {
     components: [],
   },
 },
 [USECASES_ENUM.ADULTS_DAY_2_REMINDER]: {
   localized: {
     name: "missed_activity_reminder_adult_day2_v1",
     language_code: "en",


     hi: {
       name: "missed_activity_reminder_adult_day2_v1",
       language_code: "hi",
     },
   },
   shared: {
     components: [],
   },
 },
 [USECASES_ENUM.ADULTS_DAY_3_REMINDER]: {
   localized: {
     name: "missed_activity_reminder_adult_day3_v1",
     language_code: "en",


     hi: {
       name: "missed_activity_reminder_adult_day3_v1",
       language_code: "hi",
     },
   },
   shared: {
     components: [],
   },
 },
 [USECASES_ENUM.ONBOARDING_ACTIVITY_REMINDER]: {
   localized: {
     name: "admission_test_pending_reminder_v1",
     language_code: "en",


     hi: {
       name: "admission_test_pending_reminder_v1",
       language_code: "hi",
     },
   },
   shared: {
     components: [],
   },
 },
 [USECASES_ENUM.NPS_SURVEY_KIDS]: {
   localized: {
     name: "nps_survey_tanglish_v2",
     language_code: "en_US",
     vars: {
       videoUrl: "https://r2.gosupernova.live/nps/nps-video.mp4",
     },


     hi: {
       name: "nps_survey_tanglish_v2",
       language_code: "hi",
       vars: {
         videoUrl: "https://r2.gosupernova.live/nps_survey_hindi_v2.mp4",
       },
     },
   },
   shared: {
     components: [
       {
         type: "button",
         sub_type: "url",
         index: 0,
         parameters: [
           {
             type: "text",
             text: "{{ userId }}",
           },
         ],
       },
       {
         type: "header",
         parameters: [
           {
             type: "video",
             video: {
               link: "{{ videoUrl }}",
             },
           },
         ],
       },
     ],
   },
 },
 [USECASES_ENUM.NPS_SURVEY_ADULTS]: {
   localized: {
     name: "nps_survey_adults_v1",
     language_code: "en",
     vars: {
       videoUrl: "https://r2.gosupernova.live/nps/nps_adults_tamil.mp4",
     },


     hi: {
       name: "nps_survey_adults_v1",
       language_code: "hi",
       vars: {
         videoUrl: "https://r2.gosupernova.live/nps_survey_hindi_adults.mp4",
       },
     },
   },
   shared: {
     components: [
       {
         type: "button",
         sub_type: "url",
         index: 0,
         parameters: [
           {
             type: "text",
             text: "{{ userId }}",
           },
         ],
       },
       {
         type: "header",
         parameters: [
           {
             type: "video",
             video: {
               link: "{{ videoUrl }}",
             },
           },
         ],
       },
     ],
   },
 },
 [USECASES_ENUM.AUDIOGRAM]: {
   localized: {
     name: "audiogramshare",
     language_code: "ta",


     hi: {
       name: "audiogramshare",
       language_code: "hi",
     },
   },
   shared: {
     components: [
       {
         type: "header",
         parameters: [
           {
             type: "video",
             video: {
               link: "{{ outputURL }}",
             },
           },
         ],
       },
       {
         type: "body",
         parameters: [
           {
             type: "text",
             text: "{{ userName }}",
           },
           {
             type: "text",
             text: "{{ scenarioTitle }}",
           },
         ],
       },
     ],
   },
 },
 [USECASES_ENUM.REFERRAL_LINK_KIDS]: {
   localized: {
     name: "v4_referral_link",
     language_code: "en",
   },
   shared: {
     components: [
       {
         type: "header",
         parameters: [
           {
             type: "image",
             image: {
               link: "https://r2.gosupernova.live/referral/referral_v4.jpg",
             },
           },
         ],
       },
       {
         type: "body",
         parameters: [
           {
             type: "text",
             text: "{{ referralLink }}",
           },
         ],
       },
     ],
   },
 },
 [USECASES_ENUM.REFERRAL_LINK_ADULTS]: {
   localized: {
     name: "adult_referral_link_v1",
     language_code: "en",
   },
   shared: {
     components: [
       {
         type: "body",
         parameters: [
           {
             type: "text",
             text: "{{ referralLink }}",
           },
         ],
       },
     ],
   },
 },
 [USECASES_ENUM.REPAYMENT_RENEWAL_REMINDER_14_DAYS]: {
   localized: {
     name: "t14_renewal_remainder",
     language_code: "en",
     vars: {
       imageUrl:
         "https://imagedelivery.net/j8wPfYmr-_HSd9btB36ffA/5bac246c-6dab-4a1c-88eb-a0d2b3ffcd00/1080x1080",
     },


     hi: {
       name: "t14_renewal_remainder",
       language_code: "hi",
       vars: {
         imageUrl:
           "https://imagedelivery.net/j8wPfYmr-_HSd9btB36ffA/7656a4ef-9111-4c77-c82b-693e68a15700/1080x1080",
       },
     },
   },
   shared: {
     components: [
       {
         type: "header",
         parameters: [
           {
             type: "image",
             image: {
               link: "{{ imageUrl }}",
             },
           },
         ],
       },
       {
         type: "body",
         parameters: [
           {
             type: "text",
             text: "{{ name }}",
           },
         ],
       },
     ],
   },
 },
 [USECASES_ENUM.REPAYMENT_RENEWAL_REMINDER_7_DAYS]: {
   localized: {
     name: "t7_renewal_remainder",
     language_code: "en",
     vars: {
       imageUrl:
         "https://imagedelivery.net/j8wPfYmr-_HSd9btB36ffA/c9311827-d021-419a-e667-872adb3ed500/1080x1080",
     },


     hi: {
       name: "t7_renewal_remainder",
       language_code: "hi",
       vars: {
         imageUrl:
           "https://imagedelivery.net/j8wPfYmr-_HSd9btB36ffA/61e9fd55-de69-45ac-798e-ebaaeeebf900/1080x1080",
       },
     },
   },
   shared: {
     components: [
       {
         type: "header",
         parameters: [
           {
             type: "image",
             image: {
               link: "{{ imageUrl }}",
             },
           },
         ],
       },
       {
         type: "body",
         parameters: [
           {
             type: "text",
             text: "{{ name }}",
           },
           {
             type: "text",
             text: "{{ totalCompleted }}",
           },
           {
             type: "text",
             text: "{{ totalWords }}",
           },
           {
             type: "text",
             text: "{{ totalSentences }}",
           },
         ],
       },
     ],
   },
 },
 [USECASES_ENUM.SUBSCRIPTION_EXPIRED]: {
   localized: {
     name: "subscription_expired_v1",
     language_code: "en",
     vars: {
       imageUrl:
         "https://imagedelivery.net/j8wPfYmr-_HSd9btB36ffA/7e6c2774-6d46-4221-df33-20545fb70700/1080x1080",
     },


     hi: {
       name: "subscription_expired_v1",
       language_code: "hi",
       vars: {
         imageUrl:
           "https://imagedelivery.net/j8wPfYmr-_HSd9btB36ffA/89256ecf-0126-4fb8-73d9-27b8ec334700/1080x1080",
       },
     },
   },
   shared: {
     components: [
       {
         type: "header",
         parameters: [
           {
             type: "image",
             image: {
               link: "{{ imageUrl }}",
             },
           },
         ],
       },
       {
         type: "body",
         parameters: [
           {
             type: "text",
             text: "{{ name }}",
           },
           {
             type: "text",
             text: "{{ totalCompleted }}",
           },
           {
             type: "text",
             text: "{{ totalWords }}",
           },
           {
             type: "text",
             text: "{{ totalSentences }}",
           },
         ],
       },
     ],
   },
 },
 [USECASES_ENUM.T14_RENEWAL_REMINDER_HIGH_ADULTS]: {
   localized: {
     name: "t14_renewal_remainder_high_adults",
     language_code: "en",
     vars: {
       imageUrl:
         "https://imagedelivery.net/j8wPfYmr-_HSd9btB36ffA/631bcad9-1526-4911-43c0-9a64af21e200/1080x1080",
     },


     hi: {
       name: "t14_renewal_reminder_high_adults_hindi",
       language_code: "en",
       vars: {
         imageUrl:
           "https://imagedelivery.net/j8wPfYmr-_HSd9btB36ffA/c9816a5a-d400-4647-cdbc-ffc08c99d400/1080x1080",
       },
     },
   },
   shared: {
     components: [
       {
         type: "header",
         parameters: [
           {
             type: "image",
             image: {
               link: "{{ imageUrl }}",
             },
           },
         ],
       },
       {
         type: "body",
         parameters: [
           {
             type: "text",
             text: "{{ name }}",
           },
           {
             type: "text",
             text: "{{ totalCompleted }}",
           },
         ],
       },
     ],
   },
 },
 [USECASES_ENUM.T14_RENEWAL_REMINDER_HIGH_KIDS]: {
   localized: {
     name: "t14_renewal_remainder_high_kids",
     language_code: "en",
     vars: {
       imageUrl:
         "https://imagedelivery.net/j8wPfYmr-_HSd9btB36ffA/c9816a5a-d400-4647-cdbc-ffc08c99d400/1080x1080",
     },


     hi: {
       name: "t14_renewal_reminder_high_kids_hindi",
       language_code: "en",
       vars: {
         imageUrl:
           "https://imagedelivery.net/j8wPfYmr-_HSd9btB36ffA/438edb3b-521b-43cc-13e6-6bf8d5999700/1080x1080",
       },
     },
   },
   shared: {
     components: [
       {
         type: "header",
         parameters: [
           {
             type: "image",
             image: {
               link: "{{ imageUrl }}",
             },
           },
         ],
       },
       {
         type: "body",
         parameters: [
           {
             type: "text",
             text: "{{ name }}",
           },
           {
             type: "text",
             text: "{{ totalCompleted }}",
           },
         ],
       },
     ],
   },
 },
 [USECASES_ENUM.T14_RENEWAL_REMINDER_LOW_ADULTS]: {
   localized: {
     name: "t14_renewal_remainder_low_adults",
     language_code: "en",
     vars: {
       imageUrl:
         "https://imagedelivery.net/j8wPfYmr-_HSd9btB36ffA/631bcad9-1526-4911-43c0-9a64af21e200/1080x1080",
     },


     hi: {
       name: "t14_renewal_reminder_low_adults_hindi",
       language_code: "en",
       vars: {
         imageUrl:
           "https://imagedelivery.net/j8wPfYmr-_HSd9btB36ffA/da970fcb-c9d3-4e89-eb4b-db99c8541900/1080x1080",
       },
     },
   },
   shared: {
     components: [
       {
         type: "header",
         parameters: [
           {
             type: "image",
             image: {
               link: "{{ imageUrl }}",
             },
           },
         ],
       },
       {
         type: "body",
         parameters: [
           {
             type: "text",
             text: "{{ name }}",
           },
         ],
       },
     ],
   },
 },
 [USECASES_ENUM.T14_RENEWAL_REMINDER_LOW_KIDS]: {
   localized: {
     name: "t14_renewal_remainder_low_kids",
     language_code: "en",
     vars: {
       imageUrl:
         "https://imagedelivery.net/j8wPfYmr-_HSd9btB36ffA/c9816a5a-d400-4647-cdbc-ffc08c99d400/1080x1080",
     },


     hi: {
       name: "t14_renewal_reminder_low_kids_hindi",
       language_code: "en",
       vars: {
         imageUrl:
           "https://imagedelivery.net/j8wPfYmr-_HSd9btB36ffA/37011a36-2b63-4006-524c-9cb5bea80800/1080x1080",
       },
     },
   },
   shared: {
     components: [
       {
         type: "header",
         parameters: [
           {
             type: "image",
             image: {
               link: "{{ imageUrl }}",
             },
           },
         ],
       },
       {
         type: "body",
         parameters: [
           {
             type: "text",
             text: "{{ name }}",
           },
         ],
       },
     ],
   },
 },
 [USECASES_ENUM.T7_RENEWAL_REMINDER_HIGH_ADULTS]: {
   localized: {
     name: "t7_renewal_remainder_high_adults",
     language_code: "en",
     vars: {
       imageUrl:
         "https://imagedelivery.net/j8wPfYmr-_HSd9btB36ffA/ac286768-dba6-472c-3e74-6e963b03ef00/1080x1080",
     },


     hi: {
       name: "t7_renewal_reminder_high_adults_hindi",
       language_code: "en",
       vars: {
         imageUrl:
           "https://imagedelivery.net/j8wPfYmr-_HSd9btB36ffA/26b52b5a-42b1-431f-bea7-ee8adad32c00/1080x1080",
       },
     },
   },
   shared: {
     components: [
       {
         type: "header",
         parameters: [
           {
             type: "image",
             image: {
               link: "{{ imageUrl }}",
             },
           },
         ],
       },
       {
         type: "body",
         parameters: [
           {
             type: "text",
             text: "{{ name }}",
           },
           {
             type: "text",
             text: "{{ totalCompleted }}",
           },
         ],
       },
     ],
   },
 },
 [USECASES_ENUM.T7_RENEWAL_REMINDER_HIGH_KIDS]: {
   localized: {
     name: "t7_renewal_remainder_high_kids",
     language_code: "en",
     vars: {
       imageUrl:
         "https://imagedelivery.net/j8wPfYmr-_HSd9btB36ffA/b02a9bfa-346b-40d0-b6ab-8779ef7cbd00/1080x1080",
     },


     hi: {
       name: "t7_renewal_reminder_high_kids_hindi",
       language_code: "en",
       vars: {
         imageUrl:
           "https://imagedelivery.net/j8wPfYmr-_HSd9btB36ffA/c353bfb4-dcb8-4f7a-fc60-c4fc525d1600/1080x1080",
       },
     },
   },
   shared: {
     components: [
       {
         type: "header",
         parameters: [
           {
             type: "image",
             image: {
               link: "{{ imageUrl }}",
             },
           },
         ],
       },
       {
         type: "body",
         parameters: [
           {
             type: "text",
             text: "{{ name }}",
           },
           {
             type: "text",
             text: "{{ totalCompleted }}",
           },
         ],
       },
     ],
   },
 },
 [USECASES_ENUM.T7_RENEWAL_REMINDER_LOW_ADULTS]: {
   localized: {
     name: "t7_renewal_remainder_low_adults",
     language_code: "en",
     vars: {
       imageUrl:
         "https://imagedelivery.net/j8wPfYmr-_HSd9btB36ffA/ac286768-dba6-472c-3e74-6e963b03ef00/1080x1080",
     },


     hi: {
       name: "t7_renewal_reminder_low_adults_hindi",
       language_code: "en",
       vars: {
         imageUrl:
           "https://imagedelivery.net/j8wPfYmr-_HSd9btB36ffA/a6c45f76-39dd-477f-34ae-869883473500/1080x1080",
       },
     },
   },
   shared: {
     components: [
       {
         type: "header",
         parameters: [
           {
             type: "image",
             image: {
               link: "{{ imageUrl }}",
             },
           },
         ],
       },
       {
         type: "body",
         parameters: [
           {
             type: "text",
             text: "{{ name }}",
           },
         ],
       },
     ],
   },
 },
 [USECASES_ENUM.T7_RENEWAL_REMINDER_LOW_KIDS]: {
   localized: {
     name: "t7_renewal_remainder_low_kids",
     language_code: "en",
     vars: {
       imageUrl:
         "https://imagedelivery.net/j8wPfYmr-_HSd9btB36ffA/b02a9bfa-346b-40d0-b6ab-8779ef7cbd00/1080x1080",
     },


     hi: {
       name: "t7_renewal_reminder_low_kids_hindi",
       language_code: "en",
       vars: {
         imageUrl:
           "https://imagedelivery.net/j8wPfYmr-_HSd9btB36ffA/40dd1060-afdb-482e-84aa-369c5fe6b300/1080x1080",
       },
     },
   },
   shared: {
     components: [
       {
         type: "header",
         parameters: [
           {
             type: "image",
             image: {
               link: "{{ imageUrl }}",
             },
           },
         ],
       },
       {
         type: "body",
         parameters: [
           {
             type: "text",
             text: "{{ name }}",
           },
         ],
       },
     ],
   },
 },
 [USECASES_ENUM.T0_RENEWAL_REMINDER_HIGH_ADULTS]: {
   localized: {
     name: "t0_renewal_remainder_high_adults",
     language_code: "en",
     vars: {
       imageUrl:
         "https://imagedelivery.net/j8wPfYmr-_HSd9btB36ffA/c0b8bcca-adf8-4209-9b8b-9b294296a700/1080x1080",
     },


     hi: {
       name: "t0_renewal_reminder_high_adults_hindi",
       language_code: "en",
       vars: {
         imageUrl:
           "https://imagedelivery.net/j8wPfYmr-_HSd9btB36ffA/42e3ebc5-b5b4-4dc6-831c-155540c2ea00/1080x1080",
       },
     },
   },
   shared: {
     components: [
       {
         type: "header",
         parameters: [
           {
             type: "image",
             image: {
               link: "{{ imageUrl }}",
             },
           },
         ],
       },
       {
         type: "body",
         parameters: [
           {
             type: "text",
             text: "{{ name }}",
           },
           {
             type: "text",
             text: "{{ totalCompleted }}",
           },
         ],
       },
     ],
   },
 },
 [USECASES_ENUM.T0_RENEWAL_REMINDER_HIGH_KIDS]: {
   localized: {
     name: "t0_renewal_remainder_high_kids",
     language_code: "en",
     vars: {
       imageUrl:
         "https://imagedelivery.net/j8wPfYmr-_HSd9btB36ffA/296ae704-7269-4707-000b-830c78bdc100/1080x1080",
     },


     hi: {
       name: "t0_renewal_reminder_high_kids_hindi",
       language_code: "en",
       vars: {
         imageUrl:
           "https://imagedelivery.net/j8wPfYmr-_HSd9btB36ffA/5579b3c1-2aeb-4d43-b2c8-94197084a900/1080x1080",
       },
     },
   },
   shared: {
     components: [
       {
         type: "header",
         parameters: [
           {
             type: "image",
             image: {
               link: "{{ imageUrl }}",
             },
           },
         ],
       },
       {
         type: "body",
         parameters: [
           {
             type: "text",
             text: "{{ name }}",
           },
           {
             type: "text",
             text: "{{ totalCompleted }}",
           },
         ],
       },
     ],
   },
 },
 [USECASES_ENUM.T0_RENEWAL_REMINDER_LOW_ADULTS]: {
   localized: {
     name: "t0_renewal_remainder_low_adults",
     language_code: "en",
     vars: {
       imageUrl:
         "https://imagedelivery.net/j8wPfYmr-_HSd9btB36ffA/c0b8bcca-adf8-4209-9b8b-9b294296a700/1080x1080",
     },


     hi: {
       name: "t0_renewal_reminder_low_adults_hindi",
       language_code: "en",
       vars: {
         imageUrl:
           "https://imagedelivery.net/j8wPfYmr-_HSd9btB36ffA/ddaa5c70-940e-46ea-b0c6-ef66b06fcc00/1080x1080",
       },
     },
   },
   shared: {
     components: [
       {
         type: "header",
         parameters: [
           {
             type: "image",
             image: {
               link: "{{ imageUrl }}",
             },
           },
         ],
       },
       {
         type: "body",
         parameters: [
           {
             type: "text",
             text: "{{ name }}",
           },
         ],
       },
     ],
   },
 },
 [USECASES_ENUM.T0_RENEWAL_REMINDER_LOW_KIDS]: {
   localized: {
     name: "t0_renewal_remainder_low_kids",
     language_code: "en",
     vars: {
       imageUrl:
         "https://imagedelivery.net/j8wPfYmr-_HSd9btB36ffA/296ae704-7269-4707-000b-830c78bdc100/1080x1080",
     },


     hi: {
       name: "t0_renewal_reminder_low_kids_hindi",
       language_code: "en",
       vars: {
         imageUrl:
           "https://imagedelivery.net/j8wPfYmr-_HSd9btB36ffA/a49add52-ffbe-4f51-3199-1037abb97600/1080x1080",
       },
     },
   },
   shared: {
     components: [
       {
         type: "header",
         parameters: [
           {
             type: "image",
             image: {
               link: "{{ imageUrl }}",
             },
           },
         ],
       },
       {
         type: "body",
         parameters: [
           {
             type: "text",
             text: "{{ name }}",
           },
         ],
       },
     ],
   },
 },
};


export default TEMPLATES;





// SALES TEMPALTES

import { USECASES_ENUM, type TemplateMap } from "./types";


const TEMPLATES: TemplateMap = {
 [USECASES_ENUM.ONBOARDING_ADULTS_APP]: {
   localized: {
     name: "typeform_with_paymentid_adults_v2",
     language_code: "en",


     hi: {
       name: "typeform_with_paymentid_adults_v2",
       language_code: "hi",
     },
   },
   shared: {
     components: [
       {
         type: "button",
         sub_type: "url",
         index: 0,
         parameters: [
           {
             type: "text",
             text: "{{ payment_id }}",
           },
         ],
       },
       {
         type: "body",
         parameters: [
           {
             type: "text",
             text: "{{ payment_id }} ",
           },
         ],
       },
     ],
   },
 },
 [USECASES_ENUM.ONBOARDING_ADULTS_MENTOR]: {
   localized: {
     name: "typeform_with_paymentid_adults_v1",
     language_code: "en",


     hi: {
       name: "typeform_with_paymentid_adults_v1",
       language_code: "hi",
     },
   },
   shared: {
     components: [
       {
         type: "button",
         sub_type: "url",
         index: 0,
         parameters: [
           {
             type: "text",
             text: "{{ payment_id }}",
           },
         ],
       },
       {
         type: "body",
         parameters: [
           {
             type: "text",
             text: "{{ payment_id }} ",
           },
         ],
       },
     ],
   },
 },
 [USECASES_ENUM.ONBOARDING_KIDS]: {
   localized: {
     name: "typeform_with_paymentid_kids_v1",
     language_code: "en",


     hi: {
       name: "typeform_with_paymentid_kids_v1",
       language_code: "hi",
     },
   },
   shared: {
     components: [
       {
         type: "button",
         sub_type: "url",
         index: 0,
         parameters: [
           {
             type: "text",
             text: "{{ payment_id }}",
           },
         ],
       },
       {
         type: "body",
         parameters: [
           {
             type: "text",
             text: "{{ payment_id }} ",
           },
         ],
       },
     ],
   },
 },
 [USECASES_ENUM.PAYMENT_CONFIRMATION]: {
   localized: {
     outbound: {
       name: "sales_invoice_payment_confirmation_v2",
       language_code: "ta",


       hi: {
         name: "sales_invoice_payment_confirmation_v2",
         language_code: "hi",
       },
     },


     leads: {
       name: "sales_invoice_payment_confirmation_v2",
       language_code: "en",


       hi: {
         name: "sales_invoice_payment_confirmation_v2",
         language_code: "hi",
       },
     },
   },
   shared: {
     components: [
       {
         type: "header",
         parameters: [
           {
             type: "document",
             document: {
               link: `https://app.gosupernova.live/api/invoice/{{ paymentId }}`,
               filename: "Invoice.pdf",
             },
           },
         ],
       },
     ],
   },
 },
 [USECASES_ENUM.OUTBOUND_FORM_KIDS]: {
   localized: {
     name: "outbound_kids_new_form_v1",
     language_code: "en",
     vars: {
       imageUrl:
         "https://imagedelivery.net/j8wPfYmr-_HSd9btB36ffA/70548b0c-cc62-4270-0e51-8df5ea445000/1080x1080",
     },


     hi: {
       name: "registeredkidsoutboundmessage",
       language_code: "hi",
       vars: {
         imageUrl:
           "https://imagedelivery.net/j8wPfYmr-_HSd9btB36ffA/a0518317-fd8d-438e-d384-1e9ab2b98600/1080x1080",
       },
     },
   },
   shared: {
     components: [
       {
         type: "header",
         parameters: [
           {
             type: "image",
             image: {
               link: "{{ imageUrl }}",
             },
           },
         ],
       },
       {
         type: "body",
         parameters: [
           {
             type: "text",
             text: "{{ name }}",
           },
           {
             type: "text",
             text: "{{ grade }}, {{ board }}",
           },
         ],
       },
     ],
   },
 },
 [USECASES_ENUM.OUTBOUND_FORM_ADULTS]: {
   localized: {
     name: "adultoutboundmessage",
     language_code: "ta",
     vars: {
       videoUrl: "https://r2.gosupernova.live/adult_outbound.mp4",
     },


     hi: {
       name: "adultoutboundmessage",
       language_code: "hi",
       vars: {
         videoUrl: "https://r2.gosupernova.live/Sale-design-for-adults.mp4",
       },
     },
   },
   shared: {
     components: [
       {
         type: "header",
         parameters: [
           {
             type: "video",
             video: {
               link: "{{ videoUrl }}",
             },
           },
         ],
       },
       {
         type: "body",
         parameters: [
           {
             type: "text",
             text: "{{ name }}",
           },
         ],
       },
     ],
   },
 },
 [USECASES_ENUM.KIDS_ARE_YOU_INTERESTED_FOLLOW_UP]: {
   localized: {
     name: "kids_are_you_interested_follow_up",
     language_code: "en",
     vars: {
       videoUrl:
         "https://r2.gosupernova.live/kids_are_you_interested_follow_up_video.mp4",
     },
   },
   shared: {
     components: [
       {
         type: "header",
         parameters: [
           {
             type: "video",
             video: {
               link: "{{ videoUrl }}",
             },
           },
         ],
       },
     ],
   },
 },
 [USECASES_ENUM.INTEREST_CAPTURING_MESSAGE_ADULTS]: {
   localized: {
     name: "interest_capturing_message_adults_v2",
     language_code: "en",
     vars: {
       videoUrl:
         "https://r2.gosupernova.live/interest_capturing_message_adults.mp4",
     },
   },
   shared: {
     components: [
       {
         type: "header",
         parameters: [
           {
             type: "video",
             video: {
               link: "{{ videoUrl }}",
             },
           },
         ],
       },
     ],
   },
 },
 [USECASES_ENUM.INTEREST_CAPTURING_MESSAGE_ADULTS_POSTER]: {
   localized: {
     name: "interest_capturing_message_adults_v1",
     language_code: "en",
     vars: {
       imageUrl:
         "https://imagedelivery.net/j8wPfYmr-_HSd9btB36ffA/8fb23210-f3d2-48a9-79ec-ef68ae384000/1080x1080",
     },
   },
   shared: {
     components: [
       {
         type: "header",
         parameters: [
           {
             type: "image",
             image: {
               link: "{{ imageUrl }}",
             },
           },
         ],
       },
     ],
   },
 },
 [USECASES_ENUM.OTP_VERIFY]: {
   localized: {
     name: "otpverify",
     language_code: "en",
   },
   shared: {
     components: [
       {
         type: "body",
         parameters: [
           {
             type: "text",
             text: "{{ otp }}",
           },
         ],
       },
     ],
   },
 },
 [USECASES_ENUM.UNCLEAR_USER_FIRST_INTERACTION]: {
   localized: {
     name: "1st_message_whatsapp_template",
     language_code: "en",
     vars: {},
   },
   shared: {
     components: [],
   },
 },
 [USECASES_ENUM.OUTBOUND_NEW_ADULTS_2]: {
   localized: {
     name: "adult_new_outbound_template_2",
     language_code: "en",
   },
   shared: {
     components: [],
   },
 },
 [USECASES_ENUM.OUTBOUND_NEW_ADULTS_1]: {
   localized: {
     name: "adult_new_outbound_template_1_v1",
     language_code: "en",
     vars: {
       videoUrl:
         "https://r2.gosupernova.live/interest_capturing_message_adults.mp4",
     },
   },
   shared: {
     components: [
       {
         type: "header",
         parameters: [
           {
             type: "video",
             video: {
               link: "{{ videoUrl }}",
             },
           },
         ],
       },
     ],
   },
 },
 [USECASES_ENUM.ADULT_NITYA_HACKATHON_VIDEO]: {
   localized: {
     name: "adult_untouched_nithya_hackathon_video",
     language_code: "en",
     vars: {
       videoUrl:
         "https://r2.gosupernova.live/interest_capturing_message_adults.mp4",
     },
   },
   shared: {
     components: [
       {
         type: "header",
         parameters: [
           {
             type: "video",
             video: {
               link: "{{ videoUrl }}",
             },
           },
         ],
       },
     ],
   },
 },
 [USECASES_ENUM.AFTER_ADULT_NITYA_HACKATHON_VIDEO]: {
   localized: {
     name: "template_that_should_go_after_nithya_hackathon_video",
     language_code: "en",
     vars: {},
   },
   shared: {
     components: [],
   },
 },
 [USECASES_ENUM.ADULT_FEE_COMPARE_POSTER]: {
   localized: {
     name: "adult_untouched_compare_poster_text_v1",
     language_code: "en",
     vars: {
       imageUrl:
         "https://imagedelivery.net/j8wPfYmr-_HSd9btB36ffA/8fb23210-f3d2-48a9-79ec-ef68ae384000/1080x1080",
     },
   },
   shared: {
     components: [
       {
         type: "header",
         parameters: [
           {
             type: "image",
             image: {
               link: "{{ imageUrl }}",
             },
           },
         ],
       },
     ],
   },
 },
 [USECASES_ENUM.ADULT_SURVEY_FOR_ACTION]: {
   localized: {
     name: "adult_untouched_survey_for_action",
     language_code: "en",
     vars: {},
   },
   shared: {
     components: [],
   },
 },
 [USECASES_ENUM.POST_ONBOARDING_ACTIVITY_REMINDER]: {
   localized: {
     name: "sales_blast_app_adult_automated_wa_flow_v2",
     language_code: "en",
     vars: {
       imageUrl:
         "https://imagedelivery.net/j8wPfYmr-_HSd9btB36ffA/8319b48e-6296-4962-cc8b-bc9a1a715400/1080x1080",
     },


     hi: {
       name: "sales_blast_app_adult_automated_wa_flow_v2",
       language_code: "en",
       vars: {
         imageUrl:
           "https://imagedelivery.net/j8wPfYmr-_HSd9btB36ffA/91d24cf1-d140-452d-5d20-95c85b9e1000/1080x1080",
       },
     },
   },
   shared: {
     components: [
       {
         type: "header",
         parameters: [
           {
             type: "image",
             image: {
               link: "{{ imageUrl }}",
             },
           },
         ],
       },
     ],
   },
 },
 [USECASES_ENUM.ADULT_NITYA_HACKATHON_VIDEO_V2]: {
   localized: {
     name: "sales_blast_adult_untouched_nithya_hackathon_video_feb5",
     language_code: "en",
     vars: {
       videoUrl:
         "https://r2.gosupernova.live/Nitya_Hackathon_New_Video_Square_1_shyrbo.mp4",
     },
   },
   shared: {
     components: [
       {
         type: "header",
         parameters: [
           {
             type: "video",
             video: {
               link: "{{ videoUrl }}",
             },
           },
         ],
       },
     ],
   },
 },
 [USECASES_ENUM.APP_ADULT_ABANDONED_ONBOARDING_ACTIVITY]: {
   localized: {
     name: "app_adult_abandoned_onboarding_tamil_feb10",
     language_code: "en",
     vars: {
       imageUrl:
         "https://imagedelivery.net/j8wPfYmr-_HSd9btB36ffA/9e8ff889-aa0e-4122-8ca5-0c96d35a0900/1080x1080",
     },
   },
   shared: {
     components: [
       {
         type: "header",
         parameters: [
           {
             type: "image",
             image: {
               link: "{{ imageUrl }}",
             },
           },
         ],
       },
     ],
   },
 },
 [USECASES_ENUM.ADULTS_UNTOUCHED_V3_FEB20]: {
   localized: {
     name: "adults_untouched_v3_feb20",
     language_code: "en",
     vars: {
       videoUrl:
         "https://res.cloudinary.com/l8-cones-interactive-private-limited/video/upload/v1739977550/Hackathon_New_Video_Square_2_a6svjs.mp4",
     },
   },
   shared: {
     components: [
       {
         type: "header",
         parameters: [
           {
             type: "video",
             video: {
               link: "{{ videoUrl }}",
             },
           },
         ],
       },
     ],
   },
 },
 [USECASES_ENUM.ADULTS_UNTOUCHED_V3_FEB20_COMPARE_POSTER]: {
   localized: {
     name: "adults_untouched_v3_feb20_compare_poster",
     language_code: "en",
     vars: {
       imageUrl:
         "https://res.cloudinary.com/l8-cones-interactive-private-limited/image/upload/v1740052117/image__6__720_tnaaer.png",
     },
   },
   shared: {
     components: [
       {
         type: "header",
         parameters: [
           {
             type: "image",
             image: {
               link: "{{ imageUrl }}",
             },
           },
         ],
       },
     ],
   },
 },
 [USECASES_ENUM.APP_ADULT_AFTER_ENTERING_WA_FLOW]: {
   localized: {
     hi: {
       name: "app_adult_after_entering_wa_flow_hindi_main_inbox",
       language_code: "en",
       vars: {
         imageUrl:
           "https://res.cloudinary.com/l8-cones-interactive-private-limited/image/upload/v1740115628/sale_design_for_adults__25___2__720_n2qfwe.png",
       },
     },
   },
   shared: {
     components: [
       {
         type: "header",
         parameters: [
           {
             type: "image",
             image: {
               link: "{{ imageUrl }}",
             },
           },
         ],
       },
     ],
   },
 },
 [USECASES_ENUM.APP_ADULT_AFTER_ENTERING_WA_FLOW_TAMIL]: {
   localized: {
     name: "app_adult_after_entering_wa_flow_tamil_main_inbox",
     language_code: "en",
     vars: {
       imageUrl:
         "https://res.cloudinary.com/l8-cones-interactive-private-limited/image/upload/v1740115642/2__5___5__720_ixdwgf.png",
     },
   },
   shared: {
     components: [
       {
         type: "header",
         parameters: [
           {
             type: "image",
             image: {
               link: "{{ imageUrl }}",
             },
           },
         ],
       },
     ],
   },
 },
 [USECASES_ENUM.ADULTS_UNTOUCHED_V3_COMPARE_POSTER_MAR1]: {
   localized: {
     name: "adults_untouched_v3_compare_poster_mar1",
     language_code: "en",
     vars: {
       imageUrl:
         "https://res.cloudinary.com/l8-cones-interactive-private-limited/image/upload/v1740823309/compare_ad_rplyjx.png",
     },
   },
   shared: {
     components: [
       {
         type: "header",
         parameters: [
           {
             type: "image",
             image: {
               link: "{{ imageUrl }}",
             },
           },
         ],
       },
     ],
   },
 },
};


export default TEMPLATES;



