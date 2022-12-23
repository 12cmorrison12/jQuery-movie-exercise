$('.form').on('submit', function(e) {
    e.preventDefault();

    let $movieTitle = $('input').eq(0).val();
    let $movieRating = $('input').eq(1).val();

    if($movieTitle.length < 2) {
        throw new Error('Movie title must be at least 2 characters long');
    };
    
    $('.output').append('<p class="movie">'+ $movieTitle +'</p>', '<p class="movie">'+ $movieRating + '</p>',
    '<button class="delete">X</button>');

    $('.delete').on('click', function(e) {
        $('p').remove(".movie");
        $('.delete').remove();
    })
    
    $('#rating-form').trigger('reset');
})