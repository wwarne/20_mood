/**
 * Created by user on 28.07.2017.
 */
(function () {
    "use strict";
    var quotes = [
        {
            "phrase": "Кукурузные хлопья - теперь без асбеста!",
            "signature": "©Неизвестный маркетолог"
        },
        {
            "phrase": "Собираюсь жить вечно, пока всё идёт нормально"
        },
        {
            "phrase": "Вывеска над кафе — '\u003cМы открылись\u003e'. Что-то не так. Где же '\u003c/Мы открылись\u003e'?"
        },
        {
            "phrase": "Если ты будешь усердно работать по 8 часов в день, то обязательно станешь боссом и начнешь работать по 12",
            "signature": "Тест тест"
        },
        {
            "phrase": "Ничто не дарит такой сладкий сон, как сломавшийся в ночь с воскресенье на понедельник будильник."
        },
        {
            "phrase": "Если Вас посетил товарищ которого Вы давно не видели, лучше первым попросить взаймы денег."
        },
        {
            "phrase": "Варварские времена, когда колбасу делали из животных, миновали."
        },
        {
            "phrase": "Даже после малюсенькой улыбочки в организме умирает один микроб."
        },
        {
            "phrase": "Рецепт армейских канапе: просто положите кусочек хлеба на другой кусочек хлеба."
        },
        {
            "phrase": "У всех дома есть пакет с пакетами, а у меня ещё есть кастрюля с кастрюлями."
        },
        {
            "phrase": "кто рано встает, тому бог дрель дает"
        },
        {
            "phrase": "8:00 бодрость, ты где?\n00:00     я здесь!"
        },
        {
            "phrase": "Он умел делать всё… Правда, у него нифига не получалось."
        },
        {
            "phrase": "Чем древнее имена авторов, тем их изречения кажутся мудрее, а открытия — более великими."
        },
        {
            "phrase": "Человек всегда верит в чудо, а особенно, когда нажимает на банкомате кнопку «Запрос баланса»."
        },
        {
            "phrase": "Не можешь противостоять - противолежи!"
        },
        {
            "phrase": "Увидел объявление «Купим машину в любом состоянии». Приехал. Не обманули. Были в драбадан, но машину купили."
        },
        {
            "phrase": "Россия — страна безграничных возможностей! Только здесь вы можете превысить лимит безлимитного интернета!"
        }
    ];

    var currentQuoteIndex = 0;
    var quoteElement = document.getElementById("jsFunQuote");
    var signatureElement = document.getElementById("jsAuthor");
    var buttonNext = document.getElementById("jsNextQuote");
    // Reading ordered quotes every time is boring, so let's shuffle them for every visit.
    shuffle(quotes);
    buttonNext.addEventListener("click", showQuote);
    showQuote();


    function getNextQuote() {
        if (currentQuoteIndex === quotes.length) {
            return {"phrase": "К сожалению, фразы закончились."}
        }
        currentQuoteIndex++;
        return quotes[currentQuoteIndex - 1];
    }

    function showQuote() {
        var nextQuote = getNextQuote();
        // I don't use innerHTML because some quotes have html in it.
        quoteElement.innerText = nextQuote["phrase"];
        if (nextQuote["signature"]) {
            signatureElement.innerText = nextQuote["signature"];
        } else {
            signatureElement.innerText = "";
        }
    }

    /**
     * Shuffles array in place
     * @param {Array} a The array containing the items.
     */
    function shuffle(a) {
        var j, x, i;
        for (i = a.length; i; i--) {
            j = Math.floor(Math.random() * i);
            x = a[i - 1];
            a[i - 1] = a[j];
            a[j] = x;
        }
    }

}());