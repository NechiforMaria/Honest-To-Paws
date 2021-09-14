class HomePage {
  openHomePage() {
    browser.url("https://astage.honesttopaws.com");
  }

  backPage() {
    browser.execute(function () {
      window.history.go(-2);
    });
  }

  get cuteCategory() {
    return $$(".c-category-mix__card")[0];
  }

  get funnyCategory() {
    return $$(".c-category-mix__card")[1];
  }

  get goodCategory() {
    return $$(".c-category-mix__card")[2];
  }

  get omgCategory() {
    return $$(".c-category-mix__card")[3];
  }

  get latestArticle1() {
    return $$(".c-latest__post")[0];
  }

  get latestArticle2() {
    return $$(".c-latest__post")[1];
  }

  get latestArticle3() {
    return $$(".c-latest__post")[2];
  }

  get latestArticle4() {
    return $$(".c-latest__post")[3];
  }

  get widgetEditorsFirstPost() {
    return $$(".c-editors-picks__post")[0];
  }

  get widgetEditorsSecondPost() {
    return $$(".c-editors-picks__post")[1];
  }

  get widgetEditorsThirdPost() {
    return $$(".c-editors-picks__post")[2];
  }

  get cuteArticle1() {
    return $$(".c-link__cover")[0];
  }

  get cuteArticle2() {
    return $$(".c-category__post")[1];
  }

  get cuteArticle3() {
    return $$(".c-category__post")[2];
  }

  get cuteArticle4() {
    return $$(".c-category__post")[3];
  }

  get seeMoreCuteButton() {
    return $$(".c-widget-image-header .c-link__more-cat-hc")[0];
  }

  get fuunyArticle1() {
    return $$(".c-link__cover")[1];
  }

  get fuunyArticle2() {
    return $$(".c-category__post")[5];
  }

  get fuunyArticle3() {
    return $$(".c-category__post")[6];
  }

  get fuunyArticle4() {
    return $$(".c-category__post")[7];
  }

  get seeMoreFuunyButton() {
    return $$(".c-widget-image-header .c-link__more-cat-hc")[1];
  }

  get goodArticle1() {
    return $$(".c-link__cover")[2];
  }

  get goodArticle2() {
    return $$(".c-category__post")[9];
  }

  get goodArticle3() {
    return $$(".c-category__post")[10];
  }

  get goodArticle4() {
    return $$(".c-category__post")[11];
  }

  get seeMoreGoodeButton() {
    return $$(".c-widget-image-header .c-link__more-cat-hc")[2];
  }

  get omgArticle1() {
    return $$(".c-link__cover")[3];
  }

  get omgArticle2() {
    return $$(".c-category__post")[13];
  }

  get omgArticle3() {
    return $$(".c-category__post")[14];
  }

  get omgArticle4() {
    return $$(".c-category__post")[15];
  }

  get seeMoreOmgButton() {
    return $$(".c-widget-image-header .c-link__more-cat-hc")[3];
  }

  get aboutFooterButton() {
    return $$(".qa-page-footer__link")[0];
  }

  get privacyPolicyFooterButton() {
    return $$(".qa-page-footer__link")[1];
  }

  get dmcaFooterButton() {
    return $$(".qa-page-footer__link")[2];
  }

  get advertisingFooterButton() {
    return $$(".qa-page-footer__link")[3];
  }

  get titleArticle() {
    return $(".qa-placement--content");
  }

  get footerContainer() {
    return $(".qa-page-footer__container");
  }

  allTitleLatestWidget() {
    return $$(".c-latest__posts .c-latest__title");
  }

  allTitleEditorsWidget() {
    return $$(".c-editors-picks__post");
  }
}

export default new HomePage();
