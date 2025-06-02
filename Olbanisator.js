class Olbanisator {
    constructor() {
        this.dictionary = {
            "что" : "што",
            "спо" : "спа",
            "спасибо" : "пасипа",
            "чк" : "чьк",
            "чн" : "чьн",
            "ос" : "ас",
            "сс" : "с",
            "лл" : "л",
            "об" : "аб",
            "ешь" : "иш",
            "ошь" : "аш",
            "ень" : "инь",
            "ест" : "ист",
            "ц" : "тс",
            "ться" : "цо",
            "тся" : "цо",
            "тс" : "ц",
            "лае" : "лои",
            "ливых" : "левых",
            "лин" : "лен",
            "чши" : "тшы",
            "сво" : "сва",
            "стер" : "стир",
            "выс" : "вис",
            "возм" : "вазм",
            "гк" : "хк",
            "рома" : "рама",
            "сели" : "сили",
            "реш" : "риш",
            "реши" : "ришы",
            "ого" : "ова",
            "чего" : "чиво",
            "надо" : "нада",
            "глаза" : "глоза",
            "гляд" : "глид",
            "вокруг" : "вакрук",
            "это" : "ета",
            "нез" : "низ",
            "персо" : "пирса",
            "сокр" : "сакр",
            "поиск" : "поеск",
            "щ" : "сч",
            "золот" : "золат",
            "ным" : "ним",
            "котор" : "катор",
            "прошл" : "прашл",
            "сче" : "ще",
            "счи" : "щи",
            "готов" : "гатов",
            "отр" : "атр",
            "попада" : "папада",
            "таки" : "токи",
            "без" : "биз",
            "долго" : "долга",
            "меня" : "миня",
            "чувств" : "чуств",
            "себя" : "сибя",
            "когда" : "какда",
            "шься" : "шса",
            "получи" : "палучи",
            "все" : "всьо",
            "всё" : "всьо",
            "сейчас" : "чичас",
            "вместе" : "вмести",
        };
    }

    do(text) {
        let words_array = text.split(" ");

        return this._replaceWordsByDict(words_array);
    }

    _replaceWordsByDict(words) {
        let result = '';
        for (const index in words) {
            const print = this._makeWordPrint(words[index]);
            result += this._findReplacements(words[index], print);
        }

        return result;
    }

    _findReplacements(word, print) {
        for (const key in this.dictionary) {
            const pattern = new RegExp(key, 'giu');
            const replacement = this.dictionary[key];
            if (word.match(pattern)) {
                const recovered = this._recoverPrint(print, replacement);

               return word.replace(pattern, recovered) + " ";
            }
        }

        return word + " ";
    }

    _makeWordPrint(word) {
        let print = "";
        for (const letter in word) {
            print += (word[letter] ===  word[letter].toUpperCase() ? '1' : '0');
        }

        return print;
    }

    _recoverPrint(print, word) {
        let result = "";
        if (print.length !== word.length) {
            print = print.substring(0, word.length);
        }
        for (let i = 0; i < print.length; i++) {
            switch (print[i]) {
                case '0':
                    result += word[i].toLowerCase();
                    break;
                case '1':
                    result += word[i].toUpperCase();
                    break;
                default:
                    throw new Error("Wrong print expected.");
            }
        }

        return result;
    }
}
