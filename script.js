const stories = [
  {
    title: "Sadəcə ikimiz",
    text: "Bəzi şəkillərin heç bir sözə ehtiyacı yoxdur. Sadəcə ikimiz, birlikdə, insanın məhz orada olmaq istədiyini hiss etdiyi o sakit duyğu ilə. Belə anları düşünəndə, səni yanımda görməyin nə qədər gözəl olduğunu bir daha anlayıram."
  },
  {
    title: "Bu baxışlar",
    text: "I love this picture because there is no need to prove anything. Our eyes say everything, and you can see how beautiful that moment was. Even though you were already preparing to go far away in this picture, that never stood in the way of my love for you."
  },
  {
    title: "Bu təbəssüm",
    text: "A photo that makes me smile instantly. Maybe because it shows just how easy and effortless a moment with you can be. A little before this picture, we had an arm-wrestling match. I may have beaten you at arm wrestling, but in love, I will always lose to you."
  },
  {
    title: "Adi bir gün",
    text: "And maybe this is my favorite thought of all: not every beautiful moment has to be something big. You sitting on a bench, a quiet afternoon, food in your hands, and simply us. I promised I would come to Korea. I couldn't make it, and the reason isn't a breakup or the distance, like you might have thought."
  },
  {
    title: "Ən sevdiyim şəklimiz",
    text: "My favorite picture of us. It is enough to bring tears to my eyes. I am still shocked by how perfectly we look together. If I were born again, I would still want to be with you. No one in this world looks as perfect together as we do."
  }
];

const modal=document.getElementById("storyModal");
const image=document.getElementById("storyImage");
const number=document.getElementById("storyNumber");
const title=document.getElementById("storyTitle");
const text=document.getElementById("storyText");

document.querySelectorAll(".memory").forEach(card=>{
  card.addEventListener("click",()=>{
    const i=Number(card.dataset.story), story=stories[i];
    image.src=card.querySelector("img").src;
    number.textContent=`MEMORY ${String(i+1).padStart(2,"0")}`;
    title.textContent=story.title;
    text.textContent=story.text;
    modal.classList.add("open");
    modal.setAttribute("aria-hidden","false");
    document.body.style.overflow="hidden";
  });
});
document.querySelectorAll("[data-close]").forEach(el=>el.addEventListener("click",closeModal));
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeModal()});
function closeModal(){modal.classList.remove("open");modal.setAttribute("aria-hidden","true");document.body.style.overflow=""}
