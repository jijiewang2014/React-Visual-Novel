var choices = [
  { //emotions, 0
    choices: [
      {
        routeBegins: "h",
        content: "Happy",
        nextIndex: 1
      },
      {
        routeBegins: "s",
        content: "Sad",
        nextIndex: 2
      },
      {
        routeBegins: "a",
        content: "Angry",
        nextIndex: 3
      },
      {
        routeBegins: "w",
        content: "Worried",
        nextIndex: 4 
      },
      {
        routeBegins: "leave",
        content: "Leave"
      }
    ]
  },
  { //hannah, 1
    choices: 
  [
    {
      routeBegins: "hYes",
      content: "Yes",
      nextIndex: 0
    },
    {
      routeBegins: "hNo",
      content: "No",
      nextIndex: 0
    }
  ]
},
{ // sable, 2
  choices: 
[
  {
    routeBegins: "sYes",
    content: "Yes, that's bothering me.",
    nextIndex: 0
  },
  {
    routeBegins: "sNo",
    content: "No, that's not how I feel",
    nextIndex: 0
  }
]
},
{ // alexis, 3
  choices: 
[
  {
    routeBegins: "aFirst",
    content: "The World",
    nextIndex: 0
  },
  {
    routeBegins: "aSecond",
    content: "Myself",
    nextIndex: 0
  }
]
},
{ // walker, 4
  choices: 
[
  {
    routeBegins: "wFirst",
    content: "I'm feeling pressured to do things I'm uneasy about",
    nextIndex: 5
  },
  {
    routeBegins: "wSecond",
    content: "I'm stressed about school and academics",
    nextIndex: 6
  }
]
},
{ // walker, 5
  choices: 
[
  {
    routeBegins: "wConsent",
    content: "I'm being pressured into sexual activities",
    nextIndex: 6
  },
  {
    routeBegins: "wSubstance",
    content: "I'm being pressured to take drugs",
  },
  {
    routeBegins: "wOther",
    content: "It's something else"
  }
]
},
{ // walker, 6
  choices: 
[
  {
    routeBegins: "wInside",
    content: "Inside"
  },
  {
    routeBegins: "wOutside",
    content: "Outside"
  }
]
},
  
];

export default choices;
