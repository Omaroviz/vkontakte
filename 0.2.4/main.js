function subscribe() {
	const button = document.getElementById('subscribeButton');
	const buttonText = button.textContent.trim();  // Читаем текст кнопки
	if (buttonText === "Подписаться") {
		document.getElementById('postInput').value = "";
		button.textContent = "Отписаться";  // Меняем текст для повторного клика
	} else {
		button.textContent = "Подписаться";  // Возврат назад
	}
}


function addPost() {
	const text = document.getElementById('postInput').value;
	const postname = document.getElementById('postName').value;
	const postpass = document.getElementById('postPassword').value;
	const wall = document.getElementById('wall');
	let likes = 0;
	// const addLike = () => {++likes; alert(likes)}

	if (postpass === "Helio" && text.trim() !== "") {

		const newPost = document.createElement('div');
		newPost.className = 'post';

		newPost.innerHTML = `
        <p class="postmain">${postname}</p>
        <p>${text}</p>
        <div>
            <button class="vk-button-btn">Кнопка</button>
        </div>
    `;

		wall.prepend(newPost);

		document.getElementById('postInput').value = "";
		document.getElementById('postName').value = "";
		document.getElementById('postPassword').value = "";

	}

}

// function search() {
//
// }


function comment(button) {
	// Ищем контейнер комментариев рядом с кнопкой
	let commentsDiv = button.nextElementSibling;

	if (!commentsDiv || !commentsDiv.classList.contains('comments-area')) {
		// Создаём область комментариев, если нет
		commentsDiv = document.createElement('div');
		commentsDiv.className = 'comments-area';
		commentsDiv.style.display = 'none';
		commentsDiv.innerHTML = `
            <div class="comment">Привет! Крутая версия 😎</div>
            <div class="comment">Спасибо за обновление!</div>
            <input type="text" class="comment-input" placeholder="Написать комментарий...">
            <button class="vk-button-btn comment-send" onclick="sendComment(this)">Отправить</button>
        `;
		button.parentNode.appendChild(commentsDiv);
	}

	// Показать/скрыть комментарии
	if (commentsDiv.style.display === 'none' || commentsDiv.style.display === '') {
		commentsDiv.style.display = 'block';
		button.textContent = 'Комментарии';
	} else {
		commentsDiv.style.display = 'none';
		button.textContent = 'Комментарии';
	}
}

function sendComment(sendBtn) {
	const input = sendBtn.previousElementSibling;
	const text = input.value.trim();

	if (text) {
		const newComment = document.createElement('div');
		newComment.className = 'comment';
		newComment.textContent = text;

		// 🔥 НОВЫЙ КОММЕНТ В САМЫЙ ВЕРХ комментариев!
		const commentsArea = sendBtn.closest('.comments-area');
		commentsArea.insertBefore(newComment, commentsArea.firstElementChild);

		input.value = ''; // Очищаем поле
	}
}
