import Homepage from "./Homepage";

class AllArticles {
  async allArticlesLinks() {
    const titleArticles = await $$(".c-link__cover a");
    await titleArticles.forEach(async (titleArticles) => {
      {
        await titleArticles.click();
        console.log(titleArticles);
        Homepage.backPage();
        browser.pause(2000);
      }
    });
  }

  //clickOnAllArticles() {}
  get firstArticle() {
    return $$(".c-link__cover")[0];
  }

  get secondArticle() {
    return $$(".c-link__cover")[1];
  }

  get thirdArticle() {
    return $$(".c-link__cover")[2];
  }

  get fourthArticle() {
    return $$(".c-link__cover")[3];
  }

  get fifthArticle() {
    return $$(".c-link__cover")[4];
  }

  get sixthArticle() {
    return $$(".c-link__cover")[5];
  }

  get seventhArticle() {
    return $$(".c-link__cover")[6];
  }

  get eighthArticle() {
    return $$(".c-link__cover")[7];
  }

  get ninthArticle() {
    return $$(".c-link__cover")[8];
  }

  get tenthArticle() {
    return $$(".c-link__cover")[9];
  }

  get galleryCategory() {
    return $(".qa-gallery-category");
  }
}
export default new AllArticles();
