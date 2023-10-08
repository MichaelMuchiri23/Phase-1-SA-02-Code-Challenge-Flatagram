// write your code here
document.addEventListener('DOMContentLoaded',details)

function details(){
    fetch('http://localhost:3000/images/1')
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
        const title=document.querySelector('#card-title')
        const img=document.querySelector('#card-image')
        const likes=document.querySelector('#like-count')
        const ul=document.querySelector('#comments-list')

        title.innerText=data.title
        img.src='assets/coder-dog.png'
        likes.innerText=data.likes
        ul.innerHTML=""

        data.comments.forEach(obj=>{
           const li=document.createElement('li')
           li.innerText=obj.content
           ul.appendChild(li)
        })

        const btn=document.querySelector('#like-button')
        btn.addEventListener('click',()=>{
           likes.innerText=++data.likes
        })

        const form=document.querySelector('#comment-form')
        form.addEventListener('submit',event=>{
            event.preventDefault()
            const input=document.querySelector('#comment')
            const li=document.createElement('li')
            li.innerText=input.value
            ul.appendChild(li)
        })
    })
}