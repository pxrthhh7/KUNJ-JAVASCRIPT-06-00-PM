let isDark = false;

function switchmode() {
    const container = document.getElementById('container');
    const button = document.getElementById('toggleBtn');

    isDark = !isDark;

    if (isDark) {
        container.classList.remove('bg-white');
        container.classList.add('bg-black');

        button.classList.remove('bg-black', 'text-white');
        button.classList.add('bg-white', 'text-black');
        button.textContent = 'Light Mode';
    } else {
        container.classList.remove('bg-black');
        container.classList.add('bg-white');

        button.classList.remove('bg-white', 'text-black');
        button.classList.add('bg-black', 'text-white');
        button.textContent = 'Dark Mode';
    }
}