// Fade-in on load. CSS only hides things when <html> has the "js" class,
// so the page stays visible if this script ever fails.
(() => {
  let done = false;
  const ready = () => {
    if (done) return;
    done = true;
    document.body.classList.add("ready");
  };
  window.addEventListener("load", ready);
  // Don't wait forever if an image loads slowly.
  setTimeout(ready, 1500);
})();
