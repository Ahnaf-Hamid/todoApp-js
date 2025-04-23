const btn = document.querySelector('.btn')

const onclick = () => {
    const input = document.querySelector('.input-field')

    console.log(input.value)

    const list = document.querySelector('.list')
    const li = document.createElement('li')
    const text = document.createTextNode(input.value)
    li.appendChild(text)
    list.appendChild(li)

    input.value = '';

   // ********************** edit btn *********************************

   const lieditbtn = document.createElement('button')
   lieditbtn.textContent = 'edit'
   li.appendChild(lieditbtn)

   lieditbtn.addEventListener('click',() => {
    const editInput = document.createElement('input')
    editInput.type = 'text'
    editInput.value = text.textContent

    li.replaceChild(editInput,text)

    lieditbtn.textContent = 'Done'

    lieditbtn.addEventListener('click',() => {
        text.textContent = editInput.value

        li.replaceChild(text,editInput)

        lieditbtn.textContent = 'edit'

        lieditbtn.removeEventListener('click', editInput)
    })

   })

   // ********************** delete btn *********************************

    const deletebtn = document.querySelector('.delbtn')

    deletebtn.addEventListener('click',() => {
        li.remove()
    })

    const lidelbtn = document.createElement('button')
    lidelbtn.textContent = 'delete'
    li.appendChild(lidelbtn)

    lidelbtn.addEventListener('click',() => {
        li.remove()
    })
}

btn.addEventListener('click',onclick)
