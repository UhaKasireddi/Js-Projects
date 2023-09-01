let symbols_4 = ["Spreads", "Diamonds", "Club", "Heart"];
let values = ["Ace", "2", "3","4","5","6","7","8","9","10","Jocker","Queen","King"];
//console.log(values)
let cards = []
for(let i=0;i<symbols_4.length;i++){
    for(let j=0; j<values.length;j++){
        cards.push({ value: values[j],symbol: symbols_4[i] });
        //cards.push({symbols_4[i]:values[j]})
        // let card = {}
        // card[symbols_4[i]] = values[j]
        // cards.push(card)
    }
}
console.log(cards)