// ============================
// 🔧 GAME PAGE CONFIGURATION
// ============================

const GAME_DATA = {
  title: "2048",
  developer: "Zipy Games",
  rating: "⭐ 3.6",
  ageRating: "Rated for 3+",
  plays: "100K+ Plays",
  bannerImage: "sl/banner.jpg",
  icon: "favicon.ico",
  playLink: "main.html",
  description:
    "2048 is a single-player mathematical puzzle game where you merge tiles with equal numbers. The goal of the game is to merge the tiles until you have 2048. With each merger of tiles the value doubles. You can slide tiles in any direction to make the identical tiles merge. The grid on which you play is 4x4 so you don't have a lot of space to maneuvre. Try keep some free spaces.",

  features: [
    "------> How to play 2048? <------",
    "Use your arrow keys to slide the tiles in the direction you want. When tiles with equal numbers collide, they will merge into one tile and double in value.",
    "",
    "------> What is the best strategy to play 2048? <------",
    "The best strategy is to keep your highest value tile in one of the corners, and work the other tiles in that direction.",
    "",
    "------> Who created 2048? <------",
    "Zipy features the original 2048 game created by Gabriele Cirulli. He created the game in 2014 and was initially inspired by Veewo Studios' 1024, which was inspired by the game Threes."
  ],

  screenshots: [
    "sl/banner.png",
    "sl/snap1.png",
    "sl/snap2.jpg",
    "sl/snap3.jpg",
    "sl/snap4.jpg",
    "sl/snap5.png"
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
