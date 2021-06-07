const todoList = document.querySelector("#todo-list")

function renderList(doc){
    let li = document.createElement("li")
    li.className = "collection-item"
    li.setAttribute("data-id",doc.id)
    let div = document.createElement("div")
    let title = document.createElement("span")
    title.textContent = doc.data().title
    let anchor = document.createElement("a")
    anchor.href = "#modal1"
    anchor.className ="modal-trigger secondary-content"
    let editBtn = document.createElement("i")
    editBtn.className = "material-icons"
    editBtn.innerText = "edit"
    let deleteBtn = document.createElement("i")
    deleteBtn.className = "material-icons secondary-content"
    deleteBtn.innerText = "delete"
    anchor.appendChild(editBtn)
    div.appendChild(title)
    div.appendChild(deleteBtn)
    div.appendChild(anchor)
    li.appendChild(div)
    deleteBtn.addEventListener("click",e=>{
        console.log("delete")
    })
    editBtn.addEventListener("click",e=>{
        console.log("edit")
    })

    todoList.append(li)
}

db.collection("todos").orderBy("title").onSnapshot(snapshot=>{
    let changes = snapshot.docChanges()
    console.log(changes)
    changes.forEach(change => {
        if  (change.type == "added"){
            renderList(change.doc)
            console.log(change.doc.data())
        }else if (change.type =="removed"){
            console.log("removed")
        }else if(change.type =="modifed"){
            console.log("modified")
        }
    })
})
