"use strict";
/**
 * Enum Type
 *
 * - 열거형 타입은 상수들을 관리하기 위한 객체 -> 상수의 집합을 정의함.
 * - 일반 객체는 속성 변경을 허용하지만, 열거형은 속성의 변경을 허용하지 않는다.
 * - 열거형은 기본적으로 숫자, 문자열만 허용한다.
 *
 * - JS 에서 사용하는 const 변수를 집합처럼 사용할 수 있도록 TS에서 Enum Type을 제공하는 것.
 */
var LanguageCode;
(function (LanguageCode) {
    LanguageCode["korean"] = "ko";
    LanguageCode["english"] = "en";
})(LanguageCode || (LanguageCode = {}));
var ArrowKey;
(function (ArrowKey) {
    ArrowKey[ArrowKey["up"] = 1] = "up";
    ArrowKey[ArrowKey["down"] = 2] = "down";
    ArrowKey[ArrowKey["left"] = 20] = "left";
    ArrowKey[ArrowKey["right"] = 21] = "right";
})(ArrowKey || (ArrowKey = {}));
/**
 * TS의 Enum은 리버스를 제공하기때문에
 * 키값으로 값을 가져올수도있지만
 * 값으로 키값을 가져올 수 도 있다. 신선..
 */ 