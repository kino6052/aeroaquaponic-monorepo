# Пишем анти-легаси приложение
### Введение 

В предыдущих статьях я поделился своими соображениями о том, почему UI-проекты в одночасье превращаются в легаси.

Все было сведено к двум ключевым неудовлетворенным потребностям: мгновенная обратная связь и правильные шаблоны проектирования. Что касается шаблонов проектирования, то особое внимание было уделено жесткому разделению представления и логики.

Я даже предположил, что Elm MVU - это тот путь, который данные потребности закроет.
Однако, несмотря на то, что MVU является архитектурой, позволяющей жестко разделять представление и логику, я пришел к выводу, что MVU (и функциональное программирование в целом) страдают от некоторой чуждости естественному процессу мышления и программирования.

Под словом "естественный" я подразумеваю нечто, что коррелирует с языком, который мы используем в повседневной жизни. Функциональное программирование не всегда можно описать таким языком (например, несмотря на то, что монады, включая Observable streams, являются относительно простым понятием, мы вряд ли сможем выразить это понятие на таком языке). Я убедился, что программирование, которое лучше коррелирует с естественным языком, - это многопарадигменное программирование, где вещи не строго OOP и не строго функциональным, а то или другое в зависимости от ясности и удобства работы.

Поэтому программирование ядра приложения (модель/доменный слой) не является вопросом правильности или неправильности. Модель, стоящая за приложением - это описание того, как человек понимает концепцию программы. И лучше всего когда это один человек, ну или если это группа, то они на одной концептуальной странице.

Конечно, концептуальное представление у разных людей может быть очень разное, но это не значит, что надо делать именно так, чтобы было понятно абсолютно всем. Eсли есть полноценные блэк-бокс тесты, то человек перенявший "легаси" программу будет иметь возможность переделать под собственное понимание.

В этой статье я продемонстрирую процесс создания приложения, которое будет содержать необходимые компоненты чистой архитектуры (дяди Боба Мартина) с некоторыми дополнительными, которые я лично считаю важными:

- Общее 
  - Тестируемость 
  - Масштабируемость 
  - Поддерживаемость 
  - Следует принципам SOLID 
  - Передает концептуальное понимание создателя 
- Детали 
  - Инверсия зависимостей 
  -   Позволяет откладывать решения о том, какие инструменты использовать 
    - Не зависит от фреймворков 
    - Позволяет оптимизировать производительность, безопасность и другие аспекты на более поздних этапах разработки 
  - Дизайн как единый источник истины для слоя представления 
- Процесс разработки 
  - Извне во внутрь 
  - TDD 
  
Но хватит философии, теперь по делу.

### Разработка

В этой статье я продемонстрирую процесс создания приложения в стиле "извне во внутрь" (outside-in), где главным источником истины будет  дизайн в Figma.

Затем мы создадим чистое представление как функцию от состояния. Оно не будет содержать никакой логики или состояния (за редкими исключениями).

Логика будет создана в объектно-ориентированном стиле как композиция классов через dependency injection. Это позволит нам отложить такие детали, как выбор хранилища или как будет осуществляться общение с сервисами и т.д.

Модель будет связана с представлением с помощью функции отображения, аналогичной ViewModel. У неё будет необходимая функциональность, чтобы иметь необходимое соответствие со вью, но не будет знания о деталях этого самого вью (например, о Реакте или DOMе и т.д.)

Наличие ViewModel позволит нам писать приложение в стиле TDD, не беспокоясь о сложных библиотеках представления/фреймворках и даже позволяя нам заменять их.

Поскольку и Модель, и ViewModel будут чистыми объектами JS (как POJO), они также должны легко конвертироваться в другие языки.

Важно помнить, что этот подход направлен на создание приложений, защищенных от устаревания (защищенные от устаревания = "адаптируемые к изменениям" = масштабируемые), что, как мы уже обсуждали, требует мгновенной обратной связи (например, через Storybook или блэкбокс-тесты в Jest) и хороших шаблонов проектирования, которыми в нашем случае являются MVVM и DI.

### Шаг 1: Дизайн

Так как инструменты для конвертирования из дизайнов в код все еще далеки от идеала, нам следует рассчитывать больше на свои собственные силы при конвертировании компонентов в самом начале. Тем не менее, по мере того как будет меняться дизайн, мы можем попросить LLM (large language models как ChatGPT) адаптировать изменения в код компонентов, который уже существует. Такой подход гораздо проще, так как если компоненты реализованы "правильно", они обычно совсем небольшие и легко понятны для LLM.

(Вот ссылка на фигму с дизайном приложения)[https://www.figma.com/community/file/1378258280093869378/conduit]


### Шаг 2: Storybook

Как только мы конвертируем дизайн в Storybook, мы можем использовать компоненты для представления сценариев, собирая последовательности заранее настроенных страниц (с определенными пропами). И так как мы знаем, какие пропы должны меняться при определенных взаимодействиях с пользователем, мы готовимся к написанию блэкбокс-тестов.

Структура stories будет выглядеть следующим образом:

* Компоненты
    * [Будут содержать фактическое представление компонента](https://github.com/kino6052/conduit-mvu/tree/master/src/details/view/components)
* Страницы
    * [Страницы, составленные из компонентов](https://github.com/kino6052/conduit-mvu/tree/master/src/details/view/pages)
* Сценарии
    * Последовательность страниц с различными props, чтобы мы могли понять, как props должны меняться при взаимодействии, что позволит нам писать тесты
* Приложение
    * [Фактическое функциональное приложение с подключенными тестовыми двойниками](https://github.com/kino6052/conduit-mvu/blob/master/src/details/view/App.stories.ts)
    * Важно отметить, что нам не нужно подключать реальные базы данных или любой другой ввод-вывод, кроме представления

### Шаг 3: MVVM & TDD

По мере того как пишуться тесты, реализуется логика домена, чтобы эти тесты пройти.

Признаюсь, я разработал примерное приложение с очень небольшим количеством тестов, из которых в финальной версии я оставил лишь один для примера, и больше полагался на систему типов TypeScript для мгновенной обратной связи, поэтому в качестве личного TODO мне нужно будет самому освоить эту практику, так как я верю, что это в конечном итоге Test-driven development экономит много времени для крупных проектов, таких как этот.

Хотя наши тесты должны показывать, правильно ли работает функциональность, структура логики домена сама по себе не является вопросом правильности или неправильности. Концептуальная модель приложения - это описание того, как человек, написавший его, понимает программу концептуально, и лучше, если когда это один человек, ну или группа, находящаяся на одной концептуальной волне.

Как небольшое философское отступление, хотелось бы отметить, что Иммануил Кант революционизировал философию, сместив фокус с идеи о том, что мы напрямую постигаем мир таким, каким он есть на самом деле, к идее о том, что мы постигаем мир таким, каким он является нам. Это означает, что, когда мы изучаем мир, то изучаем скорее то как он в нас отражается, нежели мир сам по себе.

Аналогично, при разработке программы мы не должны стремиться к единственному правильному решению. Вместо этого мы должны стремиться создать программу, которая эффективно представляет наше понимание и концепции. Качество этого понимания может варьироваться, но если программа следует принципам SOLID, тестируема, и работает правильно, то мы достигли своей цели. 

Конечно, концептуальное представление у разных людей может быть очень разное, но это не значит, что надо делать именно так, чтобы было понятно абсолютно всем. Eсли есть полноценные блэк-бокс тесты, то человек перенявший "легаси" программу будет иметь возможность переделать под собственное понимание.

Для иллюстрации: программа не обязательно должна быть объектно-ориентированной или функциональной, так как на самом деле, если бы мы могли мыслить как компьютеры, мы бы писали оптимизированный машинный код напрямую, без использования языков программирования.

Тем не менее, я верю, что каждый UI разработчик мечтал о том, чтобы представить свое приложение в виде простых классов, которые читаются как привычная нам речь.

Технически, MobX позволяет делать именно это - представлять модель в виде простых классов. Однако за это нужно платить: классы должны быть специально обернуты, чтобы  обеспечить автоматическую реактивность, что привяжет домен к фреймворку. Однако представление  приложения в виде простых классов не означает, что мы должны полагаться на еще один фреймворк.

[Напротив, то, что делает MobX, все еще можно реализовать с помощью простых классов.](https://github.com/kino6052/conduit/tree/master/src/app/entities)

В нашем случае ViewModel - это шаг между концептуальным представлением и вью, которое всегда связано с каким-то фреймворком (React, Angular, Vue, Flutter и т.д.). Но поскольку сам ViewModel не связан с фреймворком, мы можем использовать его как упрощенное представление этого самого вью, которое мы действительно можем (и должны) тестировать. Потому что ViewModel в нашем случае - это граница, которая позволит нам писать тесты с точки зрения намерений пользователя, где, например, пользователь нажимает или взаимодействует с чем-то. Это позволит рефакторить и пересматривать наше концептуальное понимание так часто, как это нам нужно.

Таким образом, пока есть тесты, у нас всегда будет возможность для рефакторинга.

**Корень композиции**

Важно помнить, что конечная деталь приложения, которая будет меняться больше всего, - это корень композиции, где все зависимости будут объединены.

Важно продемонстрировать в репозитории кода, как собирается наше приложение максимально прозрачно. Это означает, что всякий раз, когда кто-то смотрит на репозиторий, а затем заглядывает в файл index, он должен понимать, как структурировано приложение и какова его цель.

[Ссылка на корень композицию демо приложения](https://github.com/kino6052/conduit-mvu/blob/master/src/details/index.ts)

### Шаг 4: Подключение к IO

Последняя и самая крутая часть - это возможность откладывать очень сложные решения о технологиях для хранения и других IO как можно дальше в будущее, что позволяет нам сохранять темп и реализовывать функции, зная, что у нас еще есть время принять обоснованное решение на основе потребностей нашего приложения и заинтересованных сторон.

Данный шаг потребует отдельной статьи и рассмотрения.

## Заключение

### Плюсы и минусы
* Плюсы
    * Защищенность от устаревания
    * Обилие информации
        * Основывается на установленных практиках, таких как OOP, MVVM и компонентная композиция
    * "Естественный" стиль программирования
* Минусы
    * Требует сформировать целостное концептуальное понимание приложения
        * Нет четкого алгоритма для создания модели, придется экспериментировать, сомневаться, переосмысливать и рефакторить, пока модель не подойдет под наши нужды
    * Упрощение и оптимизация модели
        * Хотя представление и IO могут быть оптимизированы отдельно, главная оптимизация за которой нужно следить, это чтобы модель была максимально концептуально проста

Целью данной статьи было продемонстрировать как можно писать приложения так, чтобы они не превращались в легаси и адаптировались к изменениям, как и должно быть с настоящим софтом (софт означает что-то мягкое и гибкое).

Статья рассматривать разработку UI с точки зрения максимальной отвязки от вью и через создание тестируемой вью модели, которая и позволяет писать блэк-бокс тесты, которые дадут ту самую обратную связь о которой шла речь.

За время написания этой статьи, мне пришлось много раз пересматривать и рефакторить свою "концептуальную модель" приложения. Я осознаю, что она далека от идеала, но отдаю себе отчет в том, что если бы целью был идеал, я бы никогда не закончил статью.

Поэтому, прежде всего хочу предложить данный материал не как серебряную пулю, а как снэпшот пройденного пути, который даст пищу для размышления и деятельности.

Я же благодарю за внимание и желаю долгой жизни нашим приложениям.

## Полезные ссылки
 1. [Пример приложения](https://github.com/kino6052/conduit-mvu/tree/master): Приложение, созданное для иллюстрации концепций в этой статье
 
 2. [Чистый код, Роберт Мартин](https://www.oreilly.com/library/view/clean-code-a/9780136083238/): Известная книга, объясняющая основные принципы масштабируемого программного обеспечения

 3. [Dependency Injection Principles, Practices, and Patterns](https://www.manning.com/books/dependency-injection-principles-practices-patterns): Книга, которую я считаю практической реализацией концепций, изложенных в "Чистом коде"