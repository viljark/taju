let locales = {
  et: {
    chooseLanguage: "Vali enda keel",
    hello: "Tere",
    forward: "Edasi",
    agree: "Jah",
    disagree: "Ei",
    dunno: "Ei tea",
    years: "aastat",
    survey: "Küsimustik",
    choose: "--- Vali ---",
    nophone: "Ole hea ja tee antud eksperiment arvutiga, mobiiltelefoni ja tahvelarvuti ekraan jääb väikeseks.",
    share: {
      1: "jaga Facebook'is!",
      2: "Kui sulle meeldis see eksperiment ja tahaksid aidata, siis "
    },
    joke: {
      1: "Mees läks baari, tükk asfaldi kaenlas",
      2: "Kaks õlut!: ütles ta baaripidajale",
      3: "Üks mulle ja üks teepeale."
    },
    questionIB: "Kas nägid viimases katses midagi tavatut, mida eelmistes katsetes ei olnud?", 
    questionUes: {   // Ues - Unexpected Stimulus
      1: "Kui märksid midagi tavatut, siis kas see liikus?",
      2: "Kui märkasid midagi tavatut, siis mis kujuga see oli?",  // päisesse tekst "Juhul kui sa midagi ei märganud, proovi vastusevariant ära arvata."
      3: "Kui märkasid midagi tavatut, siis mis värvi see oli?",
      4: "Kui märkasid midagi tavatut, siis mis suunas see liikus?",
      5: "Kas oled sellist ülesannet kunagi varem teinud?",
      6: "Kas ootasid millegi tavatu ilmumist ette?"
    },
    questionRaal: {
      1: "Kas kasutad sülearvutit või lauaarvutit?",
      2: "Kui vana on su arvuti?",
      3: "Mitu tolli on su ekraani diagonaal? Kui ei tea, kirjuta Ei tea", //kas siin saab kuidagi Ei tea jutumärkidesse panna?
      4: "Kas sul on laiekraan monitor?",
    },
    questionKI: {
      1: "Vanus",
      2: "Sugu",
      3: "Vali JAH - kui sul on normaalne nägemine või kandsid prille/ läätsi. Vali EI - kui peaksid kandma prille, kuid ei kandnud.",  //sõnastus
      4: "Haridus",
      5: "Vali keskmine number ja jäta see meelde, küsime kohe seda Sinult",
      6: "Mis oli eelmisel lehel see number mille pidid meelde jätma?"
    },
    questionTest: "Mis number oli keskmine?",
    answerIB: {
      1: "Jah",
      2: "Ei"
    },
    answerUes: {
      11: "Jah",
      12: "Ei",

      21: "Ruut",
      22: "Rist",
      23: "Kleit",
      24: "Kastekann",

      31: "Kollane",
      32: "Sinine",
      33: "Punane",
      34: "Valge",

      41: "Ülalt alla",
      42: "Alt üles",
      43: "Vasakult paremale",
      44: "Paremalt vasakule",

      51: "Jah",
      52: "Ei",
      53: "Ei mäleta",

      61: "Jah",
      62: "Ei"
    },
    answerRaal: {
      11: "Sülearvuti",
      12: "Lauaarvuti",
      13: "Telefoni",
      14: "Tahvelarvutit",

      21: "aastat",

      31: "tolli",

      41: "Jah",
      42: "Ei"
    },
    answerKI: {
      11: "aastat",

      21: "Naine",
      22: "Mees",

      31: "Jah",
      32: "Ei",
           
      41: "Põhiharidus",         // tarvis täpsustada.
      42: "Keskharidus",
      43: "Kesk-eriharidus",
      44: "Kõrgharidus - Bakalaureus",
      45: "Kõrgharidus - Magister",
      46: "Kõrgharidus - Doktorantuur",

      51: "646",
      52: "128",
      53: "446",
      54: "987",
      55: "023"
    },

    answerTest: "446",
    sawit: "Järgnevalt saad täpsustada mida nägid.",
    sawitnot: "Isegi kui sa midagi ei märganud, proovi pakkuda mis see olla võis. ",
    alert: {
      1: "Mitu põrget lugesid?",
      2: "Väga hea. Jätkamiseks vajuta OK!",
      3: "Su täpsus pole veel piisav. Suuname Su harjutusse tagasi, et saaksid veel proovida.",
      4: "Pallid põrkasid tegelikult "
    },
    tutorial: {
      1: "Ülesanne",
      2: "Järgmisel lehel kuvatakse sinu ette hall kast liikuvate pallidega. " +
      "Sinu ülesanne on kolme erineva suurusega pallide hulgast jälgida just sellise suurusega palle.",
      3: "Sa pead lugema, mitu korda nad põrkuvad vastu kasti seinu. Katse lõpus küsitakse sinult põrgete arvu.",
      4: "   < --- Loe SELLE suurusega pallide põrkeid!"
    },
    endspeech: {
      1: "Täname, et osalesid tajukatses. ",
      2: "Kui sul on selle eksperimendi kohta küsimusi või kommentaare võid pärida - andertamm@gmail.com",
      3: "Ja ongi kõik."
    },
    informed: {
      1: "Informeeritud nõusolek",
      2: "Käesoleva eksperimendi eesmärk on uurida katseisiku tähelepanu ja taju erinevas " +
      "suuruses objektide jälgmisel.",
      3: "Selle eksperimendi tegemine võtab 5-7 minutit aega",
      4: "Sa võid iga hetk katses osalemise katkestada.",
      5: "See eksperiment viiakse läbi Tartu Ülikooli seminaritöö raames.",
      6: "Ma nõustun selleks eksperimendis osalema."
    },
    perf: {
      1: "Alustame!",
      2: "Kuna tegemist on tähelepanu ja taju ülesandega, palun Sul seda katset teha ilma kõrvaliste segajateta.",
      3: "Selleks, et katseprogramm veatult joosta saaks sulge palun üleliigsed programmid ja brauseri lisalehed/tab'id.",
      4: "Kui peaksid kandma prille, siis palun pane need ette",
      5: "Alustuseks teeme prooviülesande. Sellega saad harjutada ülesande lahendamist."
    }


    


    
  },
  en: {
    chooseLanguage: "Choose your language",
    hello: "Hello",
    forward: "Continue",
    agree: "Yes",
    disagree: "No",
    dunno: "Don't know",
    years: "years",
    survey: "Survey",
    choose: "--- Choose ---",
    nophone: "Please complete the experiment on a desktop computer or on a laptop. Smartphones and tablets don't have the screensize to display the experiment properly.",
    share: {
      1: "share on Facebook!",
      2: "If you liked this experiment and want to help then - "
    },
    joke: {
      1: "Man went to a bar with a piece of tarmac under his arm.",
      2: "Two beers, please! ",
      3: "One for me and one for the road",
    },
    questionIB: "On that last trial of the task, did you notice anything that was not there on previous trials?",
    questionUes: {   // Ues - Unexpected Stimulus
      1: "If you did notice something else, was it moving?",
      2: "If you did notice something else, what shape was it",  // päisesse tekst "Juhul kui sa midagi ei märganud, proovi vastusevariant ära arvata."
      3: "If you did notice something else, what color was it? ",
      4: "If it was moving, what direction was it moving in? ",
      5: "Have you solved this kind of test before?",
      6: "Did you anticipate to see anything unexpected during the test?"
    },
    questionRaal: {
      1: "What type of device are you using to run this experiment?",
      2: "How old is the computer you are using approximately?",
      3: "What is the approximate diagonal size of your computer monitor in inches?. Type 'Don't know', if you don't know.", //kas siin saab kuidagi Ei tea jutumärkidesse panna?
      4: "Is your computer monitor a widescreen monitor?",
    },
    questionKI: {
      1: "Age",
      2: "Gender",
      3: "Do you have normal or corrected-to-normal vision?",  //sõnastus
      4: "Education",
      5: "Pick the middle number and memorize it, it will be asked soon.",
      6: "What was the number you had to memorize?"
    },
    questionTest: "Which was in the middle?",
    answerIB: {
      1: "Yes",
      2: "No"
    },
    answerUes: {
      11: "Yes",
      12: "No",

      21: "A square",
      22: "A cross",
      23: "A dress",
      24: "A watering can",

      31: "Yellow",
      32: "Blue",
      33: "Red",
      34: "White",

      41: "Down",
      42: "Up",
      43: "Right",
      44: "Left",

      51: "Yes",
      52: "No",
      53: "Don't remember'",

      61: "Yes",
      62: "No"
    },
    answerRaal: {
      11: "A laptop",
      12: "A desktop",
      13: "A smartphone",
      14: "A tablet",

      21: "years",

      31: "inches",

      41: "Yes",
      42: "No"
    },
    answerKI: {
      11: "years",

      21: "Woman",
      22: "Man",

      31: "Yes",
      32: "No",

      41: "Some high school",         // tarvis täpsustada.
      42: "High school graduate",
      43: "Some college",
      44: "Bachelor's degree",
      45: "Master's degree",
      46: "Professional degree",

      51: "646",
      52: "128",
      53: "446",
      54: "987",
      55: "023"
    },
    answerTest: "446",
    sawit: "Describe what you saw.",
    sawitnot: "Even if you didn't see anyting, try to guess.",
    alert: {
      1: "How many bounces did you count?",
      2: "Very good, press OK to continue.",
      3: "Your accuracy wasn't enough. We'll get you back to the tutorial so you can try again.",
      4: "The balls bounced really in total "
    },
    tutorial: {
      1: "Task",
      2: "In the next page you will be shown a grey box with moving and bouncing balls. " +
      "Your task is to follow this particular size of balls from three different sizes.",
      3: "You have to count the bounces the balls with this particular size make from the walls of the box.",
      4: "   < --- Count the bounces of the balls with THIS size!"
    },
    endspeech: {
      1: "Thank you for participating in this experiment. ",
      2: "If you have any questions or comments about the experiment feel free to e-mail me at andertamm@gmail.com",
      3: "This was it."
    },
    informed: {  // inglisekeelne informeeritud nõusolek
      1: "Informed consent",
      2: "The goal of this experiment is to study the perception and attention of the participant" +
      " in following objects with different sizes.",
      3: "This experiment takes 5-7 minutes to complete.",
      4: "You can stop participating at any time.",
      5: "This experiment is being conducted for a study done in Tartu University.",
      6: "I agree to participate in this experiment"
    },
    perf: {
      1: "Let's begin!",
      2: "As we are studying perception and attention I would ask you to do this experiment without any prominent distractors.",
      3: "For the program to function flawlessly please close any other programs and browser tabs.",
      4: "If you should wear glasses, then please put them on",
      5: "We'll start with a practice task. The first one is for you to practice counting."
    }

    




  }
};

export default locales;

