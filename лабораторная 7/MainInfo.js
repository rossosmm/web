let post_main_info = [
	{
		"title" : "Работа с Git в Visual Studio Code",
		"intro" : "Один из способов работать с Гитом.",
		"labels" : ["Git", "Консоль"],
		"image" : "https://github.com/RSTU-Citg-Space/web_lab/blob/frontend/AVB/Lab_07_Vuejs/content/post-1.png?raw=true",
		"Creator" : "@Cruze777",
	},
	{
		"title" : "Adobe покупают Фигму. Всё пропало?",
		"intro" : "Не факт, но есть разные мнения.",
		"labels" : ["Figma"],
		"image" : "https://github.com/RSTU-Citg-Space/web_lab/blob/frontend/AVB/Lab_07_Vuejs/content/post-2.png?raw=true",
		"Creator" : "@OtherUserAccountName",
	},
	{
		"title" : "Все научились программировать. А дальше-то что?",
		"intro" : "Ученье — свет.",
		"labels" : ["Обучение", "Карьера"],
		"image" : "https://github.com/RSTU-Citg-Space/web_lab/blob/frontend/AVB/Lab_07_Vuejs/content/post-3.png?raw=true",
		"Creator" : "@Cruze777",
	},
	{
		"title" : "Мне тяжело учиться, кто поможет?",
		"intro" : "Попали в патовую ситуацию? Тогда кликайте на статью.",
		"labels" : ["Обучение"],
		"image" : "https://github.com/RSTU-Citg-Space/web_lab/blob/frontend/AVB/Lab_07_Vuejs/content/post-4.png?raw=true",
		"Creator" : "@Cruze777",
	},
	{
		"title" : "Ключевые навыки фронтендеров в 2022",
		"intro" : "Ежегодное исследование рынка от HTML Academy.",
		"labels" : ["Обучение", "Карьера"],
		"image" : "https://github.com/RSTU-Citg-Space/web_lab/blob/frontend/AVB/Lab_07_Vuejs/content/post-5.png?raw=true",
		"Creator" : "@Cruze777",
	},
	{
		"title" : "Фронтенд-новости",
		"intro" : "WAI-ARIA, новинки HTML-форм и 12 ошибок любого джаваскриптера.",
		"labels" : ["Новости"],
		"image" : "https://github.com/RSTU-Citg-Space/web_lab/blob/frontend/AVB/Lab_07_Vuejs/content/post-6.png?raw=true",
		"Creator" : "@OtherUserAccountName",
	},
];

let Avtors = [
	{
		"NameAvtor" : "Юзьеров Константин Агапович",
		"LoginAvtor" : "@OtherUserAccountName",
		"SubscibersCount" : "57",
		"SignCount" : "4",
        "NoteCount" : "108",
	},
    {
		"NameAvtor" : "Крузинштерн Александр Васильевич",
		"LoginAvtor" : "@Cruze777",
		"SubscibersCount" : "4",
		"SignCount" : "57",
        "NoteCount" : "90",
	}
];

for(let i = 0; i<Avtors.length; i++){
	let opt = document.createElement("option")
	opt.innerHTML = Avtors[i].NameAvtor;
	opt.value = Avtors[i].LoginAvtor;

	document.querySelector("#SelectAvtor").appendChild(opt);
}