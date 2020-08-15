# Marusia Game Challenge

Птицепение - викторина для распознавания птиц по их голосам. <br/>

### Demo

https://htmlprogrammist-marusia-game-challange.netlify.app/

### Repository
https://github.com/htmlprogrammist/marusia-game-challenge/tree/master

## Описание основных блоков

- блок с вопросом содержит аудиоплеер с записью голоса птицы и заглушки на месте названия и изображения птицы. Когда игрок выбирает правильный ответ, в блоке с вопросом отображаются название и изображение птицы, голос которой звучал.
- блок с вариантами ответов содержит список с названиями шести разных птиц.  
- блок с описанием птицы содержит данные о ней: изображение, русское и латинское название, аудиозапись голоса, короткая информация.

## Механизм игры

- птица в блоке с вопросом рандомно выбирается из списка с вариантами ответов
- при клике по одному из пунктов списка с вариантами ответов, в блоке с описанием птицы выводятся информация о ней
- если игрок выбрал правильный ответ, в блоке с вопросом выводится название и изображение птицы
- на старте игры score: 0. Если игрок дал правильный ответ с первой попытки, его счёт увеличивается на 5 баллов, каждая следующая попытка даёт на один балл меньше, если правильный ответ дан только с последней, шестой попытки, игрок получает за него 0 баллов
- для правильных и неправильных ответов игрока используется звуковая и цветовая индикация
- когда игрок дал правильный ответ, активируется кнопка "Дальше" и он получает возможность перейти к следующему вопросу
- после последнего вопроса выводится счёт игры: "Вы набрали *** баллов из *** возможных. 
- если набрано не максимально возможное количество баллов, игроку предлагается пройти викторину ещё раз
- если набрано максимально возможное количество баллов, выводится поздравление и уведомление об окончании игры.

## Available Scripts

В директории проекта Вы можете запустить:

### `npm install`

Project installation. Install the dependencies and devDependencies.

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
