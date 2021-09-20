class cute {
  get subscribeEmailInput() {
    return $(".c-subscribe-email__input");
  }

  get emailButton() {
    return $(".c-subscribe-email__submit");
  }

  get trendingArticle1() {
    return $$(".c-recommendation__link")[0];
  }

  get trendingArticle2() {
    return $$(".c-recommendation__link")[1];
  }

  get moreArticle1() {
    return $$(".c-more-from-post")[0];
  }

  get moreArticle2() {
    return $$(".c-more-from-post")[1];
  }

  get moreArticle3() {
    return $$(".c-more-from-post")[2];
  }

  get facebookButton() {
    return $(".qa-facebook__icon");
  }

  get twiterButton() {
    return $(".qa-twitter__icon");
  }

  get mailButton() {
    return $(".qa-mail__icon");
  }

  get addusEmailSent() {
    return $(".hcard-download");
  }
}
export default new cute();
