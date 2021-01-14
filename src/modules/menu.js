
function importMenu () {
    
    const tabs = document.querySelector(".tab-content")
    const div = document.createElement("div")
    div.setAttribute("id", "menu")
    div.setAttribute("data-tab-content", "")
    const h3 = document.createElement("h3")
    h3.textContent = "Menu"
    tabs.appendChild(div)
    div.appendChild(h3)
    const text = document.createElement("p")
    text.innerHTML = '<h4>Tapas</h4><p class="menu"><b>Tiko So</b></p><p class="menu">salmon, mango, red cabbage, sesame, salad</p><p class="menu"><b>10,00€</b></p><br><p class="menu"><b>Veggie Taco</b> <p class="menu"> Chili vegan con tofu, coleslaw </p><p class="menu">  <b> 8,00€</b></p><h4>Sushi</h4><p class="menu"><b>Uramaki California</b></p> <p class="menu">Surimi, avocado, mayonnaise</p><p class="menu"><b>6,00€</b></p><br><p class="menu"><b>Uramaki Pol\'n\'Roll</b> <p class="menu"> Fried chicken, mango, mayonnaise, chives </p><p class="menu">  <b> 7,00€</b></p><br><p class="menu"><b>Guaka Waka</b> <p class="menu"> Salmon, guacamole, crispy onion</p><p class="menu">  <b> 8,00€</b></p>'
    div.appendChild(text)

    
}

export default importMenu