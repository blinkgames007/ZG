// ============================
// 🔧 GAME PAGE CONFIGURATION
// ============================

const GAME_DATA = {
  title: "Hill Climb Racing",
  developer: "Zipy Games",
  rating: "⭐ 4.3",
  ageRating: "Rated for 3+",
  plays: "10K+ Plays",
  bannerImage: "sl/banner.jpg",
  icon: "favicon.ico",
  playLink: "page.html",
  description:
    "Hill Climb Racing Lite, is based on the wildly popular 2D physics-based mobile racing game Hill Climb Racing, that turned driving uphill into a full-blown obsession for millions worldwide. Think non-realistic physics meets coin-collecting chaos on impossible terrain featuring steep hills, deadly valleys, and treacherous jumps. Only funnier, more unpredictable, and way harder to put down.",

  features: [
    "Hill Climb Racing Lite is a fast, lightweight HTML5 version of the classic game, available for free here on zipy. Developed by Fingersoft, it brings the iconic mobile experience to desktop browsers for the first time. The Lite version offers fewer lags, faster loading, and cross-device support, making hill climbing smoother than ever. With portrait mode and quick startup on mobile, it’s perfect for short play sessions on any device.",
    "",
    "------> New Update: World Tour levels <------",
    "Introducing World Tour, a brand-new mode that lets you race through a series of fun, hand-crafted levels. Each with its own finish line and its own challenges.",
    "Pick from hand-selected vehicles, climb your way through each stage, and enjoy your progress as you unlock new worlds. It’s the Hill Climb Racing you know and love, now with an easy-to-follow adventure built in.",
    "Cartapult has been added, a playful new feature that lets you launch back into the run from where you crashed. No need to start over, just fly back in and keep the momentum going!",
    "Explore the worlds of World Tour:",
    "-> Countryside",
    "-> Seasons",
    "-> Moon",
    "-> Super Countryside",
    "-> Neon",
    "Check out the gameplay video at the bottom of this page to see all the new worlds and vehicles in action.",
    "Here is what says Daniel Rantala, Chief Growth Officer at Fingersoft, says about the update:",
    "-> We wanted to bring the Hill Climb Racing experience to zipy.com, where generations of players from longtime fans to newcomers, can enjoy timeless games in their browser. It’s like enjoying your childhood escape as your adult coffee break",
    "",
    "------> Gameplay & Features <------",
    "---> Controls <---",
    "The beauty of Hill Climb Racing lies in its simple two-button controls:",
    "-> Desktop: Press D or the right arrow key to accelerate, and A or the left arrow key to brake. That's it. No steering wheel, no handbrake, just pure physics-based mayhem.",
    "-> Mobile: Tap the right side of the screen to hit the gas, and the left side to brake. Simple to learn, impossible to master.",
    "Here's the twist: when you're airborne, these same controls rotate your vehicle forward or backward, letting you control your landing angle. It's the key to survival and the source of endless fails.",
    "",
    "---> Gameplay <---",
    "In Hill Climb Racing, you pilot vehicles as Bill Newton across increasingly treacherous terrain with one straightforward goal: drive as far as possible without running out of fuel or breaking Bill Newton's neck. The further you go, the more coins you collect, and the better vehicles and upgrades you can afford.",
    "But this isn't a gentle Sunday drive. Here's what you're up against:",
    "-> Brutal hills and valleys that test your throttle control with every meter",
    "-> Fuel canisters and batteries scattered across the landscape, your lifeline to survival",
    "-> Impossible jumps where landing angle means everything",
    "-> Breakneck speeds on downhill stretches that can flip your vehicle in an instant",
    "-> Unpredictable terrain including mud, ice, bridges, and massive gaps",
    "Master the physics or watch Bill Newton tumble and crash as your vehicle tumbles end over end. Every crash teaches you something new about momentum, rotation, and the limits of whatever ridiculous machine you're driving.",
    "",
    "------> Progression <------",
    "Hill Climb Racing unfolds across multiple unique stages, each with its own distinct terrain challenges and visual style. From the rolling Countryside, treacherous Desert dunes, and the icy slopes of Arctic, every environment demands different strategies.",
    "",
    "------> Vehicles & Upgrades <------",
    "Start with a humble Jeep and unlock an arsenal of increasingly absurd vehicles as you progress:",
    "-> Monster Truck for crushing obstacles",
    "-> Motocross Bike for agile maneuvers",
    "-> Tank for unstoppable power",
    "-> Moon Lander for lunar adventures",
    "-> Santa's Sleigh for festive hill climbing",
    "-> Racing Truck, Sports Car, and dozens more",
    "Each vehicle handles differently and can be upgraded through the Garage system. Invest your hard-earned coins in:",
    "-> Engine upgrades for more power and acceleration",
    "-> Suspension improvements for smoother landings and better control",
    "-> Tire upgrades for superior grip on difficult terrain",
    "-> 4WD systems to conquer steeper inclines",
    "Your upgrades carry over between stages, turning each run into part of a larger progression system that keeps you coming back for one more attempt.",
    "",
    "------> Earning Extra Coins <------",
    "In Hill Climb Racing Lite, skillful driving pays off. You can earn extra coins by performing tricks and staying airborne:",
    "-> Air Time: The longer you stay in the air, the more coins you earn.",
    "-> Back Flip / Front Flip: Land clean flips during jumps to score bonus coins.",
    "-> Neck Flip: A rare move where your driver lands on their back after a flip. It ends the run but rewards you with an extra coin bonus.",
    "Mastering these stunts makes every jump not just thrilling, but profitable too.",
    "",
    "------> Two Ways to Lose <------",
    "Hill Climb Racing keeps it brutally simple with just two game-ending conditions:",
    "-> Run out of fuel completely - Miss too many gas canisters or drive too aggressively, and your engine dies",
    "-> Break Bill Newton's neck - Land on your head, flip too hard, or slam into the ground wrong, and it's game over",
    "Both failures result in instant respawn at the beginning of your current stage, ready to try again with the knowledge of what went wrong.",
    "",
    "------> Who Created Hill Climb Racing? <------",
    "Finnish programmer Toni Fingerroos built Hill Climb Racing solo in 2012. Fingerroos poured everything into creating this deceptively simple game under his revived studio name Fingersoft.",
    "Hill Climb Racing became Fingersoft's best-selling game and a global phenomenon, amassing millions of downloads within its first year and establishing itself as one of mobile gaming's biggest indie success stories. You can read more about the development of the game on the wikipedia page.",
    "",
    "------> Similar Games like Hill Climb Racing <------",
    "If Hill Climb Racing has you hooked on physics-based driving games, zipy has plenty more to explore. Try Moto X3M for high-octane motorcycle stunts, or tackle the gravity-defying challenges of gravity-driver. Fans of crash physics should check out stickman-dismounting, while earn-to-die offers post-apocalyptic vehicle mayhem."
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
