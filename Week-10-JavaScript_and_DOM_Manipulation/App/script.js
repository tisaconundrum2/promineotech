let id = 0;

document.getElementById('Add').addEventListener('click', () => {

    let table = document.getElementById('table');

    let row = table.insertRow(1);
    row.setAttribute('id', `item-${id}`);
    row.insertCell(0).innerHTML = `${id}`; // ID
    row.insertCell(1).innerHTML = document.getElementById('first').value; // First
    row.insertCell(2).innerHTML = document.getElementById('last').value; // Last
    row.insertCell(3).innerHTML = document.getElementById('handle').value; // Handle
    row.insertCell(4).appendChild(createButtonDelete(id++))

    document.getElementById('first').value = '';
    document.getElementById('last').value = '';
    document.getElementById('handle').value = '';

})

function createButtonDelete(id) {
    let btn = document.createElement('button');
    btn.className = 'btn btn-primary';
    btn.id = id
    btn.innerHTML = 'Delete';
    btn.onclick = () => {
        console.log('Deleting list id: `item-${id}`');
        let elemToDel = document.getElementById(`item-${id}`);
        elemToDel.parentNode.removeChild(elemToDel);
    }
    return btn;
}