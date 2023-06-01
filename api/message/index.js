module.exports = async function (context, req) {
    
    let responseJson = {
        title: "ハンバーグ 160g",
        picture: "hanbrug.jpg",
        price: 1800,
        description: "とてもジューシーなハンバーグです。",
        calorie: 273
    };
    context.res.headers = { "Content-type" : "application/json" };
    context.res.body = responseJson;
};