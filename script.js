const stories = [
  {
    title: "My favorite photo of us",
    text: "My favorite picture of us. It is enough to bring tears to my eyes. I am still shocked by how perfectly we look together. If I were born again, I would still want to be with you. No one in this world looks as perfect together as we do."
  },
  {
    title: "Sweatheart",
    text: "Sometimes, it’s the small, unassuming moments that stay with me the longest. This picture makes me smile every time because you look just so sweet in it. It might be just a small moment, but for me, it’s one of the many little things that make you so special."
  },
  {
    title: "These looks",
    text: "I love this picture because there is no need to prove anything. Our eyes say everything, and you can see how beautiful that moment was. Even though you were already preparing to go far away in this picture, that never stood in the way of my love for you."
  },
  {
    title: "This smile",
    text: "A photo that makes me smile instantly. Maybe because it shows just how easy and effortless a moment with you can be. A little before this picture, we had an arm-wrestling match. I may have beaten you at arm wrestling, but in love, I will always lose to you."
  },
  {
    title: "An ordinary day",
    text: "And maybe this is my favorite thought of all: not every beautiful moment has to be something big. You sitting on a bench, a quiet afternoon, food in your hands, and simply us. I promised I would come to Korea. I couldn't make it, and the reason isn't a breakup or the distance, like you might have thought."
  }
];

const page = document.getElementById("page");
const modal = document.getElementById("storyModal");
const image = document.getElementById("storyImage");
const number = document.getElementById("storyNumber");
const title = document.getElementById("storyTitle");
const text = document.getElementById("storyText");
const closeButton = modal.querySelector(".close");

let lastFocused = null;

function openModal(card) {
  const i = Number(card.dataset.story);
  const story = stories[i];
  if (!story) return;

  lastFocused = card;
  image.src = card.querySelector("img").src;
  image.alt = story.title;
  number.textContent = `MEMORY ${String(i + 1).padStart(2, "0")}`;
  title.textContent = story.title;
  text.textContent = story.text;

  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  page.inert = true; // keeps keyboard focus and screen readers inside the dialog
  document.body.style.overflow = "hidden";
  closeButton.focus();
}

function closeModal() {
  if (!modal.classList.contains("open")) return;
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  page.inert = false;
  document.body.style.overflow = "";
  if (lastFocused) lastFocused.focus();
}

document.querySelectorAll(".memory").forEach(card => {
  card.addEventListener("click", () => openModal(card));
});
document.querySelectorAll("[data-close]").forEach(el => el.addEventListener("click", closeModal));
document.addEventListener("keydown", e => {
  if (e.key === "Escape") closeModal();
});
