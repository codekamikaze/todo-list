{
    const tasks = [];

    const addNewTask = (newTaskContent) => {
        tasks.push({
            content: newTaskContent,
            done: false,
        });
        render();
    };

    const removeTask = (taskIndex) => {
        tasks.splice(taskIndex, 1);
        render();
    };

    const toogleTaskDone = (taskIndex) => {
        tasks[taskIndex].done = !tasks[taskIndex].done;
        render();
    };

    const bindEvents = () => {
        const removeButtonsElements = document.querySelectorAll(".js-section_button--remove");

        removeButtonsElements.forEach((removeButton, index) =>{
            removeButton.addEventListener("click", () => {
                removeTask(index);
            });
        });

        const toggleButtonsDone = document.querySelectorAll(".js-done");

        toggleButtonsDone.forEach((toggleButtonDone, index) => {
            toggleButtonDone.addEventListener("click", () => {
                toogleTaskDone(index);
            });
        });
    };

    const render = () => {
        let htmlString = "";

        for (const task of tasks) {
            htmlString += `
                <li class="section__listItem ${task.done ? "section__listItem--done\"" : "\""}>
                    <button class="section__button section__button--done js-done">${task.done ? "&#10004;" : ""}</button> 
                    <span class="section__listItemText ${task.done ? "section__listItemText--done\"" : "\""}">${task.content}</span>
                    <button class="section__button section__button--remove js-section_button--remove">&#10006;</button>
                </li>
            `;
        }

        document.querySelector(".js-section__list").innerHTML = htmlString;

        bindEvents();
    }

    const onFormReset = () => {
        const resetForm = document.querySelector(".js-form");

        resetForm.reset();
    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        const newTaskContent = document.querySelector(".js-form__input").value.trim();

        onFormReset();

        if (newTaskContent === "") {
            return;
        }

        addNewTask(newTaskContent);
    };

    const init = () => {
        render();

        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", onFormSubmit);
    };

    init();
}