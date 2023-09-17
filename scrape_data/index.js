// const { default: puppeteer } = require("puppeteer");
// const { writeFile, readFile } = require("fs/promises");
// const { load } = require("cheerio");

// const main = async () => {
//   const browser = await puppeteer.launch({
//     headless: false,
//   });
//   const page = await browser.newPage();
//   await page.goto("https://www.imdb.com/chart/top/");

//   await page.waitForTimeout(4000);

//   // const html = await page.content()
//   // await writeFile('amazon.html', html)

//   const productsData = [];
//   const $ = load(await page.content());
//   $("ipc-metadata-list > li").each((i, el) => {
//     // console.log(i);
//     const name = $(`h3.ipc-title__text`,el).text();
    
   

//     productsData.push({ Name: name });
//     console.log({name});
//   });
// //   await writeFile("data.json", JSON.stringify(productsData));

//   await browser.close();
// };

// main();


const cheerio = require('cheerio');
const fs = require('fs');
const { default: puppeteer } = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto('https://www.imdb.com/chart/top/?ref_=nv_mv_250');

  await page.waitForSelector('.ipc-metadata-list-summary-item');

  const movieData = await page.$$eval('.ipc-metadata-list-summary-item', (elements) => {
    const data = [];
    elements.forEach((el) => {
      const name = el.querySelector('.ipc-title__text').textContent;
      const year = el.querySelector('.cli-title-metadata > span:nth-child(1)').textContent;
      const duration = el.querySelector('.cli-title-metadata > span:nth-child(2)').textContent;
      const image = el.querySelector('img').getAttribute('src');
      const rating = el.querySelector('.ratingGroup--imdb-rating').textContent;

      data.push({
        name: name,
        rating: rating,
        year: year,
        duration: duration,
        image: image,
      });
    });
    return data;
  });

  fs.writeFile('moviesData.json', JSON.stringify(movieData, null, 4), (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log('Success');
    }
  });

  await browser.close();
})();
