const nodeHtmlToImage = require('node-html-to-image');

async function generator({firstUser = '', secondUser = '', n1 = '', n2 = ''}) {
    const html = `
<html lang="en">
<head>
    <style>
        body {
            width: 1920px;
            height: 1080px;     
        }
        .image-generation__image {
            width: 1920px;
            height: 1080px;
            background-color: #ff3800;
        }

        .image-generation__header {
            height: 300px;
            background-color: aliceblue;
        }

        .image-generation__info {
            height: 300px;
            background-color: #ff8662;
            display: flex;
            justify-content: space-between;
            margin: 200px;
        }

        .image-generation__user{
            margin-bottom: auto;
            margin-top: auto;
            color: antiquewhite;
            font-weight: bold;
            font-size: 50px;
        }

        .image-generation__num {
            margin-bottom: auto;
            margin-top: auto;
            color: antiquewhite;
            font-weight: bold;
            font-size: 200px;
        }
    </style>
</head>
<body>

        <div class='image-generation__image'>
            <div class='image-generation__header'>
                WOW
            </div>
            <div class='image-generation__info'>
                <div class='image-generation__user'>
                    {{firstUser}}
                </div>
                <div class='image-generation__num'>
                    {{n1}}
                </div>
                <div class='image-generation__num'>
                    {{n2}}
                </div>
                <div class='image-generation__user'>
                    {{secondUser}}
                </div>
            </div>
        </div>
</body>
</html>`;

    const image = await nodeHtmlToImage({
        html: html,
        content: {firstUser: firstUser, secondUser: secondUser, n1: n1, n2: n2},
        puppeteerArgs: { args: ['--no-sandbox'] }
    });

    return image;
}

module.exports = generator;