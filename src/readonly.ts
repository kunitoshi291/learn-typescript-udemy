export {};

class VisaCard {
    constructor(public readonly owner: string) {}
}

let myVisaCard = new VisaCard('くにさん');
console.log(myVisaCard.owner);
// myVisaCard.owner = 'ベーコン';
