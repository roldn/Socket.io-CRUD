
const socket = io()
const noteList = document.querySelector('#notes')

let savedId = ''

const noteUi = note => {

    const divUi = document.createElement('div');
    
    divUi.insertAdjacentHTML("beforeend", `
    <div class="card card-body rounded-0 mb-2 animate__animated animate__fadeInUp"  style="background-color: white;">
        <div class="d-flex justify-content-between">
            <h1 class="h3 card-title">${note.title}</h1>
            <div>
                <button class="btn btn-secondary update" data-id="${note.id}">update</button>
                <button class="btn btn-danger delete" data-id="${note.id}">delete</button>
            </div>
        </div>
        <p>${note.description}</p>
    </div>`);

    const btnDelete = divUi.querySelector(".delete");
    const btnUpdate = divUi.querySelector(".update");

    btnDelete.addEventListener('click', () => {
        deleteNote(btnDelete.dataset.id)
    })
    btnUpdate.addEventListener('click', () => {
        getNote(btnUpdate.dataset.id)
    })

    return divUi
}

// "renderNotes" renderiza el conjunto de notas almacenadas, por eso recorre.

const renderNotes = notes => {
    noteList.innerHTML = '';
    notes.forEach((note) => {
        noteList.append(noteUi(note))
    });
}

//"appendNote" añade una nueva nota a la lista

const appendNote = note => {
    noteList.append(noteUi(note))
}