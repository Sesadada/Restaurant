
function home (){
  const container = document.querySelector("#content")
  const h1 = document.createElement("h1")
  h1.textContent = "Coconut Bar"
  container.appendChild(h1)
  
  const presentation = document.createElement("div")
  presentation.classList.add("presentation")
  container.appendChild(presentation)
  const p = document.createElement("p")
  p.classList.add("prese")
  p.textContent = "Before opening the doors to Tiki-Ti in 1961, Ray Buhen learned his tiki trade secrets by working under Don the Beachcomber. Now his son and grandsons carry on the tradition (and guard the cocktail recipes), running this tiny Hollywood joint that offers 12 bar stools, tiki kitsch galore and 94 signature concoctions."
  presentation.appendChild(p)
  
  const ul = document.createElement("ul")
  const history = document.createElement("li")
  const menu = document.createElement("li")
  const about = document.createElement("li")
  ul.classList.add("tabs")
  
  history.classList.add("tab")
  history.textContent = "History"
  history.style.backgroundColor = `rgb(${252}, ${248}, ${2}, ${0.7})`
  history.dataset.tabTarget = "#history"
  menu.classList.add("tab")
  menu.textContent = "Menu"
  menu.dataset.tabTarget = "#menu"
  about.classList.add("tab")
  about.textContent = "About"
  about.dataset.tabTarget = "#about"
  presentation.appendChild(ul)

  ul.appendChild(history)
  ul.appendChild(menu)
  ul.appendChild(about)

  const tabContent = document.createElement("div")
  tabContent.classList.add("tab-content")
  container.appendChild(tabContent)
}


const tabs = () =>{
  const tabs = document.querySelectorAll('[data-tab-target]')
  const tabContents = document.querySelectorAll('[data-tab-content]')
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      
      const target = document.querySelector(tab.dataset.tabTarget)
      tabContents.forEach(tabContent => {
        tabContent.classList.remove('active')

      })
      tabs.forEach(tab => {
        tab.classList.remove('active')
        tab.style.backgroundColor = `rgb(${155}, ${153}, ${153}, ${0.3})`

      })
      tab.classList.add('active')
      tab.style.backgroundColor = `rgb(${252}, ${248}, ${2}, ${0.7})`
      target.classList.add('active')
    })
  })
}

export {home, tabs}

