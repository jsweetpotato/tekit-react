// Q. Class를 확장한다는 것이 무엇을 의미하나요?

class 생물 {
  constructor() {
    this.type = "생물";
  }
  호흡한다() {}
  광합성한다() {}
  소화한다() {}
}

class 척추생물 {
  constructor() {
    this.type = "척추생물";
  }
  호흡한다() {}
  걷는다() {}
  광합성한다() {}
  소화한다() {}
}

class 포유류 {
  constructor() {
    this.type = "포유류";
  }
  호흡한다() {}
  걷는다() {}
  광합성한다() {}
  소화한다() {}
  낳는다(무엇 = "새끼") {}
}

class 인간 {
  constructor() {
    this.type = "인간";
  }
  호흡한다() {}
  걷는다() {}
  광합성한다() {}
  소화한다() {}
  낳는다(무엇 = "아이") {}
  생각을_한다() {}
  언어를_한다() {}
}