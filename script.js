let currentPage = 1;

function showPage(pageNumber) {
    const pages = document.querySelectorAll('.page');
    pages.forEach((page, index) => {
        if (index === pageNumber - 1) {
            page.style.display = 'block';
        } else {
            page.style.display = 'none';
        }
    });
}

function nextPage() {
    if (currentPage < 8) {
        currentPage++;
        showPage(currentPage);
    }
}

function previousPage() {
    if (currentPage > 1) {
        currentPage--;
        showPage(currentPage);
    }
}

// Inicialmente exibe a primeira página
showPage(1);
