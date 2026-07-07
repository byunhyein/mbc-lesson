# 파비콘 추가 프롬프트

이 문서는 HTML 문서에 SVG 파비콘을 추가하는 프롬프트 사례를 기록합니다.

## 프롬프트 예시
> @index.html 문서에 @favicon/favicon 3.svg 를 파비콘으로 넣어줘.

## 적용된 코드
```html
<link rel="icon" href="favicon/favicon 3.svg" type="image/svg+xml" />
```

## 참고 사항
- SVG 파일을 파비콘으로 사용할 때는 `type="image/svg+xml"` 속성을 지정하는 것이 좋습니다.
- 파일 경로에 공백이 포함되어 있어도 따옴표로 감싸서 정확하게 지정해야 합니다.
