/* First time i use typescript */
/* Just learning 👀 */

const $submit = document.getElementById('submit') as HTMLButtonElement;
const $input = document.getElementById('input') as HTMLInputElement;
const $ul = document.getElementById('tasksList') as HTMLUListElement;

type Task = {
    title: string,
    parentNode: HTMLElement
}

function handleSubmit(event: MouseEvent) {
    event.preventDefault();
    const inputValue = $input.value;

    if (inputValue.trim() === '') return;
    createTask({ title: inputValue, parentNode: $ul });

    $input.value = '';
}

function createTask({ title, parentNode }: Task) {
    const $li = document.createElement('li');

    $li.textContent = title;
    parentNode.appendChild($li);
}

$submit.addEventListener('click', handleSubmit);
