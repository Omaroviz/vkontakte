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

function search() {

}