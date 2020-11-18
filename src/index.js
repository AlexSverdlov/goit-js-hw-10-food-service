import './styles.css';
import itemsTemplate from './templates/galery-items.hbs';
import menus from './menu.json';

// Вставляем шаблон в список
const markup = itemsTemplate(menus);
const ulGlobalRef = document.querySelector('.js-menu') 
ulGlobalRef.insertAdjacentHTML('beforeend',markup)


const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
// Переключатель светлой-темной темы
const chkBoxRef = document.querySelector('#theme-switch-toggle') 

// Проверяем содержимое localStorage
const saveTheme = localStorage.getItem('Theme')
if (saveTheme) {
    document.body.classList.add(Theme[saveTheme]); 
    chkBoxRef.checked = saveTheme === 'DARK' ? true : false;
}
else { //Добавляем в localStorage светлую тему (по умолчанию)
    localStorage.setItem('Theme','LIGHT')  
    document.body.classList.add('light-theme')
}    

// Функция переключения между темной и светлой темой (изменение класса на body)
function setClassBody() {
    if (document.body.classList.contains('light-theme')) {
        document.body.classList.add('dark-theme')
        document.body.classList.remove('light-theme')
        localStorage.setItem('Theme', 'DARK')  
    }
    else {
        document.body.classList.add('light-theme')
        document.body.classList.remove('dark-theme')
        localStorage.setItem('Theme', 'LIGHT')  
     }
}

// Добавляем слушатель на кнопку
chkBoxRef.addEventListener('change', setClassBody)
 