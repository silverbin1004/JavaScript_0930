// 1. JSON 직렬화와 undefined 처리
// -> undefined를 반환하면 그 속성은 JSON 문자열 결과에 포함되지 않는다.

// 2. 배열 내의 undefined 값 처리
// -> 배열 내 undefined가 있을 경우 이 값은 null로 변환된다.

// 3. Date 객체의 직렬화 결과
// -> 문자열

// 4. Date 객체의 복원
// -> 2024-09-30T04:30:20.420Z

// 5. JSON에서 지원하지 않는 데이터 타입
// -> undefined, Symbol

// 6. 얕은 복사와 깊은 복사의 차이점
// -> 얕은 복사는 배열의 1차원 요소들만 복사하고, 깊은 복사는 배열 내의 중첩 배열이나 객체까지 모두 복사한다.

// 7. JSON.parse(JSON.stringify())와 깊은 복사
// -> 함수, undefined, Date 객체 등 일부 데이터 타입을 복사할 수 없다.

// 8. 얕은 복사 방법
// -> 1) 스프레드 연산자
//       const originalArray = [1,2,3];
//       const shallowCopy = [...originalArray];
//    2) Array.prototype.slice()
//       const originalArray = [1,2,3];
//       const shallowCopy = originalArray.slice();
//    3) Object.assign()
//       const originalObject = {a:1, b: {c : 2}};
//       const shallowCopy = Object.assign({},originalObject);

// 9. 깊은 복사의 필요성
// -> let arr : any[] = [];
//    let crr : any[] = arr.slice();
//    crr.push(2);
//    console.log(Arr === arr);
//    console.log(arr);
//    console.log(crr);

// 10. 깊은 복사 구현 방법
// -> 깊은 복사 라이브러리 사용
//    const _ = require('lodash');
//    const originalObject = {a: 1, b: { c: 2}};
//    const deepCopy = _.cloneDeep(originalObject);

// 11. Object.assign()의 한계
// -> 객체 내부의 객체는 복사가 되지 않는다.

// 12. 배열 복사 시의 spread 연산자
// -> 스프레드 연산을 통한 복사는 얕은 복사이기 때문에 원본 데이터나 복사된 데이터 중 하나를 수정하게 될 경우 다른 쪽에도 영향을 미친다. 

13. 재귀를 통한 깊은 복사
// -> 

// 14. JSON.stringify()의 함수 처리
// -> 무시한다.

// 15. 깊은 복사 후 객체 수정
// const original = { a: 1, b: { c: 2 } };
// const copy = JSON.parse(JSON.stringify(original));

// copy.b.c = 3;

// console.log(original);
// console.log(copy);

// 16. slice()와 얕은 복사
// -> slice()는 얕은 복사를 수행할 때 이용되기 때문에 중첩 배열이 있는 경우 중첩 배열까지 그대로 출력된다.

// 17. JSON.parse()의 반환 값
// -> a:1, b:true, c: "hello"

18. 깊은 복사 후 참조 확인
// ->

19. Symbol 타입의 직렬화
// ->

20. JSON.stringify()의 순환 참조 문제
// ->