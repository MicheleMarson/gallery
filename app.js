document.querySelectorAll(".stack img").forEach(img => {
  img.addEventListener("mouseover", (e) => {
    boxImg.src = e.target.attributes.src.value // name="boxImg"
  })
})  
