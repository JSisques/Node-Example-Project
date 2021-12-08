module.exports = Object.freeze({
    SELECT_ALL_QUOTES: "SELECT * FROM QUOTE",
    INSERT_QUOTE: "INSERT INTO QUOTE (QUOTE, AUTHOR) VALUES ('@quote', '@author')",
    SELECT_QUOTE_BY_ID: "SELECT * FROM QUOTE WHERE ID = '@id'"
});