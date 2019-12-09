<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">
    <title>Cinema project</title>
    <link rel="stylesheet" href="css/reset.css">
    <link rel="stylesheet" href="css/main.css">
    <link rel="stylesheet" href="css/media.css">
    <style>
        svg g:hover {
            filter: url(#Filter_2)
        }
    </style>
    <link rel="stylesheet" href="css/owl.carousel.min.css">
    <link rel="stylesheet" href="css/owl.theme.default.min.css">
    <script src="js/films.js"></script>
</head>


<body>
    <!-- ШАПКА -->
    <div class="block-01">
        <header>
            <div class="block-01__logo">
                <a href="http://university.innopolis.ru">
                    <img src="img/logo.png" alt="">
                </a>
            </div>
            <nav>
                <div class="block-01__menu_burger">
                    <span></span>
                </div>
                <ul>
                    <li><a href="#">Заказать билет</a></li>
                    <li><a href="#block-02">Преимущества</a></li>
                    <li><a href="#block-05">Фильмы</a></li>
                    <li><a href="#">Контакты</a></li>
                </ul>
                <div class="block-01__your_city">
                    <span>Ваш город:</span>
                    <span id="block-01__city">Выберете город</span>
                </div>
            </nav>
            <h1>Закажите билет в кино</h1>
            <h2>Всем покупателям подарок!</h2>
        </header>
    </div>

    <!-- ПРЕИМУЩЕСТВА -->
    <p><a name="block-02"></a></p>
    <div class="block-02">
        <div class="block-02__info-wrap">
            <div class="block-02__info">
                <h2>Добро пожаловать!</h2>
                <p>Cumque dolorem eum harum laudantium libero molestias saepe soluta? Facere minima optio perferendis
                    quibusdam quis reprehenderit, saepe! Debitis enim optio saepe voluptatibus.</p>
                <p>Cumque dolorem eum harum laudantium libero molestias saepe soluta? Facere minima optio perferendis
                    quibusdam quis reprehenderit, saepe! Debitis enim optio saepe voluptatibus.</p>
            </div>
        </div>

        <div class="block-02__container">
            <h2>Почему мы?</h2>
            <div class="block-02__row">
                <div class="block-02__col">
                    <div class="block-02__image-wrap">
                        <img src="img/b2_icon_1.jpg" alt="">
                    </div>
                    <h3>Большие экраны</h3>
                    <p>Meet the Community you’ve always talked with, in real life! This meetup will be all about authors
                        engaging each other with interesting<br>coversation</p>
                </div>

                <div class="block-02__col">
                    <div class="block-02__image-wrap">
                        <img src="img/b2_icon_2.jpg" alt="">
                    </div>
                    <h3>Объемный звук</h3>
                    <p>In this meetup you will get to know the marketplaces better, because that’s why were all here for
                        right? Learn a few tips and tricks from experienced authors from all over the country.</p>
                </div>

                <div class="block-02__col">
                    <div class="block-02__image-wrap">
                        <img src="img/b2_icon_3.jpg" alt="">
                    </div>
                    <h3>Удобные кресла</h3>
                    <p>Gather round fellow authors!<br>Hear the stories of success from your favorite authors and learn
                        how they we able to tackle their problems and become successful.</p>
                </div>
            </div>
        </div>
    </div>

    <!-- ТАБЛИЦА С СЕАНСАМИ -->
    <div class="block-03">
        <h3 class="block-03__header">
            Выберите фильм
        </h3>
        <div class="block-03__container">
            <table id="films_hire" class="block-03__table">
                <thead>
                    <tr>
                        <th class="block-03__table_colsize-1"><a href="#">Начало <span
                                    class="block-03__triangle-up"></span></a></th>
                        <th><a href="#">Название фильма <span class="block-03__triangle-down"></span></a></th>
                        <th>Жанр</th>
                        <th>Цена</th>
                        <th class="block-03__table_colsize-4"></th>
                    </tr>
                </thead>
                <tbody></tbody>
            </table>
        </div>
        <div class="block-03__text">
            <p>Please keep in mind that the timings may differ according to the flow of the event. The even is actually
                day long and we do plan to finish it within our set time but it doesn’t have to be, if we all agree to
                hangour for some time more, what harm could it do? :)</p>
        </div>
    </div>

    <!-- ПОДАРОК -->
    <div class="block-04">
        <div class="block-04__image-wrap">
            <div class="block-04__image">
                <img src="#" alt="">
            </div>
        </div>

        <div class="block-04__back">
            <div class="block-04__container">
                <div class="block-04__text">
                    <h3>Подарок каждому!</h3>
                    <p>Are you an Elite author in the Envato Marketplaces? If so we are proud of you! We want to give
                        our thanks in achieving great success in the marketplace and we want to make known to the people
                        of our country that you are amazing! Our Elite gifting program includes giving you special
                        merchandize from our community and also promote your works in our community.</p>
                    <p>All you have to do is contact us by clicking the button here and then its just going to the
                        event, saying something motivational and taking that swag while looking amazing infront of
                        thousands of other community members.</p>
                    <p>*Be advised, we will only give you Elite thank you swag for each level of elite you
                        cross.<br>That means if you do not cross to the next elite level before the next event, you
                        cannot claim your prizes.</p>
                </div>
                <button id="block-04__get-present">Получить подарок</button>
            </div>
        </div>
    </div>

    <!-- ФИЛЬМЫ -->
    <div class="block-05">
        <div class="block-05__text">
            <h4>Фильмы</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci alias, animi, commodi eius
                ipsum,<br>laudantium neque nihil omnis perferendis sed sequi tempore! Ad ea esse ex inventore
                repudiandae, suscipit!</p>
        </div>
        <p><a name="block-05"></a></p>
        <div id = "filmsNew" class="block-05__row owl-carousel">
            <!-- <div class="block-05__col block-05__empty">
            </div> -->
        </div>
            
    </div>

    <!-- FOOTER -->
    <footer class="block-06">
        <div class="block-06__map">
            <iframe src="https://yandex.ru/map-widget/v1/-/CGHPaZ77" width="100%" height="100%" frameborder="1" allowfullscreen="true"></iframe>
        </div>
        <div class="block-06__links">
            <a href="http://fb.com" title="fb" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 49 49">
                    <defs>
                        <filter filterUnits="userSpaceOnUse" id="Filter_1" x="0px" y="0px" width="48" height="48">
                            <feOffset in="SourceAlpha" dx="0" dy="1" />
                            <feGaussianBlur result="blurOut" stdDeviation="1.5" />
                            <feFlood flood-color="rgb(0, 0, 0)" result="floodOut" />
                            <feComposite operator="atop" in="floodOut" in2="blurOut" />
                            <feComponentTransfer>
                                <feFuncA type="linear" slope="0.25" />
                            </feComponentTransfer>
                            <feMerge>
                                <feMergeNode />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                        <filter filterUnits="userSpaceOnUse" id="Filter_2" x="0px" y="0px" width="48" height="48">
                            <feOffset in="SourceAlpha" dx="0" dy="1" />
                            <feGaussianBlur result="blurOut" stdDeviation="0" />
                            <feFlood flood-color="rgb(0, 0, 0)" result="floodOut" />
                            <feComposite operator="atop" in="floodOut" in2="blurOut" />
                            <feComponentTransfer>
                                <feFuncA type="linear" slope="0.25" />
                            </feComponentTransfer>
                            <feMerge>
                                <feMergeNode />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                    </defs>
                    <g filter="url(#Filter_1)">
                        <path fill-rule="evenodd" fill="rgb(255, 255, 255)"
                            d="M23.500,44.999 C11.073,44.999 1.000,34.926 1.000,22.500 C1.000,10.073 11.073,-0.000 23.500,-0.000 C35.926,-0.000 46.000,10.073 46.000,22.500 C46.000,34.926 35.926,44.999 23.500,44.999 ZM24.044,10.170 C18.962,10.170 20.120,16.199 19.951,18.397 C19.951,18.414 16.844,18.397 16.844,18.397 L16.844,22.488 L19.942,22.488 L19.942,36.884 L25.089,36.884 L25.078,22.488 L28.526,22.488 L29.202,18.375 L25.089,18.420 C25.089,15.500 24.863,14.312 26.570,14.312 C26.723,14.312 29.219,14.306 29.219,14.306 L29.224,10.170 L24.044,10.170 Z" />
                    </g>
                </svg>
            </a>
            <a href="http://twitter.com" title="twitter" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 49 49">
                    <defs>
                        <filter filterUnits="userSpaceOnUse" id="Filter_1" x="0px" y="0px" width="48px" height="48px">
                            <feOffset in="SourceAlpha" dx="0" dy="1" />
                            <feGaussianBlur result="blurOut" stdDeviation="1.5" />
                            <feFlood flood-color="rgb(0, 0, 0)" result="floodOut" />
                            <feComposite operator="atop" in="floodOut" in2="blurOut" />
                            <feComponentTransfer>
                                <feFuncA type="linear" slope="0.25" />
                            </feComponentTransfer>
                            <feMerge>
                                <feMergeNode />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                        <filter filterUnits="userSpaceOnUse" id="Filter_2" x="0px" y="0px" width="48px" height="48px">
                            <feOffset in="SourceAlpha" dx="0" dy="1" />
                            <feGaussianBlur result="blurOut" stdDeviation="0" />
                            <feFlood flood-color="rgb(0, 0, 0)" result="floodOut" />
                            <feComposite operator="atop" in="floodOut" in2="blurOut" />
                            <feComponentTransfer>
                                <feFuncA type="linear" slope="0.25" />
                            </feComponentTransfer>
                            <feMerge>
                                <feMergeNode />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                    </defs>
                    <g filter="url(#Filter_1)">
                        <path fill-rule="evenodd" fill="rgb(255, 255, 255)"
                            d="M24.475,45.975 C12.049,45.975 1.975,35.901 1.975,23.475 C1.975,11.048 12.049,0.975 24.475,0.975 C36.901,0.975 46.975,11.048 46.975,23.475 C46.975,35.901 36.901,45.975 24.475,45.975 ZM36.437,21.249 C34.699,15.199 30.523,15.199 30.523,15.199 C30.523,15.199 32.296,14.193 32.244,13.580 C31.699,13.188 30.605,13.972 30.513,13.972 C30.789,13.778 30.625,13.226 30.267,13.017 C29.739,13.069 29.279,14.040 29.279,14.040 C29.279,14.040 29.020,13.563 28.785,13.563 C25.990,14.330 24.021,20.781 24.030,20.789 C14.903,14.628 14.298,15.813 14.298,15.830 C13.582,17.432 16.360,19.460 16.360,19.460 L15.566,19.484 C15.566,19.484 14.399,19.445 14.654,20.279 C14.914,21.344 16.298,22.448 16.309,22.460 C16.991,22.783 17.843,22.476 17.843,22.476 C17.843,22.476 16.940,22.948 16.368,23.305 C15.426,23.914 16.103,24.454 16.205,24.556 C17.432,25.868 19.360,25.783 19.360,25.783 C19.360,25.783 18.464,26.857 18.457,27.265 C18.457,27.930 19.053,28.340 19.104,28.390 C19.637,28.755 20.427,28.800 20.434,28.800 C15.495,34.032 9.543,28.769 9.543,28.748 C10.208,32.583 15.849,36.282 25.768,34.850 C33.812,33.572 36.386,24.760 36.386,24.760 C36.386,24.760 39.709,24.947 40.084,22.971 C39.045,23.158 37.545,22.852 37.545,22.852 C37.545,22.852 40.101,21.744 40.221,20.414 C38.721,21.573 36.488,21.249 36.437,21.249 Z" />
                    </g>
                </svg>
            </a>
            <a href="https://www.linkedin.cn/" title="linkedin" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 49 49">
                    <defs>
                        <filter filterUnits="userSpaceOnUse" id="Filter_1" x="0px" y="0px" width="48px" height="48px">
                            <feOffset in="SourceAlpha" dx="0" dy="1" />
                            <feGaussianBlur result="blurOut" stdDeviation="1.5" />
                            <feFlood flood-color="rgb(0, 0, 0)" result="floodOut" />
                            <feComposite operator="atop" in="floodOut" in2="blurOut" />
                            <feComponentTransfer>
                                <feFuncA type="linear" slope="0.25" />
                            </feComponentTransfer>
                            <feMerge>
                                <feMergeNode />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                        <filter filterUnits="userSpaceOnUse" id="Filter_2" x="0px" y="0px" width="48px" height="48px">
                            <feOffset in="SourceAlpha" dx="0" dy="1" />
                            <feGaussianBlur result="blurOut" stdDeviation="0" />
                            <feFlood flood-color="rgb(0, 0, 0)" result="floodOut" />
                            <feComposite operator="atop" in="floodOut" in2="blurOut" />
                            <feComponentTransfer>
                                <feFuncA type="linear" slope="0.25" />
                            </feComponentTransfer>
                            <feMerge>
                                <feMergeNode />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                    </defs>
                    <g filter="url(#Filter_1)">
                        <path fill-rule="evenodd" fill="rgb(255, 255, 255)"
                            d="M23.535,45.071 C11.109,45.071 1.035,34.997 1.035,22.570 C1.035,10.144 11.109,0.071 23.535,0.071 C35.962,0.071 46.035,10.144 46.035,22.570 C46.035,34.997 35.962,45.071 23.535,45.071 ZM13.873,11.721 C12.424,11.721 11.250,12.896 11.250,14.345 C11.250,15.794 12.424,16.969 13.873,16.969 C15.322,16.969 16.496,15.794 16.496,14.345 C16.496,12.896 15.322,11.721 13.873,11.721 ZM16.653,18.624 L11.562,18.624 L11.562,33.990 L16.653,33.990 L16.653,18.624 ZM29.734,18.249 C26.611,18.280 25.666,20.076 25.182,20.810 L25.182,18.530 L20.026,18.530 L20.026,33.927 L25.179,33.927 L25.179,25.745 C25.179,25.745 24.810,22.590 27.958,22.590 C30.292,22.590 30.332,25.109 30.308,25.452 C30.306,25.291 30.304,25.270 30.301,25.464 C30.301,25.508 30.305,25.498 30.308,25.452 C30.319,26.501 30.301,33.958 30.301,33.958 L35.360,33.974 C35.360,33.974 35.423,25.948 35.423,25.916 C35.423,24.464 35.449,18.249 29.734,18.249 Z" />
                    </g>
                </svg>
            </a>
            <a href="https://plus.google.com/" title="plus.google" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 49 49">
                    <defs>
                        <filter filterUnits="userSpaceOnUse" id="Filter_1" x="0px" y="0px" width="49px" height="49px">
                            <feOffset in="SourceAlpha" dx="0" dy="1" />
                            <feGaussianBlur result="blurOut" stdDeviation="2" />
                            <feFlood flood-color="rgb(0, 0, 0)" result="floodOut" />
                            <feComposite operator="atop" in="floodOut" in2="blurOut" />
                            <feComponentTransfer>
                                <feFuncA type="linear" slope="0.25" />
                            </feComponentTransfer>
                            <feMerge>
                                <feMergeNode />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                    </defs>
                    <g filter="url(#Filter_1)">
                        <path fill-rule="evenodd" fill="rgb(255, 255, 255)"
                            d="M24.475,45.950 C12.049,45.950 1.975,35.876 1.975,23.449 C1.975,11.023 12.049,0.949 24.475,0.949 C36.901,0.949 46.975,11.023 46.975,23.449 C46.975,35.876 36.901,45.950 24.475,45.950 ZM20.724,10.471 C17.281,10.471 15.706,11.388 14.660,12.282 C13.748,13.194 12.533,14.555 12.567,16.800 C12.567,18.741 14.001,22.105 18.103,22.121 C18.373,22.105 18.536,22.116 19.177,22.065 C18.958,22.571 18.862,22.887 18.845,23.359 C18.845,24.220 19.155,24.821 19.847,25.632 C17.872,25.834 15.343,25.941 13.433,27.207 C10.339,29.097 10.665,31.364 10.665,31.330 C10.902,36.309 18.108,36.208 18.086,36.174 C23.869,36.118 26.789,32.936 26.789,29.750 C26.789,28.035 26.104,26.452 24.160,25.048 C23.307,24.271 22.059,23.816 22.064,22.685 C22.064,20.626 25.855,20.183 25.855,16.198 C25.722,13.158 23.672,11.848 23.410,11.679 C23.465,11.679 25.511,11.680 25.511,11.680 L27.683,10.471 C27.683,10.471 20.758,10.471 20.724,10.471 ZM37.758,13.478 L34.586,13.478 L34.586,10.305 L32.470,10.305 L32.470,13.478 L29.297,13.478 L29.297,15.593 L32.470,15.593 L32.470,18.766 L34.586,18.766 L34.586,15.593 L37.758,15.593 L37.758,13.478 ZM19.438,21.208 C16.552,21.049 15.606,16.770 15.606,16.770 C15.606,16.770 14.484,11.716 18.530,11.671 C21.689,11.330 22.771,16.188 22.771,16.188 C22.771,16.188 23.916,21.208 19.438,21.208 ZM24.707,31.122 C24.623,31.257 25.095,34.559 19.694,34.762 C13.889,34.661 13.765,30.982 13.765,30.644 C13.741,26.808 18.910,26.618 20.240,26.576 C21.388,26.723 24.667,28.627 24.707,31.122 Z" />
                    </g>
                </svg>
            </a>
            <a href="https://www.tumblr.com/" title="tumblr" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 49 49">
                    <defs>
                        <filter filterUnits="userSpaceOnUse" id="Filter_1" x="0px" y="0px" width="48px" height="48px">
                            <feOffset in="SourceAlpha" dx="0" dy="1" />
                            <feGaussianBlur result="blurOut" stdDeviation="1.5" />
                            <feFlood flood-color="rgb(0, 0, 0)" result="floodOut" />
                            <feComposite operator="atop" in="floodOut" in2="blurOut" />
                            <feComponentTransfer>
                                <feFuncA type="linear" slope="0.25" />
                            </feComponentTransfer>
                            <feMerge>
                                <feMergeNode />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                        <filter filterUnits="userSpaceOnUse" id="Filter_2" x="0px" y="0px" width="48px" height="48px">
                            <feOffset in="SourceAlpha" dx="0" dy="1" />
                            <feGaussianBlur result="blurOut" stdDeviation="0" />
                            <feFlood flood-color="rgb(0, 0, 0)" result="floodOut" />
                            <feComposite operator="atop" in="floodOut" in2="blurOut" />
                            <feComponentTransfer>
                                <feFuncA type="linear" slope="0.25" />
                            </feComponentTransfer>
                            <feMerge>
                                <feMergeNode />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                    </defs>
                    <g filter="url(#Filter_1)">
                        <path fill-rule="evenodd" fill="rgb(255, 255, 255)"
                            d="M23.499,44.999 C11.073,44.999 0.999,34.926 0.999,22.499 C0.999,10.073 11.073,-0.001 23.499,-0.001 C35.925,-0.001 45.999,10.073 45.999,22.499 C45.999,34.926 35.925,44.999 23.499,44.999 ZM30.994,30.137 C27.117,31.923 24.988,31.312 24.988,28.260 C24.988,26.670 24.992,21.993 24.992,21.993 L30.000,21.993 L30.000,17.981 L24.987,17.984 L24.987,11.959 C24.987,11.959 22.697,11.958 21.588,11.958 C21.402,14.735 20.468,16.307 17.014,18.005 C17.014,19.134 17.011,21.970 17.011,21.970 L20.000,21.970 C20.000,21.970 20.000,29.654 20.000,30.989 C20.000,33.629 22.408,34.654 24.119,34.904 C26.237,35.214 28.874,34.829 30.994,34.132 C30.994,32.886 30.994,31.757 30.994,30.137 Z" />
                    </g>
                </svg>
            </a>
            <p>Hope we see you at the event!<br>All Rights Reserved. Envato Bangladesh © 2015</p>
        </div>

    </footer>

    <!-- ВСПЛЫВАЮЩИЕ ОКНА -->
    <!-- Форма получения подарка -->
    <div id="block-07">
        <form method="POST" action="serv.php">
            <div id="block-07__present-window">
                <button id="block-07__close-present-window">X</button>
                <div>
                    <input name="name" id="block-07__client-name" placeholder="Введите имя">
                    <?php if(isset($_GET['error_name']) && $_GET['error_name']) { ?>
                        <p><?php echo $_GET['error_name']?></p>
                    <?php } ?>
                </div>
                <div>
                    <select name="present" id="block-07__type-of-present">
                        <option value="0">Выберете подарок</option>
                        <option value="1">Подарок 1</option>
                        <option value="2">Подарок 2</option>
                        <option value="3">Подарок 3</option>
                    </select>
                </div>
                <div>
                    <button name="submit" id="block-07__get-present" class="button" type="submit">Получить</button>
                </div>
            </div>
        </form> 
    </div>

    <!-- Форма заказа билета -->
    <div id="block-08">
        <div id="block-08__booking-window">
            <button id="block-08__close-booking-window">X</button>
            <div>
                <span>Название фильма:</span>
                <span id="block-08__film-name"></span>
            </div>
            <div>
                <span>Начало сеанса:</span>
                <span id="block-08__film-start"></span>
            </div>
            <div>
                <span>Жанр:</span>
                <span id="block-08__film-genre"></span>
            </div>
            <div class="block-08__price">
                <span>Стоимость билета:</span>
                <span id="block-08__film-price">0</span>
                <span>руб.</span>
            </div>
            <div>Выбранное место:</div>
            <div>
                <input type="text" name="place" id="block-08__chosen_place" placeholder="Выбранное место">
            </div>
            <div class="block-08__price2">
                <span>Стоимость билета:</span>
                <span id="block-08__film-price2">0</span>
                <span>руб.</span>
            </div>
            <div>
                <input type="text" name="tel" id="block-08__client-phone" placeholder="Номер телефона" minlength="13" maxlength="13">
            </div>
            <div>
                <input id="block-08__client-name" placeholder="Ваше имя">
            </div>
            <div>
                <button id="block-08__book" class="button" type="submit">Забронировать</button>
            </div>
            <!-- <div class="block-08__places">
            </div> -->
        </div>
    </div>

    <!-- Форма выбора города -->
    <div id="block-09">
        <div id="block-09__city-window">
            <div>
                <p class="block-09__city_title">Ваш город</p>
            </div>
            <div>
                <input name="city_choose" id="block-09__city-name" placeholder="Введите город">
            </div>
            <div id="block-09__search_result">
            </div>
        </div>
    </div>

    <div id="output"></div>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <!-- <script src="js/metrics.js"></script> -->
    <script src="js/getPresent.js"></script>
    <script src="js/jquery-3.4.1.min.js"></script>
    <script src="js/owl.carousel.min.js"></script>
    
    <!-- <script type="text/babel">
        const getMessage = () => "Hello World";
        document.getElementById('output').innerHTML = getMessage();
    </script> -->
    
</body>

</html>