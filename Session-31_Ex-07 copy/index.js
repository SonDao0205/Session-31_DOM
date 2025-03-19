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


// Lấy phần tử danh sách từ HTML
const listContainer = document.getElementById("myUL");

// Hàm render danh sách công việc
function renderList() {
    listContainer.innerHTML = ""; // Xóa nội dung cũ

    toDoList.forEach((job) => {
        // Tạo một phần tử li mới
        const li = document.createElement("li");
        li.textContent = job.task;

        // Nếu công việc đã hoàn thành, thêm class "checked"
        if (job.completed) {
            li.classList.add("checked");
        }

        // Khi nhấn vào công việc, chuyển trạng thái hoàn thành
        li.addEventListener("click", () => {
            job.completed = !job.completed;
            renderList(); // Cập nhật lại danh sách
        });

        // Tạo nút "Xóa" cho từng công việc
        const closeBtn = document.createElement("span");
        closeBtn.textContent = "×";
        closeBtn.classList.add("close");

        // Xóa công việc khi nhấn vào nút "X"
        closeBtn.addEventListener("click", (event) => {
            event.stopPropagation(); // Ngăn chặn sự kiện click vào li
            toDoList = toDoList.filter((item) => item.id !== job.id);
            renderList();
        });

        // Thêm nút xóa vào li
        li.appendChild(closeBtn);
        listContainer.appendChild(li);
    });
}

// Gọi hàm để hiển thị danh sách ban đầu
renderList();
