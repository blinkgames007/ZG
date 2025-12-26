// ============================
// 🔧 GAME PAGE CONFIGURATION
// ============================

const GAME_DATA = {
  title: "Master Chess",
  developer: "Zipy Games",
  rating: "⭐ 4.4",
  ageRating: "Rated for 3+",
  plays: "100K+ Plays",
  bannerImage: "sl/banner.jpg",
  icon: "favicon.ico",
  playLink: "setup.html",
  description:
    "Master Chess is a board and thinking game that you can play online locally or offline. This Master Chess game is developed by Codethislab and they made it in HTML5 so it's also available on your mobile phone and tablet. Think of a strategic plan to beat your oppenent and move your pieces over the board to lure them into your tactics. You can defeat the computer or play against a friend on the same machine.",

  features: [
    "------> How to play Master Chess? <------",
    "Move pieces - Tap or Left mouse button",
    "",
    "------> Who created Master Chess? <------",
    "Master Chess was created by Codethislab.",
    "",
    "------> Can I play Master Chess on mobile or desktop? <------",
    "Master Chess is playable both on your desktop and on your mobile phone on Zipy for free: Master Chess"
  ],

  screenshots: [
    "sl/banner.jpg",
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
