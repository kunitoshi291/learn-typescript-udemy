export {};

enum Months {
    January = 1,
    February,
    March,
    April,
    May,
    Jun,
    July,
    August,
    September,
    October,
    November,
    December
}

console.log(Months.March);
console.log(Months.August);

enum COLORS {
    RED = '#F0000',
    WHITE = '#FFFFFF',
    GREEN = '#008000' ,
    BLUE = '#0000FF',
    YELLOW = '#FFFF00',
    BLACK = '#000000'
}

let green = COLORS.GREEN;
console.log({ green });

let yellow =  COLORS.YELLOW;
console.log({yellow});


