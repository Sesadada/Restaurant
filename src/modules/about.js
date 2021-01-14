
function importAbout(){
    const tabs = document.querySelector(".tab-content")
    const div = document.createElement("div")
   
    div.setAttribute("id", "about")
    div.setAttribute("data-tab-content", "")
    const h3 = document.createElement("h3")
    h3.textContent = "About"
    tabs.appendChild(div)
    div.appendChild(h3)
    const text = document.createElement("p")
    text.innerHTML = '<p class="prese">"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. "</p>'
    div.appendChild(text)
    const mapa = document.createElement("iframe")
    mapa.setAttribute("src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423289.4428081285!2d-118.69192357829274!3d34.01952588341013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xed35245a824fd73!2sCa%C3%B1a%20Rum%20Bar!5e0!3m2!1sen!2sit!4v1610567059383!5m2!1sen!2sit")
    mapa.setAttribute("width", "600")
    mapa.setAttribute("height", "450")
    mapa.style.border = "0"
    div.appendChild(mapa)
}

export default importAbout