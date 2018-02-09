// Namespace
gallery = {};

// Image gallery data
gallery.algonnquinPark = [    
    {
        campground: 'Kearney Lake',
        imgs: [
            {
                activity: 'Canoeing',
                filename: 'kearney1.jpg'
            },
            {
                activity: 'Swimming',
                filename: 'kearney2.jpg'
            },
            {
                activity: 'Boating',
                filename: 'kearney3.jpg'
            },
            {
                activity: 'Camping',
                filename: 'kearney4.jpg'
            },
        ]
    },
    {
        campground: 'Canisbay Lake',
        imgs: [
            {
                activity: 'Canoeing',
                filename: 'canisbay-lake1.jpg'
            },
            {
                activity: 'Wildlife',
                filename: 'canisbay-lake2.jpg'
            },
            {
                activity: 'Adventure',
                filename: 'canisbay-lake3.jpg'
            },
            {
                activity: 'Portage',
                filename: 'canisbay-lake4.jpg'
            },
        ]
    },
    {
        campground: 'Lake Of Two Rivers',
        imgs: [
            {
                activity: 'Swimming',
                filename: 'lake-of-two-river1.jpg'
            },
            {
                activity: 'Explore',
                filename: 'lake-of-two-river2.jpg'
            },
            {
                activity: 'Camping',
                filename: 'lake-of-two-river3.jpg'
            },
            {
                activity: 'Hiking',
                filename: 'lake-of-two-river4.jpg'
            },
        ]
    },
    {
        campground: 'Pog Lake',
        imgs: [
            {
                activity: 'Canoeing',
                filename: 'pog1.jpg'
            },
            {
                activity: 'Boating',
                filename: 'pog2.jpg'
            },
            {
                activity: 'Hiking',
                filename: 'pog3.jpg'
            },
            {
                activity: 'Beach',
                filename: 'pog4.jpg'
            },
        ]
    }
];

// Maps image gallery array then append to ul
// then map imgs sub-array and append to sub ul
gallery.displayImg = () => {
	gallery.algonnquinPark.map(park => {
        const parkName = park.campground;
        const parkClassName = parkName.toLowerCase().replace(/\s+/g, '-');

        const parkImg = park.imgs.map(img => {
        return  `
            <li class="park-img">
                <h3>${img.activity}</h3>
                <img src="assets/${img.filename}"/>
            </li>
        `}).join(''); 
    
        // Append each algonquin campground to Ul gallery-park-list
        // also append related campground images and info as child Ul
    $('.gallery-park-list').append(`
        <li class="gallery-park ${parkClassName}">
            <h2>${parkName}</h2>
            <ul class="park-img-list">
                ${parkImg}
            </ul>
        </li>
    `)
    });
}
// Effects that controls the animations and effects
gallery.effects = () => {
    // Effects when the campground is clicked
    $('.gallery-park').on('click', function(){
        $(this).find('h2').css('top','30px');
        $(this).addClass('expand').siblings().addClass('collapse');
        $(this).children().addClass('slide-in');
        $('.btn-close').addClass('show');
    }); 
    // $('.gallery-park h2').on('click', function() {
    //         $(this);
    //     // $('.btn-close').removeClass('show');
    //     // $('.gallery-park').removeClass('expand').siblings().removeClass('collapse');
    //     // $('.park-img').removeClass('expand').siblings().removeClass('collapse');
    //     // $('.gallery-park').children().removeClass('slide-in').css('transition-delay', '0s');
    // })   
    // Effects when the Close button is clicked
    $('.btn-close').on('click', function() {
        $('.gallery-park h2').css('top','50%');
        $(this).removeClass('show');
        $('.gallery-park').removeClass('expand').siblings().removeClass('collapse');
        $('.park-img').removeClass('expand').siblings().removeClass('collapse');
        $('.gallery-park').children().removeClass('slide-in').css('transition-delay', '0s');
    })   
    // Effects when the image is clicked
    $('.park-img').on('click', function(){
        if ($(this).hasClass('expand')) {
            $(this).removeClass('expand').siblings().removeClass('collapse');
            $(this).find('h3').fadeIn(300);
        }
        else {
            $(this).addClass('expand').css('border','0px').siblings().addClass('collapse');
            $(this).find('h3').fadeOut(300);
        }
    });
}

// collect
gallery.init = () => {
    gallery.displayImg();
    gallery.effects();
}

// init
$(gallery.init)