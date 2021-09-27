class Subscribe {
  get emailAddress() {
    return $("#MERGE0");
  }

  get firstName() {
    return $("#MERGE1");
  }

  get lastName() {
    return $("#MERGE2");
  }

  get submitButton() {
    return $(".formEmailButton");
  }

  get addButton() {
    return $(".hcard-download");
  }

  get continueButton() {
    return $$(".formEmailButton")[0];
  }

  get cmanageButton() {
    return $$(".formEmailButton")[1];
  }

  get emailMeALinkButton() {
    return $(".formEmailButton");
  }

  get error() {
    return $(".error");
  }

  createValidEmail() {
    return Math.random().toString(36).substring(2, 11) + "@domain.com";
  }

  get confirmSubscribe() {
    return $("#templateBody");
  }
}
export default new Subscribe();
