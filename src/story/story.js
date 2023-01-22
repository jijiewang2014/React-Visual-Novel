// bg
const microphone = require("./bg/microphone.jpeg");
const entrance = require("./bg/enter5.png");
const purple = require("./bg/purple-bg.png");
const red = require("./bg/red-bg.png");
const yellow = require("./bg/yellow-bg.png");
const green = require("./bg/green-bg.png");
// sprites
const bn = require("./sprites/block-neutral.png");
const bh = require("./sprites/block-happy.png");
const bp = require("./sprites/block-pout.png");
const h1 = require("./sprites/h1.png");
const h2 = require("./sprites/h2.png");
const h3 = require("./sprites/h3.png");
const h4 = require("./sprites/h4.png");
const s1 = require("./sprites/s1.png");
const s2 = require("./sprites/s2.png");
const s3 = require("./sprites/s3.png");
const s4 = require("./sprites/s4.png");
const a1 = require("./sprites/a1.png");
const a2 = require("./sprites/a2.png");
const a3 = require("./sprites/a3.png");
const a4 = require("./sprites/a4.png");
const w1 = require("./sprites/w1.png");
const w2 = require("./sprites/w2.png");
const w3 = require("./sprites/w3.png");
const w4 = require("./sprites/w4.png");




let story = [
  {
    bg: entrance,
    bgm: "",
    sprite: "",
    speaker: "",
    text: "Which emotion calls to you today? Click anywhere to continue."
  },
  {choicesExist: true, receiveJump: "emotions"},
  {routeBegins: "h", 
  sprite: h1,
  speaker: "Hannah", 
  bg: yellow,
  voice: require("./sounds/Hannah 01.mp3"),
  text: "Hello! I'm Hannah. I heard that you're looking for happy thoughts right now. How fun!",
  },
  {voice: require("./sounds/Hannah 02.mp3"), text: "Let's think about the nice things that happened today. It can be anything, small or big."},
  {voice: require("./sounds/Hannah 03.mp3"),
    text: "For example, today I woke up in my warm bed. I ate lunch with my wonderful friends and shared slices of orange with them. The orange was very fresh and juicy."},
  {
    voice: require("./sounds/Hannah 04.mp3"),
    text: "The school hallways smelled a bit better than usual. And I passed my physics test!"},
  {
    voice: require("./sounds/Hannah 05.mp3"),
  text: "My carpool got safely to and from school. I saw daffodils swaying in the breeze. The view of the sky from my window is lovely. All of these things made me happy."},
  {
    voice: require("./sounds/Hannah 06.mp3"),
    text: "Have you taken a second to think about what made you happy today?"},
  {choicesExist: true, receiveJump: "hYesNo"},
  {
    routeBegins: "hYes",
    voice: require("./sounds/Hannah 07.mp3"),
    text: "Great!",
    jumpTo: "hPartTwo"
  },
  {
   routeBegins: "hNo",
   voice: require("./sounds/Hannah 08.mp3"),
   text: "I'll wait for you to think about it.",
   jumpTo: "hPartTwo"
  },
  {
    receiveJump: "hPartTwo",
    voice: require("./sounds/Hannah 09.mp3"),
    text: "Now that we've thought about our day, it helps to remember that some days we'll struggle more with findng the positive side of things."
  },
  {
    voice: require("./sounds/Hannah 010.mp3"),
    text: "On these days, it helps to focus on what didn't go wrong, or things that we usually take for granted."
  },
  {
    voice: require("./sounds/Hannah 011.mp3"),
    text: "Enjoying basic senses, for example. Or simply being alive."},
  {
    voice: require("./sounds/Hannah 012.mp3"),
    text: "Then, there are days that go spectacularly, and everything seems aligned. I like to make note of it when this happens, because cherishing those bright memories helps me feel better in rainier times.",
    sprite: h2,
  },
  {
    voice: require("./sounds/Hannah 013.mp3"),
    text: "On good days, it’s as if life does the hard work for me, and I just meet it halfway to appreciate it and bring myself joy."},
  {
    voice: require("./sounds/Hannah 014.mp3"),
    text: "It’s easier to keep happy when I’m eating and sleeping well. Whenever I sleep late because I had too much homework, I’m irritated and annoyed the next day. "},
  {voice: require("./sounds/Hannah 015.mp3"),text: "Sleep deficiency can lead to mood swings, memory issues, weaker immune systems, high blood pressure, and anger and impulse control problems. So it helps to remember that teens need 8-10 hours every night."},
  {
    sprite: h3,
    voice: require("./sounds/Hannah 016.mp3"),
    text: "Spending time on my hobbies is another way I stay happy. I really like collecting and taking care of plants! They’re so pretty, especially the crispy wave fern. That’s my favorite."
  },
  {
    voice: require("./sounds/Hannah 017.mp3"),
    text: "It’s really relaxing to water my plants and learn new facts about them. Did you know that orchids have the tiniest seeds in the world?"},
  {
    sprite: h4,
    voice: require("./sounds/Hannah 018.mp3"),
    text: "Let’s do a quick meditative exercise for boosting joy. First, sit down and get as comfortable as you can. Straighten your posture, and relax through your muscles."
  },
  {
    voice: require("./sounds/Hannah 019.mp3"),
    text: "Inhale through your nose, and exhale through your mouth. Let your eyes fall close, if it makes you comfortable. Scan through your body, head-to-toe, and notice any tense areas."},
  {
    voice: require("./sounds/Hannah 020.mp3"),
    text: "Focus on your breathing, and stay grounded in your body. If your thoughts are distracting you, imagine them as specks of light that drift away. Visualize a warm ball of light hovering above your head."},
  {
    voice: require("./sounds/Hannah 021.mp3"),
    text: "The ball of light holds a feeling of happiness, fulfillment, and satisfaction. It drifts down to your face, next to your neck, then down to your chest. It’s warm, bringing a sense of ease and joy as it goes."},
  {
    voice: require("./sounds/Hannah 022.mp3"),
    text: "It continues to your stomach, your legs, your knees, and down to the floor. Its comfortable warmth expands through your body. Focus on that warm, gentle joy. "},
  { 
    voice: require("./sounds/Hannah 023.mp3"),
    text: "And gradually bring your awareness back to your surroundings. If your eyes are closed, feel free to open them."},
  {
    voice: require("./sounds/Hannah 024.mp3"),
    text: "Hopefully that helped you feel happier and more grounded. It definitely made me feel more relaxed! It was absolutely wonderful to talk to you."},
  {
    sprite: h1,
    voice: require("./sounds/Hannah 025.mp3"),
    text: "If you had fun talking to me, please come back again. Have a happy rest of your day, and goodbye!",
    jumpTo: "leave"
 },
 {
  routeBegins: "s",
  sprite: s1,
  voice: require("./sounds/S 01.mp3"),
  speaker: "Sable",
  bg: purple,
  text: "Salutations. I'm Sable. So you're feeling sad, like a despondent tune is haunting your head. In that case, you can rely on me."
},
{voice: require("./sounds/S 02.mp3"), text: "What is causing these feelings of sadness? Many high schoolers struggle with feelings of isolation, alienation, and not fitting in. Are you feeling like this today?"},
{choicesExist: true},
{
  routeBegins: "sYes",
  sprite: s2,
  voice: require("./sounds/S 03.mp3"),
  text: "I understand, and I’m here to support you through this feeling. Your emotions are valid, and you have been doing a good job at holding this turmoil. You are certainly not alone."
},
{
  voice: require("./sounds/S 04.mp3"),
  text: "People have an evolutionary need to seek connection. So when your needs are not being satisfied, it is natural to feel hurt."
},
{
  sprite: s3,
  voice: require("./sounds/S 05.mp3"),
  text: "Perhaps you can cope with these feelings by checking if you are catastrophizing. It is easy to spiral into worry when something impacts you strongly."},
{ voice: require("./sounds/S 06.mp3"), text: "In these moments, keep in mind that you don’t know why people act the way they do. "
},
{voice: require("./sounds/S 07.mp3"), text: "If you feel like certain people dislike you or are judging you, it is possible they are just making careless decisions."}, 
{voice: require("./sounds/S 08.mp3"),text: "Reading too closely into a situation by making assumptions is not good for your mental state. Similarly, not giving things a darker, deeper meaning can reduce your pain."},
{
  sprite: s1,
  voice: require("./sounds/S 09.mp3"),
  text: "When you aren’t connecting strongly with people around you, social media can provide friendship."
},
{voice: require("./sounds/S 010.mp3"),text: "Subreddits exist for almost anything. You can also search for Discord groups focused on socializing, chilling, or fandom."},
{voice: require("./sounds/S 011.mp3"),text: "Entering a group with a clearly defined common ground can make interaction a lot easier. However, remember to stay safe and prevent sharing personal information."},
{voice: require("./sounds/S 012.mp3"),text: "Take your mind off your feelings by doing something that makes you happy by yourself. Journaling can inspire reflection, and it’s an outlet for expressing yourself."},
{voice: require("./sounds/S 013.mp3"),text: "Art can also serve as a positive distraction, and there are many mediums to explore. Working up a sweat through playing sports can get you excited enough to forget about your troubles."},
{voice: require("./sounds/S 014.mp3"),text: "Take care of your body as well. Eat balanced meals with fruits, vegetables, and whole grains to give yourself nourishment. Avoid excessive intake of caffeine. "},
{voice: require("./sounds/S 015.mp3"),text: "Get twenty minutes of sunshine every day, ideally during the morning. Find a stable sleep schedule that gives you enough energy to carry through the day."},
{voice: require("./sounds/S 016.mp3"),text: "Ultimately, there is no right way to socialize in high school. People exist with varying support needs."},
{voice: require("./sounds/S 017.mp3"),text: "There is no “correct” number of friends, and knowing more people does not necessarily mean your life will be brighter."},
{
  voice: require("./sounds/S 018.mp3"),
  text: "There is no need to conform to what you see around you in order to increase popularity. Live your life as you see fit, and customize your social network according to the personal tides of your desires.",
  jumpTo: "sPartTwo"
},
 
{
  routeBegins: "sNo",
  sprite: s2,
  text: "I see. In that case, let us move on.",
  voice: require("./sounds/S 019.mp3"),
  jumpTo: "sPartTwo"
},
{
  receiveJump: "sPartTwo",
  sprite: s4,
  voice: require("./sounds/S 020.mp3"),
  text: "I have two approaches for dealing with sadness to share with you today."
},
{voice: require("./sounds/S 030.mp3"),text: "The first approach is to write down five things you like about yourself. This will improve your view of yourself and your outlook on life."}, 
{voice: require("./sounds/S 031.mp3"),text: "Achieving happiness from an individual activity will make your well-being less dependent on the whims of others."},
{voice: require("./sounds/S 032.mp3"),text: "These five things can be physical or innate. Perhaps you are inspired by a compliment someone has given you. You might mention achievements you’d like to celebrate."}, 
{voice: require("./sounds/S 033.mp3"),text: "If you’re having trouble coming up with items, keep in mind that the act of staying alive and existing in this moment is worthy of recognition. If you have more than five things, write those down as well."},
{voice: require("./sounds/S 034.mp3"),text: "Once you are done, keep the paper to look back on later, in case you need a reminder of your strengths."},
{voice: require("./sounds/S 035.mp3"),text: "An alternative approach is to embrace your sadness. Sit in a comfortable position and let your breath flow through you. Scan through your body, from head to toe."},
{voice: require("./sounds/S 036.mp3"),text: "Are you feeling relaxed, or are you experiencing a significant amount of tension? Where are you feeling tension?"},
{voice: require("./sounds/S 037.mp3"),text: "How would you describe your feelings and physical state? Depleted? At rest? Sore? How does sadness exist in your body? Gently acknowledge it."},
{voice: require("./sounds/S 038.mp3"),text: "Understand your sadness by assigning it qualities. If your sadness was a color, what would it be? Describe your sadness as weather, a landscape, a taste, and a scent."},
{
  sprite: s2,
  voice: require("./sounds/S 039.mp3"),
  text: "Now that you've explored your emotions and assessed the meaning, our conversation comes to a conclusion. Though sadness is heavy to carry, may you navigate through it with grace. Until next time, farewell.",
  jumpTo: "leave"
},

//angry
{
  routeBegins:"a",
  sprite: a1,
  voice: require("./sounds/A 01.mp3"),
  bg: red,
  speaker: "Alexis",
  text: "Hi, I'm Alexis. You're angry? You are not alone. Let's get into it.",
},
{voice: require("./sounds/A 02.mp3"),text: "Anger is a natural reaction to life. It drives us to get on our feet and do something. Still, too much anger is overwhelming. Deal with anger by showing it in appropriate ways."},
{voice: require("./sounds/A 03.mp3"),text: "Is the world filling you with rage? Or are you mad at yourself?"},
{choicesExist: true},
{
  routeBegins: "aFirst",
  sprite: a2,
  voice: require("./sounds/A 04.mp3"),
  text: "Gotcha. Reality can be disappointing. And who sets those expectations? We do."}, 
{voice: require("./sounds/A 05.mp3"), text: "We think that the world should be a certain way, people should have treated us better, those in charge should be doing more, and our lives should be better."
},
{voice: require("./sounds/A 06.mp3"),text: "So part of dealing with anger is looking at our expectations."},
{voice: require("./sounds/A 07.mp3"),text: "Even though the world is unfair, the only thing we can do is look at what’s in front of us. Bad things happen without an excuse. There’s no reason for why the world doesn’t meet our standards."},
{voice: require("./sounds/A 08.mp3"),text: "Instead of asking why the world is failing us, we can look at our own future. And we can declare that our future is hopeful."},
{voice: require("./sounds/A 09.mp3"),text: "Anger doesn’t help you if it just sits there, doing nothing. Take control of it. When you feel like the world is burning down around you, decide what changes you can make. "},
{voice: require("./sounds/A 10.mp3"),text: "Find petitions to sign. Donate to charities and organizations. Sign up for community service events at your school. If you’re over eighteen, vote in local and general elections."},
{voice: require("./sounds/A 11.mp3"),text: "Care for your community. Volunteer in the local area, text your friends, and help students in lower grades. Doing good will make you feel good, and it’ll remind you that the world isn’t all bad."},
{voice: require("./sounds/A 12.mp3"),text: "There will be a lot that you can’t change. That’s okay. Social change depends on community."},
{voice: require("./sounds/A 13.mp3"),text: "Keep your eye on issues you really care about. Don’t overwhelm yourself with every single thing happening around the globe."},
{voice: require("./sounds/A 14.mp3"),text: "One way to preserve your energy is by limiting your social media feed. Stop checking the news every few seconds. Turn off your notifications."},
{voice: require("./sounds/A 15.mp3"),text: "Only look at the news at a specific time, not right after waking up or before going to bed."},
{
  sprite: a3,
  voice: require("./sounds/A 16.mp3"),
  text: "Yes, politicians make bad choices. The world struggles with poverty and warfare. People you talk to can be vicious and cruel. All these things might awaken your anger and need for justice."}, 
{voice: require("./sounds/A 17.mp3"),text: "But at the end of the day, look after yourself so you don’t burn out.",
  jumpTo: "aPartTwo"
},
{
  routeBegins: "aSecond",
  sprite: a2,
  voice: require("./sounds/A 18.mp3"),
  text: "Gotcha. Anger is such a harsh feeling to hold. But I’m not here to judge. I believe in you. You’re a great person, and you can move on from this. Your anger does not define you.",
},
{
  sprite: a3,
  voice: require("./sounds/A 19.mp3"),
  text: "If the feeling is intense, take a few deep breaths to ground yourself. Keep a steady pace. Go to the bathroom. Rinse your face with cool water. Take yourself away from your immediate urges for a while."
},
{
  sprite: a1,
  voice: require("./sounds/A 20.mp3"),
  text: "Everyone makes mistakes, and you do too. You can’t skip this part of life."},
{voice: require("./sounds/A 21.mp3"),text: "Most mistakes you make won’t completely wreck your life. See if you can move on from what made you feel angry. This is just a passing moment."},
{
  voice: require("./sounds/A 22.mp3"),
  text: "There might be some way to reduce the fallout. If there are big consequences, learn from them."
},
{voice: require("./sounds/A 23.mp3"),text: "If you want to vent or think about your anger, don’t let your inner critic get you. You are going to be okay. This event does not mean anything innately bad for you. You are good enough. You can move on from this."},
{
  voice: require("./sounds/A 24.mp3"),
  text: "Do you want to quickly get your mind off your anger? Try getting some exercise. Go for a run, bike ride, or do a cooperative team sport. The endorphins will cheer you up.",
jumpTo: "aPartTwo"
},
{
  voice: require("./sounds/A 25.mp3"),
  receiveJump: "aPartTWo",
  sprite: a4,
  text: "This mindfulness exercise can help diffuse your anger. Get in a cozy position to start. Take a deep breath in . . . and out. In this technique, we’ll be tightening and releasing all your muscles. We’ll try to get relaxed."
},
{voice: require("./sounds/A 26.mp3"),text: "Start with your facial muscles. Scrunch them up tight, and hold that for four beats. Then, slowly release them."},
{voice: require("./sounds/A 27.mp3"),text: "As you tense your muscles, inhale. When you relax, exhale. Move on to your neck. Do the same with your shoulders."},
{voice: require("./sounds/A 28.mp3"),text: "Imagine rain falling lightly on you. It washes over you. The rain carries away your tension and anger."},
{voice: require("./sounds/A 29.mp3"),text: "Feel the rain washing over your arms and hands as you tense and release. Feel it undo the tension in your torso."},
{voice: require("./sounds/A 30.mp3"),text: "Squeeze and release your leg muscles. Curl your toes up and straighten them back out. The rain has cooled you down. Now, it flows away, leaving you relaxed. Take another deep breath. You are okay."},
{voice: require("./sounds/A 31.mp3"),text: "Another way to relax is by journaling. Once you’ve gathered yourself a bit, write a letter to yourself. You can also write it to someone else, but you don’t have to show it to them."},
{voice: require("./sounds/A 32.mp3"),text: "Instead of ranting and raving, support yourself. Think about your perspective. What actions did you take? How do you physically feel? What triggered your anger? Express yourself."},
{
  sprite: a2,
  voice: require("./sounds/A 33.mp3"),
  text: "Okay, are you feeling better? I hope you are. Going through this with you definitely cleared my mind. If you want my advice again, you know where to find me. Bye!",
  jumpTo: "leave"
},

{
  routeBegins: "w",
  sprite: w1,
  speaker: "Walker",
  bg: green,
  voice: require("./sounds/W 01.mp3"),
  text: "Hey. I'm Walker. So you're feeling worried? What's up?"
},
{choicesExist: true},
 
//worried from peer pressure
{
  voice: require("./sounds/W 02.mp3"),
  routeBegins: "wFirst",
  text: "I think I know what you're getting at. Is it something like this?"
},
{choicesExist: true},
{
  voice: require("./sounds/W 03.mp3"),
  routeBegins: "wConsent",
  text: "That’s rough. There’s this social expectation to perform masculinity and femininity, to make advances and to receive them."},
{
  voice: require("./sounds/W 04.mp3"),
  text: "It can look like everyone is maturing and expecting you to follow, but that might not be true."},
{
  voice: require("./sounds/W 05.mp3"),
  text: "People exaggerate their experience. And everyone moves at their own pace.",
},
{
  voice: require("./sounds/W 06.mp3"),
  text: "Only do what you think is right, and do it on your own terms. You’re not obligated to do anything. Don’t have sex to be “cool”."},
{voice: require("./sounds/W 07.mp3"),text: "Your high school reputation won’t matter in a few years, but if you think you’ll regret it, just don’t. If someone keeps pushing beyond what makes you comfortable, they don’t deserve you."},
{
  sprite: w2,
  voice: require("./sounds/W 08.mp3"),
  text: "Consent matters. That’s the truth. Consent means everyone involved is excited to agree. Everyone involved is free to choose."},
{voice: require("./sounds/W 09.mp3"),text: "They’re not coerced, they’re sober, and they have equal power. And consent needs to exist during sex."
},
{voice: require("./sounds/W 010.mp3"),text: "Make sure your boundaries are rock solid. Here are some things you can say to resist pressure."},
{voice: require("./sounds/W 011.mp3"),text: "If you care about me, don’t tell me to do something I’m not ready for."},
{voice: require("./sounds/W 012.mp3"),text: "I can change my mind if I want. It’s my choice. I want to keep all the other parts of our relationship, but I don’t want to do this. No. Just no. No way."},
{
  sprite: w3,
  voice: require("./sounds/W 013.mp3"),
  text: "If someone is pressuring you to the point that you’re not safe, make a support system. Tell a friend where you are before meeting that person."
},
{voice: require("./sounds/W 014.mp3"),text: "If there’s a helpful administration at your school, report that potentially dangerous person."},
{voice: require("./sounds/W 015.mp3"),text: "Also, there are many sexual risks, but there are many things that reduce risk. Look into types of protection. Condoms, IUDs, pills, diaphragms."},
{voice: require("./sounds/W 016.mp3"),text: "Some protection lowers the chance of pregnancy, and some lower the chance of getting STIs, but not always at the same time. Nothing works perfectly, but you can still act safer."},
{
  sprite: w1,
  voice: require("./sounds/W 017.mp3"),
  text: "In the end, it’s about your pleasure and your happiness. Your body should be under your control. It’s not right for anyone else to violate that. Keep yourself safe out there.",
  jumpTo: "wPartTwo"
},

{
  routeBegins: "wSubstance",
  sprite: w1,
  voice: require("./sounds/W 018.mp3"),
  text: "That’s tough to go through. It helps to be clear about your opinion on drug use. Know where you stand. Once you have that, don’t let anyone else shake your faith."
},
{voice: require("./sounds/W 019.mp3"),text: "Probably, lots of people around you do drugs. But most teens don’t. You don’t have to."},
{voice: require("./sounds/W 020.mp3"),text: "If everyone you’re close to is pressuring you, intensely, to try drugs, you might need to start hanging out with a new crowd."},
{voice: require("./sounds/W 021.mp3"),text: "Not to say that drugs are some kind of moral marker, because that’s not true, but positive influence makes your decisions easier."},
{
  sprite: w2,
  voice: require("./sounds/W 022.mp3"),
  text: "Drugs can look fun, relaxing, or like an easy way to ditch your problems. But they also come with a whole bunch of health problems.",
},
{voice: require("./sounds/W 023.mp3"),text: "Weed can lead to slower reactions when driving, damaged coordination and movement. It might be connected to depression and anxiety. Marijuana is also addictive."},
{voice: require("./sounds/W 024.mp3"),text: "Meth can kill, even on the first try. It causes anxiety, confusion, paranoid thoughts, and aggression. Opioids are also deadly, and they lead to nausea, constipation, and comas."},
{voice: require("./sounds/W 025.mp3"),text: "Cocaine is easy to get addicted to, it damages the nervous system, and it can cause seizures."},
{
  sprite: w3,
  voice: require("./sounds/W 026.mp3"),
  text: "If you don’t want to do drugs, be clear about saying no. If people try to change your mind, don’t listen to them. Be firm. Assertive. You’ve got your own reasons for your decisions."
},
{voice: require("./sounds/W 027.mp3"),text: "You can say that your parents will be seriously mad at you. You don’t want to get arrested. You don’t want to hallucinate or deal with blackouts. You want to save money for something else."},
{voice: require("./sounds/W 028.mp3"),text: "Say that you don’t like the way drugs change you, or you don’t like the way it feels. Or just, “No thanks.”" },
{voice: require("./sounds/W 029.mp3"),text: "Once addicted to drugs, it’s hard to quit. Over 20 million Americans have an addiction. It’s not just about wanting to stop- drugs mess with your mind."},
{voice: require("./sounds/W 030.mp3"),text: "Chemically, your brain wants more. It creates withdrawal symptoms when someone addicted to a drug tries to quit."},
{voice: require("./sounds/W 031.mp3"),text: "Medical help might be needed to deal with the symptoms. Professionals can also prescribe medication to dampen withdrawal effects. Detox can be paired with counseling."},
{voice: require("./sounds/W 032.mp3"),text: "Remembering something that’s more important than drugs, like family or school or pets, can help with recovery."},
{
  sprite: w2,
  voice: require("./sounds/W 033.mp3"),
  text: "Commitment and consistency are the heart of it. Recovery is a long process, but it’s often worth it. Make decisions that you think are right. Stay safe.",
  jumpTo: "wPartTwo"
},
{
  routeBegins: "wOther",
  voice: require("./sounds/W 034.mp3"),
  text: "It’s hard to shrug off the call for you to agree to these things. It can seem like you gotta do it, like you have no choice. But you do have a choice. The choice to decide based on what you value.",
},
{voice: require("./sounds/W 035.mp3"),text: "Setting firm boundaries is the most direct way to deal with this. Say no, you don’t want to do that. You’re not interested. Whoever pressuring you needs to stop. Trust your intuition."},
{voice: require("./sounds/W 036.mp3"),text: "If you can’t be that direct, then set gentler boundaries. Say stuff like thanks, but no. What if we did something else? Can you delay it for a while?"},
{voice: require("./sounds/W 037.mp3"),text: "If you have to, make up an excuse. Think about the consequences. Think about how you feel, instead of going with the crowd."},
{
  voice: require("./sounds/W 038.mp3"),
  text: "If you have someone you can trust, like a mentor or family member or teacher, get their support. You don’t have to deal with pressure alone.",
  jumpTo: "wPartTwo",
},
//worried from school
{
  routeBegins: "wSecond",
  voice: require("./sounds/W 039.mp3"),
  text: "I get that. Sometimes I think I’m going nowhere. Like I’m trapped in this endless cycle of homework and expectations. Grades, standardized tests, college admissions - that’s so much pressure.",
},
{voice: require("./sounds/W 40.mp3"),text: "Since you’re stressed, you might be feeling some physical symptoms, like chest pain and trouble breathing. Sore eyes, problems sleeping, feeling tired, headaches, and indigestion are other examples. I’m here to help you get through it."},
{voice: require("./sounds/W 41.mp3"),text: "The best way to deal with school-related stress is one of the hardest things to do. Find a balance between school and relaxing. Make time to do something laid-back and not extremely competitive."},
{voice: require("./sounds/W 42.mp3"),text: "Your hobbies can also support your college app, even when they don’t give you trophies."},
{voice: require("./sounds/W 43.mp3"),text: "Do whatever helps you relax. Does being inside or outside help you chill out more?"},
{choicesExist: true},
 
{
  routeBegins: "wInside",
  voice: require("./sounds/W 44.mp3"),
  text: "You can try meditating, cooking, baking, crafting, or listening to music.",
  jumpTo: "wSchoolContinue"
},
{
  routeBegins: "wOutside",
  voice: require("./sounds/W 45.mp3"),
  text: "You can try looking at nature, running, biking, swimming, or taking walks through the neighborhood.",
  jumpTo: "wSchoolContinue"
},
{
  receiveJump: "wSchoolContinue",
  sprite: w3,
  voice: require("./sounds/W 46.mp3"),
  text: "It seems like there's no time to do this stuff. There’s always some piece of homework that’s more important, or a big test that’s coming up. But if you make relaxing a priority, time will appear."
},
{voice: require("./sounds/W 47.mp3"),text: "Keeping a planner is useful. Block out chunks of time for not doing school-related things. In your planner, also write down events and assignments that are coming up. Then, no tests will catch you off-guard."},
{voice: require("./sounds/W 48.mp3"),text: "If that isn’t working, the problem is probably with your workload. If one class is stressing you out and dumping a bunch of work on you, talk to the teacher."},
{voice: require("./sounds/W 49.mp3"),text: "Ask for accommodations, there’s a good chance they’ll extend your deadline or give you extra help."},
{voice: require("./sounds/W 50.mp3"),text: "You don’t have to race against time if there’s an easy way to push back due dates."},
{voice: require("./sounds/W 51.mp3"),text: "If there are office hours for that class, go to them. Talk to a tutor or a student who understands that class and listen for tips. Use your resources."},
{voice: require("./sounds/W 52.mp3"),text: "If extracurriculars are stressing you out more than schoolwork, look at your priorities. Do you really need to be entering fifteen different contests and going to club meetings every day?"},
{
  sprite: w2,
  voice: require("./sounds/W 53.mp3"),
  text: "Focus on what’s important to you. Ignore the other burdens. Don’t let them waste your time."
},
{voice: require("./sounds/W 54.mp3"),text: "Your health is important. You can’t study without a clear head. Try to get about nine hours of sleep every day. That means, don’t pull all-nighters. "},
{voice: require("./sounds/W 55.mp3"),text: "Health also involves mental health. The way you think about school changes how stressed you are. Affirmations can help you keep a relaxed, positive mindset."},
{voice: require("./sounds/W 56.mp3"),text: "You can say them in your head in the middle of school, or you can say them out loud while looking into a mirror. Here, say some with me."},
{voice: require("./sounds/W 57.mp3"),text: "I will do my best. I accept my efforts. I am great the way I am."},
{
  text: "I appreciate where I am right now. My future is bright.",
  voice: require("./sounds/W 58.mp3"),
  jumpTo: "wPartTwo"
},
//worried ending exercises
{
  receiveJump: "wPartTwo",
  sprite: w4,
  voice: require("./sounds/W 59.mp3"),
  text: "Let’s do some calming exercises to get our minds off our problems."
},
{voice: require("./sounds/W 60.mp3"),text: "First, get comfortable. Let your breathing steady, and just be aware of it. You might have a lot of thoughts right now. Acknowledge them. Let them exist."},
{voice: require("./sounds/W 61.mp3"),text: "You don’t need to judge them or be carried away by them. Imagine your thoughts as clouds. They just float there. They are not intimidating."},
{voice: require("./sounds/W 62.mp3"),text: "Inhale for a count of two. Hold your breath for another count of two. Notice your thoughts floating by."},
{voice: require("./sounds/W 63.mp3"),text: "Now, exhale for a count of one, two, three . . . four. With your exhale, imagine your thoughts floating away with the breeze. Hold for two."},
{voice: require("./sounds/W 64.mp3"),text: "You’re looking up at the sky, breathing in a stable rhythm. Watch your thought-clouds as they blow towards you and blow away. When you feel more relaxed, return to your normal breathing pattern."},
{voice: require("./sounds/W 65.mp3"),text: "Here’s a more concrete example of dealing with your thoughts. Set this up by setting aside two to eight minutes and tracking it with a timer. Take a deep breath. Grab a piece of paper and a pencil."},
{voice: require("./sounds/W 66.mp3"),text: "Write down all of your worries. Anything that comes to mind. Even if it seems silly, or intimidating, put it down on the paper. It doesn’t need to be neat. It doesn’t need to be in any order."},
{voice: require("./sounds/W 67.mp3"),text: "Write the way you feel. Scrawl all over the page."},
{voice: require("./sounds/W 68.mp3"),text: "When the timer ends, fold or rip up your paper and throw it away. You’ve vented and cleared up some space in your head."},
{voice: require("./sounds/W 69.mp3"),text: "Now, end the exercise with another deep breath. Inhale for a count of two. Hold. Exhale for a count of four. Hold. You’re okay."},
{
  sprite: w1,
  voice: require("./sounds/W 70.mp3"),
  text: "Hopefully this helped you get some heavy worries off your chest. If you feel stressed again, you can come talk to me anytime. Alright, bye.",
  jumpTo: "leave"
},
  
  {
    routeBegins: "leave",
    receiveJump: "leave",
    sprite: "",
    speaker: "",
    bg: entrance,
    text: "Thank you for playing!",
    jumpTo: "title-screen"
  },
 
  
];

setFutureProperties("bg");
setFutureProperties("bgm");
setFutureProperties("speaker");
setFutureProperties("sprite");

function setFutureProperties(key) {
  let cache = "";
  for (let obj of story) {
    if (obj[key] || obj[key] === "") {
      cache = obj[key];
    } else {
      obj[key] = cache;
    }
  }
}

export default story;
