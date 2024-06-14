const observer = new IntersectionObserver((entries) => {
    console.log("entries : ", entries);
   entries.forEach((entry) => {
        // console.log("entry.isIntersecting : " , entry.isIntersecting);
      if (entry.isIntersecting) {
        // console.log("on a traverse la ligne en descendant");
        entry.target.classList.add("in-view")
        entry.target.classList.remove('not-in-view')
      } else {
        console.log("on a traverse la ligne en remontant");
        entry.target.classList.remove('in-view')
        entry.target.classList.add('not-in-view')
      }
   })
 },
 {
  rootMargin: "0px",
  threshold: [0, 0.1, 1],  
 },
)

const tags = document.querySelectorAll("#box6, #box8, #box10, #box12")
// const tags = document.querySelectorAll("#box7, #box9, #box11")

tags.forEach((tag) => {
    observer.observe(tag)
})