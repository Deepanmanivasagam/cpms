// Sample player data stored in JavaScript
const players = [
    {
        name: "suresh raina",
        age: 35,
        dob: "27-11-1986",
        country: "India",
        role:"Batsman",
        profile:"Suresh Raina is a former Indian cricketer and an entrepreneur. He has been a part of the Indian cricket team that won the World Cup in 2011. He co-founded Gracia Raina Foundation, which works towards providing education and healthcare to underprivileged children and women in India",
        stats: {
          T20: { bat: "1650 runs", bowl: "13 wickets" },
          ODI: { bat: "5615 runs", bowl: "36 wickets" },
          Test: { bat: "768 runs", bowl: "13 wickets" },
        },
      },
      {
        name: "MS Dhoni",
        age: 38,
        dob: "07-07-1981",
        country: "India",
        role:"Wicketkeeper Batter",
        profile:"Dhoni made his international debut in 2004. His talent with the bat came to the fore in an innings of 148 runs against Pakistan in his fifth international match. Within a year he joined the India Test team, where he quickly established himself with a century (100 or more runs in a single innings) against Pakistan. Despite his inexperience, Dhoni took over the captaincy of the one-day side in 2007 and led India to the Twenty20 (T20) world title. Series wins over Australia and Sri Lanka, among others, moved India to the top of the International Cricket Council (ICC) Test rankings for the first time in December 2009. ",
        stats: {
          T20: { bat: "1617 runs", bowl: "---" },
          ODI: { bat: "10773 runs", bowl: "---" },
          Test: { bat: "4876 runs", bowl: "---" },
        },
      },
      {
        name: "Ravindra Jadeja",
        age: 36,
        dob: "06-12-1988",
        country: "India",
        role:"All-Rounder",
        profile:"Jadeja was born on 6 December 1988 in a Gujarati Hindu Rajput family in Navagam Ghed city of Jamnagar district in Gujarat. His father Anirudh was a watchman for a private security agency. His father wanted him to become an Army officer but his interest was in Cricket, he was scared of his father in his childhood.",
        stats: {
          T20: { bat: "515 runs", bowl: "54 wickets" },
          ODI: { bat: "2756 runs", bowl: "220 wickets" },
          Test: { bat: "3312 runs", bowl: "319 wickets" },
        },
      },
      {
        name: "Virat Kholi",
        age: 36,
        dob: "05-11-1988",
        country: "India",
        role:"Batsman",
        profile:"India has given to the world many a great cricketer but perhaps none as ambitious as Virat Kohli. To meet his ambition, Kohli employed the technical assiduousness of Sachin Tendulkar and fitness that was in the league of top athletes in the world, not just cricketers.",
        stats: {
          T20: { bat: "4188 runs", bowl: "4 wickets" },
          ODI: { bat: "13906 runs", bowl: "5 wickets" },
          Test: { bat: "9166 runs", bowl: "---" },
        },
      },
      {
        name: "Steven Smith",
        age: 36,
        dob: "02-06-1989",
        country: "Australia",
        role:"Batsman",
        profile:"In a career of twists and turns, Steven Smith started out as a legspinner and become Australia's best batter since Sir Donald Bradman, either side of having his career derailed by a ball-tampering scandal that saw him stripped of the captaincy and banned for 12 months.",
        stats: {
          T20: { bat: "1094 runs", bowl: "17 wickets" },
          ODI: { bat: "5662 runs", bowl: "28 wickets" },
          Test: { bat: "9809 runs", bowl: "19 wickets" },
        },
      },
      {
        name: "Mitchell Santner",
        age: 32,
        dob: "05-02-1992",
        country: "New-Zeland",
        role:"All-Rounder",
        profile:"A left-handed batsman and left-arm spinner, Mitchell Santner was first elevated to the New Zealand side after a promising 2014-15 domestic season.He was named in the one-day squad for the tour of England following the retirement of Daniel Vettori after the World Cup as New Zealand searched for another left-arm spin option.",
        stats: {
          T20: { bat: "710 runs", bowl: "117 wickets" },
          ODI: { bat: "1370 runs", bowl: "108 wickets" },
          Test: { bat: "1066 runs", bowl: "74 wickets" },
        },
      },
      {
        name: "Rohit Sharma",
        age: 36,
        dob: "30-04-1987",
        country: "India",
        role:"Batsman",
        profile:"Languid and easy on the eye, Rohit Sharma owned all the shots in the book when he emerged from the Mumbai suburbs as heir apparent to the Indian batting greats of the 2000s. It took him time and persistence, but by the 2010s he had become a colossus in white-ball cricket, and the man in charge of perhaps the most formidable league team in the first age of T20.",
        stats: {
          T20: { bat: "4231 runs", bowl: "01 wickets" },
          ODI: { bat: "10866 runs", bowl: "09 wickets" },
          Test: { bat: "4289 runs", bowl: "02 wickets" },
        },
      },
      {
        name: "Joe Root",
        age: 34,
        dob: "30-12-1990",
        country: "England",
        role:"Batsman",
        profile:"That Joe Root would one day captain England was taken as read when he hit the grand old age of 23. The accolade everybody anticipated became his three years later, when Alastair Cook stood down after the 2016-17 tour of India. It was understandable that there were a few fears for Root's future workload. He was rare among England batsmen in achieving maturity so quickly, and had looked consumed by the delights of batting from the moment he first took guard. Now he had new responsibilities.",
        stats: {
          T20: { bat: "893 runs", bowl: "06 wickets" },
          ODI: { bat: "6522 runs", bowl: "27 wickets" },
          Test: { bat: "12972 runs", bowl: "77 wickets" },
        },
      },
      {
        name: "Sachin Tendulkar",
        age: 51,
        dob: "24-04-1973",
        country: "India",
        role:"Batsman",
        profile:"Sachin Tendulkar was the most complete batter of his time, the most prolific run-maker of all time, and arguably the biggest cricket icon the game has ever known.His batting was based on the purest principles: perfect balance, economy of movement, precision in stroke-making, and that intangible quality given only to genius batters - anticipation. ",
        stats: {
          T20: { bat: "10 runs", bowl: "46 wickets" },
          ODI: { bat: "18426 runs", bowl: "154 wickets" },
          Test: { bat: "15921 runs", bowl: "1 wickets" },
        },
      },
      {
        name: "Rachin Ravindra",
        age: 25,
        dob: "18-11-1999",
        country: "New-Zeland",
        role:"All-Rounder",
        profile:"Rachin Ravindra was born in Wellington on 18 November 1999 to parents from Bangalore. His father Ravi Krishnamurthy, a software architect, played club-level cricket in Bangalore before settling in New Zealand in 1997.",
        stats: {
          T20: { bat: "1640 runs", bowl: "26 wickets" },
          ODI: { bat: "1826 runs", bowl: "44 wickets" },
          Test: { bat: "2921 runs", bowl: "5 wickets" },
        },
      },
      {
        name: "Trent Boult",
        age: 35,
        dob: "22-07-1989",
        country: "New-Zeland",
        role:"Bowler",
        profile:"Rated as one half of the best new-ball pair in New Zealand history by Sir Richard Hadlee, Trent Boult is a left-arm quick who presents a significant threat to batsmen around the world with an ability to move the ball both ways even in unresponsive conditions.",
        stats: {
          T20: { bat: "58 runs", bowl: "83 wickets" },
          ODI: { bat: "216 runs", bowl: "211 wickets" },
          Test: { bat: "759 runs", bowl: "317 wickets" },
        },
      },
      {
        name: "Jasprit Bumrah",
        age: 31,
        dob: "06-12-1993",
        country: "India",
        role:"Bowler",
        profile:"Jasprit Bumrah grabbed eyeballs first with his unorthodox action, and then his bowling skills. Armed with an anomalous, sling-arm action and natural pace, the peculiar release point of Bumrah's deliveries makes it hard for batsmen to pick him.",
        stats: {
          T20: { bat: "8 runs", bowl: "89 wickets" },
          ODI: { bat: "91 runs", bowl: "149 wickets" },
          Test: { bat: "310 runs", bowl: "194 wickets" },
        },
      },
      {
        name: "Alex Carey",
        age: 33,
        dob: "27-07-1991",
        country: "Australia",
        role:"Wicketkeeper Batter",
        profile:"As inaugural captain of the Greater Western Sydney Giants on their road towards inclusion in the Australian Football League, Alex Carey appeared to be a talent lost to cricket. But the fade of his Australian football career around his 20th birthday left him to fall back on the other sport that had competed for his junior attention, starting a road to becoming Australia's wicketkeeper across formats and also a vice-captain of the ODI side.",
        stats: {
          T20: { bat: "2390 runs", bowl: "---" },
          ODI: { bat: "3978 runs", bowl: "---" },
          Test: { bat: "1501 runs", bowl: "---" },
        },
      },
    {
      name: "marnus labuschagne",
      age: 30,
      dob: "22-06-1994",
      country: "Australia",
      role:"Batsman",
      profile:"Marnus Labuschagne's ascent to the higher echelons of Test batting was an extraordinary tale of making the most of an unexpected opportunity. During the Lord's Ashes Test against England in August 2019, Steven Smith was felled by Jofra Archer's bouncer and Labuschagne would become his concussion substitute - the first time in Test history the protocol had been used. By the end of the year he had eclipsed Smith as the leading Test run-scorer in the world, and locked in the No. 3 spot, in the midst of a prolific home summer that brought him four centuries in five matches against Pakistan and New Zealand including a double century at the SCG.",
      stats: {
        T20: { bat: "2400 runs", bowl: "1 wickets" },
        ODI: { bat: "4380 runs", bowl: "---" },
        Test: { bat: "5590 runs", bowl: "---" },
      },
    },
  ];
  
  // Event listener for search functionality
  function searchPlayer() {
    // Clean and normalize the search query
    const searchQuery = document
      .getElementById("searchBar")
      .value
      .trim()
      .toLowerCase()
      .replace(/\s+/g, ""); // Remove all spaces
  
    // Find a matching player (partial match)
    const player = players.find((p) =>
      p.name.toLowerCase().replace(/\s+/g, "").includes(searchQuery)
    );
  
    if (player) {
      // Display player details
      document.getElementById("playerName").textContent = player.name;
      document.getElementById("playerAge").textContent = player.age;
      document.getElementById("playerDOB").textContent = player.dob;
      document.getElementById("playerCountry").textContent = player.country;
      document.getElementById("playerRole").textContent = player.role;
      document.getElementById("playerProfile").textContent = player.profile;
  
      // Populate stats table
      const statsTable = document.getElementById("playerStats");
      statsTable.innerHTML = ""; // Clear previous results
      Object.keys(player.stats).forEach((format) => {
        const row = document.createElement("tr");
        row.innerHTML = `
          <td>${format}</td>
          <td>${player.stats[format].bat}</td>
          <td>${player.stats[format].bowl}</td>
        `;
        statsTable.appendChild(row);
      });
  
      document.getElementById("playerInfo").style.display = "block";
    } else {
      alert("Player not found!");
      document.getElementById("playerInfo").style.display = "none";
    }
  }
  
  // Add event listener to the search button
  document.getElementById("searchButton").addEventListener("click", searchPlayer);
  
  // Add event listener to trigger search on Enter key press
  document.getElementById("searchBar").addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault(); // Prevent default form submission (if any)
      searchPlayer(); // Call the search function
    }
  });