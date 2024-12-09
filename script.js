"use strict";
const $submit = document.getElementById('submit');
const $input = document.getElementById('input');
const $ul = document.getElementById('tasksList');
function handleSubmit(event) {
    event.preventDefault();
    const inputValue = $input.value;
    if (inputValue.trim() === '')
        return;
    createTask({ title: inputValue, parentNode: $ul });
    $input.value = '';
}
function createTask({ title, parentNode }) {
    const $li = document.createElement('li');
    $li.textContent = title;
    parentNode.appendChild($li);
}
$submit.addEventListener('click', handleSubmit);
