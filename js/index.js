const input = document.getElementById('search')
const userList = document.getElementById('user-list')

document.getElementById('github-form').addEventListener('submit', (e)=>{   
    e.preventDefault()

    const inputValue = input.value

    fetch(`https://api.github.com/users/${inputValue}`)
    .then((resp) => resp.json())
    .then((data) => {
        console.log(data)
          
        const newList = document.createElement('li')
        const avatar = document.createElement('img')
        
        const username = data.login
        const userURL = data.html_url
        
        avatar.src = data.avatar_url

        newList.appendChild(avatar)
        newList.textContent = `Username: ${username} `
        
        
        const linkTag = document.createElement('a') 

        linkTag.href = userURL
        linkTag.textContent = userURL
        linkTag.style.color = '#0000FF'

        newList.appendChild(linkTag)

        userList.appendChild(newList)
})
})
