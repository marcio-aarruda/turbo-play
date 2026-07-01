<script>
const faqs = document.querySelectorAll(".faq-question");

faqs.forEach(item => {
  item.addEventListener("click", () => {
    const answer = item.nextElementSibling;
    answer.style.display =
      answer.style.display === "block" ? "none" : "block";
  });
});

/* SCROLL SUAVE */
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function(e){
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});
</script>
<script>
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("show");
    }
  });
});

document.querySelectorAll(".card, .plano").forEach(el => {
  el.classList.add("hidden");
  observer.observe(el);
});
</script>
<script>
const mobile = document.querySelector(".mobile");
const menu = document.querySelector(".menu");

mobile.addEventListener("click", () => {
  if(menu.style.display === "flex"){
    menu.style.display = "none";
  } else {
    menu.style.display = "flex";
    menu.style.flexDirection = "column";
    menu.style.position = "absolute";
    menu.style.top = "70px";
    menu.style.right = "20px";
    menu.style.background = "#08182d";
    menu.style.padding = "20px";
    menu.style.borderRadius = "10px";
  }
});
</script>
