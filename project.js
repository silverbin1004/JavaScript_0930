// 1. JSON 직렬화와 undefined 처리
// -> 무시되면서 그 속성은 JSON 문자열 결과에 포함되지 않는다.

// 2. 배열 내의 undefined 값 처리
// -> 배열 내 undefined가 있을 경우 이 값은 null로 변환된다.

// 3. Date 객체의 직렬화 결과
// -> 문자열

// 4. Date 객체의 복원
// -> "2024-09-30T04:30:20.420Z"

// 5. JSON에서 지원하지 않는 데이터 타입
// -> undefined, Symbol, function 등

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
// -> 복사본을 단독적으로 관리해야 하는 경우 필요하다.

// 10. 깊은 복사 구현 방법
// -> loadsh 라이브러리에서 cloneDeep사용 또는 직접 재귀 함수 사용

// 11. Object.assign()의 한계
// -> 수정 시 원본에도 영향이 간다.

// 12. 배열 복사 시의 spread 연산자
// -> 스프레드 연산을 통한 복사는 얕은 복사이기 때문에 원본 데이터나 복사된 데이터 중 하나를 수정하게 될 경우 다른 쪽에도 영향을 미친다. 

// 13. 재귀를 통한 깊은 복사
// -> 재귀함수는 자신의 로직을 내부적으로 반복하다가, 일정한 조건이 만족되면 함수를 이탈하여 결과를 도출합니다.

// 14. JSON.stringify()의 함수 처리
// -> 무시한다.

// 15. 깊은 복사 후 객체 수정
// const original = { a: 1, b: { c: 2 } };
// const copy = JSON.parse(JSON.stringify(original));

// copy.b.c = 3;

// console.log(original);
// console.log(copy);

// 16. slice()와 얕은 복사
// -> slick()는 얕은 복사이기 때문에 중첩 배열은 참조값만 복사되어 수정 시 원본 배열에도 영향을 미친다.

// 17. JSON.parse()의 반환 값
// -> {a:1, b:true, c: "hello"}

// 18. 깊은 복사 후 참조 확인
// -> 깊은 복사를 하면 독립적인 배열이 된다.

// 19. Symbol 타입의 직렬화
// -> 무시한다.

// 20. JSON.stringify()의 순환 참조 문제
// -> 에러 발생