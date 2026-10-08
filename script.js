const stories = [
  {
    title: "Ein Abend nur für uns",
    text: "Manche Bilder brauchen gar nicht viele Worte. Einfach wir beide, zusammen, mit diesem ruhigen Gefühl, dass man gerade genau dort sein möchte. Wenn ich an solche Momente denke, denke ich daran, wie schön es ist, dich an meiner Seite zu haben."
  },
  {
    title: "Ein kleiner süßer Moment",
    text: "Manchmal sind es genau die kleinen Dinge, die man später am liebsten wieder hervorholt. Dein Lächeln, dieser Lebkuchen und dieser ganz normale Moment — und trotzdem ist er für mich etwas Besonderes. Ich mag diese kleinen Erinnerungen an uns, weil sie sich nach Zuhause anfühlen."
  },
  {
    title: "Einfach wir",
    text: "Ich liebe dieses Bild, weil man darauf nichts beweisen muss. Wir sitzen einfach zusammen, schauen uns an und genießen den Moment. Kein großes Ereignis, kein perfekter Plan — nur du und ich. Und ehrlich gesagt brauche ich manchmal gar nicht mehr."
  },
  {
    title: "Dieses Lächeln",
    text: "Ein Foto, das mich sofort zum Lächeln bringt. Vielleicht gerade deshalb, weil man darauf sieht, wie leicht ein Moment mit dir sein kann. Wir zwei, ein bisschen Sonne, ein bisschen Chaos und dieses Gefühl, dass genau dort gerade alles richtig ist."
  },
  {
    title: "Ein ganz normaler Tag",
    text: "Und vielleicht ist genau das mein Lieblingsgedanke: dass nicht jeder schöne Moment etwas Großes sein muss. Du auf einer Bank, ein ruhiger Nachmittag, Essen in der Hand und einfach dein eigenes kleines Universum. Ich möchte noch ganz viele solcher ganz normalen Tage mit dir erleben."
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
