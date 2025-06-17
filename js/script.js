let contador = 0;
let input = document.getElementById("taskInput");
let btnAdd = document.getElementById("btn-add");
let main = document.getElementById("areaLista");

function addTask() {
let valorInput = input.value;
if ((valorInput !== "") && (valorInput !== null) && (valorInput !== undefined)) {
    contador++;
let novoItem = `<div id = "item-${contador}" class = "item">
        <div class="item-icon">
      <span onclick='check(${contador})' class="material-symbols-outlined">
circle
</span>
    </div>
    <div class="item-name"  onclick='check(${contador})'>${valorInput}</div>
    <div class="item-botao">
        <button class="delete" onclick='deletar(${contador})'><span class="material-symbols-outlined">
delete
</span>Deletar</button>
       
    </div>`;

    main.innerHTML += novoItem;
    input.value = "";
    input.focus();
  }
}

input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    addTask();
  }
});

function deletar(id) {
 var tarefa = document.getElementById(`item-${id}`);
 tarefa.remove();
 contador--;
}

function check(id) {
    var tarefa = document.getElementById(`item-${id}`);
    var itemName = tarefa.querySelector('.item-name');
    var itemIcon = tarefa.querySelector('.item-icon span');
    // Toggle the checked class and icon
    
    if (itemName.classList.contains('checked')) {
        itemName.classList.remove('checked');
        itemIcon.textContent = 'circle';
    } else {
        itemName.classList.add('checked');
        itemIcon.textContent = 'check_circle';
    }
}