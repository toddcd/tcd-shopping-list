$(document).ready(function () {
    $('#js-shopping-list-form').submit(event => {
        event.preventDefault();

        const item = $(this).find('input[name="shopping-list-entry"]').val();
        const newItem = $('<li><span class="shopping-item">' + item + '</span>'
            + '<div class="shopping-item-controls">'
            + '<button class="shopping-item-toggle">'
            + '<span class="button-label">check</span>'
            + '</button><button class="shopping-item-delete">'
            + '<span class="button-label">delete</span></button>'
            + '</div>'
            + '</li>');

        $(".shopping-list").append(newItem);

    });

    $('.shopping-list').on('click', 'li', function (event) {
        if (event.target.innerText === "delete") {
            this.remove();
        } else if (event.target.innerText === "check") {
            $(this).find('span.shopping-item').toggleClass('shopping-item__checked');
        }
    });
});




