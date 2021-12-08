module.exports = class Quote{

    constructor(quote, author){
        this.quote = quote
        this.author = author
    }

    toString(){
        console.log(this.quote)
        console.log(this.author)
    }
}