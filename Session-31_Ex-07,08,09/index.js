let toDoList = [
    {
        id:1,
        task: `Hit the gym`,
        completed: false,
    },
    {
        id:2,
        task: `Pay bills`,
        completed: false,
    },
    {
        id:3,
        task: `Meet george`,
        completed: false,
    },
    {
        id:4,
        task: `Buy eggs`,
        completed: false,
    },
    {
        id:5,
        task: `Read a book`,
        completed: false,
    },
    {
        id:6,
        task: `Organize office`,
        completed: false,
    }
]

// lấy phần tử ở phần input
const formElement = document.querySelector("#form")
const inputList = document.querySelector("#myInput")
// Ex-07
// lấy phần tử ul
const listContainer = document.getElementById("myUL");
function renderList() {
    // xoá nội dung cũ
    listContainer.textContent = "";

    toDoList.forEach((job) => {
        // tạo 1 phần tử li
        const li = document.createElement("li");
        li.textContent = job.task;

        // Ex-09
        // tạo nút xoá 
        const closeBtn = document.createElement("span");
        closeBtn.textContent = "x";
        closeBtn.classList.add("close");

        // chức năng xoá khi bấm X
        closeBtn.addEventListener("click", (event) => {
            toDoList = toDoList.filter((item) => item.id !== job.id);
            renderList();
        });

        // thêm nút xoá vào li
        li.appendChild(closeBtn);
        listContainer.appendChild(li);
    });
}
//Ex-08
// hàm add thêm vào list
renderList();
formElement.addEventListener("submit", function(event) {
    event.preventDefault();
    const inputValue = inputList.value.trim();

    if (inputValue) {
        const newJob = {
            id: Math.ceil(Math.random() * 100),
            task: inputValue,
            completed: false,
        };
        // thêm job vào object
        toDoList.push(newJob);
        // update lại list
        renderList();
        // làm trống phần input
        inputList.value = "";
    }
});