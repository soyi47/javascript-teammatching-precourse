
<h1 align="middle">우아한테크코스 크루 관리 & 팀 매칭</h1>

- [우아한테크코스] 웹 프론트엔드 프리코스 최종 미션

- 코스별로 크루를 관리하고 코스별 미션마다 팀을 매칭하는 프로그램 구현



---



## 🎯 구현할 기능 목록

### 📌 초기 세팅

1. 프로그램 이름과 메뉴 버튼 렌더링
2. 메뉴 버튼을 누르면, 해당 탭으로 이동 (해당 탭 메뉴의 UI를 렌더링)



### 📌 각 메뉴의 기능

#### 크루 관리

+ 크루를 추가하거나 삭제하기 위한 기능
+ 코스별 크루 추가 기능
  + 예외 처리
    + 동일한 이름 추가 불가
    + 크루의 이름은 최대 5글자까지 가능
+ 코스별 크루 삭제
  + 삭제 시 `confirm`을 사용하여 사용자가 재확인하도록 구현
+ 크루 관리 섹션 출력 기능
  + 관리할 코스 선택 시, 크로 관리 섹션을 출력한다.
+ 크루 목록 출력 기능
  + 관리할 코스 선택 시, 해당 크루의 목록을 출력한다.
  + 크루 table의 첫번째 열에는 index를 넣어 순서를 표시
  + index는 '1부터' 시작



#### 팀 매칭 관리

+ 팀 매칭을 하기 위한 기능

+ '코스별'로 '미션'마다 '무작위로' 팀을 매칭하는 기능
  + 팀 매칭시 `1팀당 인원 수`보다 더 적은 수로 구성된 팀은 없다. 남은 인원을 앞 팀부터 순서대로 배정하여, 1팀당 인원 수를 최소 숫자로 충족함.
  + 팀을 재매칭할 수 있다.
+ 크루 팀 매칭 섹션 출력 기능
  + 팀 매칭 관리 코스 및 미션 선택 후 확인을 누르면, `1팀당 인원 수`를 받는 form을 출력한다. 
  + 팀 매칭 관리 코스 및 미션 선택 후 확인을 누르면, 해당 코스의 크루 목록을 list로 출력한다.
+ 팀 매칭 결과 출력 기능
  + 팀 매칭 결과는 팀 별로 출력하며, 크루원은 쉼표로 구분한다.
  + 재매칭 안내 문구와 버튼을 함께 출력한다.
