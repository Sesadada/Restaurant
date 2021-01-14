
function importHistory(){
    const tabs = document.querySelector(".tab-content")
    const div = document.createElement("div")
   
    div.setAttribute("id", "history")
    div.setAttribute("data-tab-content", "")
    div.classList = "active"
    const h3 = document.createElement("h3")
    h3.textContent = "History"
    tabs.appendChild(div)
    div.appendChild(h3)
    const text = document.createElement("p")
    text.innerHTML = '<p class="prese">"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>'
    div.appendChild(text)
    const img = document.createElement("img")
    img.setAttribute("src", "./img/tiki-room-cover.jpeg")
    img.setAttribute("width", "400")
    div.appendChild(img)
}

export default importHistory