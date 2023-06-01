module.exports = async function (context, req) {
    context.res.json({
        title: "ハンバーグ 160g",
        picture: "hamburger.jpg",
        price: 1800,
        description: "とてもジューシーなハンバーグです。",
        calorie: 273
    });
};