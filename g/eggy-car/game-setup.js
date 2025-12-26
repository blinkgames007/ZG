// ============================
// 🔧 GAME PAGE CONFIGURATION
// ============================

const GAME_DATA = {
  title: "Eggy Car",
  developer: "Zipy Games",
  rating: "⭐ 4.0",
  ageRating: "Rated for 3+",
  plays: "10K+ Plays",
  bannerImage: "sl/banner.jpg",
  icon: "favicon.ico",
  playLink: "page.html",
  description:
    "Eggy Car is a physics-based driving game created by Beedo Games, where your goal is to balance a fragile egg on top of your car while driving across tricky hills, steep valleys, and sudden jumps. Unlike classic racing games that reward speed, Eggy Car emphasizes precision driving, gravity physics, and throttle control.",

  features: [
    "This viral game has attracted millions of players worldwide for its addictive gameplay loop, simple two-button controls, and high-risk, high-reward design. Whether you're aiming to set a new distance record, climb the leaderboards, or just enjoy a quick session, Eggy Car delivers a fun and frustrating challenge.",
    "Here on zipy, you can play Eggy Car for free directly in your browser, no downloads or installs required. It works seamlessly on both desktop and mobile, making it one of the most popular choices in our Driving Games and Skill Games collections.",
    "",
    "------> 🏆 Eggy Car Leaderboard <------",
    "The track is buzzing with action! Here’s how today’s racers (and record-breakers) are stacking up. Think you can crack the leaderboard?",
    "-> 🚗 Live on Track: 13 drivers racing their eggs right now!",
    "-> 🥚 Today’s carnage: 11439 eggs cracked so far",
    "-> 🏆 Top run today: 1089 meters",
    "-> 🏁 World Record: 424451 meters – can you beat it?",
    "-> 💥 Total eggs cracked: 2470186 since launch",
    "",
    "------> Gameplay & Controls <------",
    "---> Controls <---",
    "Eggy Car uses a simple two-button controls:",
    "-> Desktop: Press D or the right arrow key to accelerate, A or the left arrow key to brake/reverse",
    "-> Mobile: Tap the right side of the screen to go forward, left side to brake or reverse",
    "No steering wheel, no special abilities, just acceleration, braking, and physics working against you.",
    "",
    "------> Gameplay: Protect the Egg <------",
    "The egg sits loosely on your car's roof, unsecured and subject to realistic physics. Drive too fast uphill and it slides backward. Land hard from a jump and it launches forward. Accelerate aggressively and it rolls off the back. Your objective: drive as far as possible while collecting coins and preventing the egg from hitting the ground and crack.",
    "",
    "------> Terrain & Obstacles <------",
    "Navigate endless scrolling terrain featuring:",
    "-> Steep hills that launch eggs skyward",
    "-> Sudden valleys where momentum threatens stability",
    "-> Rolling terrain requiring precise throttle control",
    "-> Gaps and jumps demanding smooth landings",
    "-> Coins scattered across routes (risk vs. reward)",
    "Every meter traveled counts as progress. Every coin collected without dropping your egg is a calculated risk paid off.",
    "",
    "------> Progression & Upgrades <------",
    "Collect coins during runs to unlock:",
    "-> New vehicles with improved stability and handling",
    "-> Upgrades for smoother driving performance",
    "-> Different environments with varied challenge levels",
    "Each run teaches physics, balance, and egg fragility. Every failure brings you closer to the perfect smooth ride.",
    "",
    "------> Who created Eggy Car? <------",
    "Eggy Car is created by Beedo Games. Play their other games on zipy: Base Defense, Base Defense 2, Blocky Snakes, Call of Tanks, Chicken Merge, Circuit Master, Clash Of Armour, Clash of Skulls, Clash of Tanks, dark-boy, Idle Cowshed, Idle Gold Miner, Jelly Sokoban, Mafia Wars, Pirate Defense, Pirates Merger, Pizza Tower, Swingers and Tanko.io!",
    "",
    "------> How can I play Eggy Car unblocked? <------",
    "You can play Eggy Car Unblocked safely and for free on the official site by Beedo Games, in partnership with zipy.",
    "",
    "------> More Games like Eggy Car <------",
    "If Eggy Car hooked you on physics challenges, explore more on zipy. Try hill-climb-racing for hill-climbing without egg anxiety, Moto X3M for motorcycle stunts, or gravity-driver for precision-based physics driving.",
  ],

  screenshots: [
    "sl/banner.jpg"
  ]
};

// ============================
// 🧩 DYNAMIC PAGE SETUP
// ============================
document.addEventListener("DOMContentLoaded", async () => {
  // Game header
  document.querySelector(".game-text h1").textContent = GAME_DATA.title;
  document.querySelector(".developer").textContent = GAME_DATA.developer;
  document.querySelector(".stats").innerHTML = `
    <div>${GAME_DATA.rating}</div>
    <div>${GAME_DATA.ageRating}</div>
    <div>${GAME_DATA.plays}</div>
  `;

  // Banner & Icon
  // document.querySelector(".banner-full img").src = GAME_DATA.bannerImage;
  document.querySelector(".game-icon img").src = GAME_DATA.icon;

  // Play buttons
  document.querySelector(".play-btn").href = GAME_DATA.playLink;
  document.querySelector(".floating-play").href = GAME_DATA.playLink;

  // Description
  document.querySelector(".description p").textContent = GAME_DATA.description;

  // Features
  const featureList = document.querySelector(".features");
  featureList.innerHTML = "";
  GAME_DATA.features.forEach(f => {
    const li = document.createElement("li");
    li.textContent = f;
    featureList.appendChild(li);
  });

  // Screenshots
  const screenshotContainer = document.querySelector(".screenshots");
  screenshotContainer.innerHTML = "";
  GAME_DATA.screenshots.forEach(src => {
    const img = document.createElement("img");
    img.src = src;
    img.alt = "Screenshot";
    img.loading = "lazy";
    screenshotContainer.appendChild(img);
  });

  // ================= DYNAMIC MORE GAMES =================
  try {
    const res = await fetch(window.RELATED_GAMES_API);
    const allGames = await res.json();

    // Exclude current game
    const currentPage = window.location.pathname.replace(/^.*\/G\//, "G/");
    const filteredGames = allGames.filter(g => g.page !== currentPage);

    // Pick random games
    const randomGames = filteredGames
      .sort(() => 0.5 - Math.random())
      .slice(0, window.MORE_GAMES_COUNT);

    const relatedContainer = document.querySelector(".related-games .game-grid");
    relatedContainer.innerHTML = "";

    randomGames.forEach(game => {
      const a = document.createElement("a");
      a.href = "../../" + game.page; // prepend ../../
      a.innerHTML = `
        <img src="../../${game.thumbnail}" alt="${game.title}" loading="lazy">
        <span>${game.title}</span>
      `;
      relatedContainer.appendChild(a);
    });
  } catch (err) {
    console.error("Failed to fetch related games:", err);
  }
});
