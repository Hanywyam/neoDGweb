# :love_letter: Team project : Ah-oh

### 웹사이트 리디자인, 사이트 구현을 목표로 한다 (반응형 웹사이트 제작) <br> Making homepage(neo digital group)

> git hub site: (https://ah-oh-team-project.github.io/make_neoDG/) <br>
> notion site: (https://www.notion.so/Team-Project-Ah-oh-d201d4fcb7a749b3a4d7d144dc31513b)

# :boom: Project Timeline

## 23.11.01~05

- 현재까지 작업 파일 합치고 레이아웃 규격이 넘치고 정렬이 흐트러짐.
- 공통 폰트 연결되지 않아 디자인적으로 부족함.
- 각자 작업한 부분 중 일부 js가 제대로 작동하지 않음.
  - -> 누락된 외부 연결 링크 찾아 해결.

#### ~11/4까지

- 모바일버전 css 각자 최대한 완벽하게 작업 완성
- variable.css 사용해서 폰트 정리
- PC까지 css 미디어쿼리 완성
- 사이즈는 vw -left, right / vh - top,buttom 같은 단위로 작업
- 큰 영역에 px 같은 고정 값 없애기
- 나눠서 작업한 파일이 있으면 합치기(1인당 css, js 파일 1개씩)
- 개인 파트에 맞춰서 필요한 gsap 찾아서 공유&공부해오기

#### 11/5 미팅

- 합친 파일에서 오류 찾아서 수정
- js 작업 진행. 플러그인 gsap 스크롤 이벤트 추가 작업
- 문제생기는 코드 정리

#### 다음주차부터 각 파트 부족한 JS 작업 진행 할 예정

- 각자 섹션별 css, javascript 작업 진행.
- 맡은 영역 최대한 웹사이트와 동일하게 구현 완성 목표로 작업.

## 23.10.31

- 각자 섹션별 css 작업 진행
  - css 작업 마무리 되는대로 모여서 정리 진행하기로 결정.
- index.html 각자 파트 작업 병합 및 index 큰섹션 (header/main/footer) 이용해서 정리하기.
- html W3 유효성 검사 완료.
- 퍼블리싱 가이드 작성 수정사항 -> develop 완료.

- assets 폴더 정리하기
  - font.css : font는 총 3개로 정리.
    - 영문 폰트 : ① 'Archivo', sans-serif / ② 'Playfair Display', serif
    - 한글 폰트 : ③ 'Pretendard Variable', sans-serif
  - variable.css
    - 23.10.31 : 폰트만 설정
- variable.css 같이 의논해서 정리하기 -> 현재 섹션마다 사이즈가 너무 상이해서, 추후 각자 css 작업 완료 후 병합 시 변수로 사이즈 통일 정리하기로 함.

## 23.10.30

- index.html 작업 진행.
- 퍼블리싱 가이드 작성.
  [231030\_코딩가이드\_ah-oh.pdf](https://ah-oh-team-project.github.io/make_neoDG/%EC%9E%91%EC%97%85%20%EC%9E%90%EB%A3%8C/231031_%EC%BD%94%EB%94%A9%EA%B0%80%EC%9D%B4%EB%93%9C_ah-oh.pdf)

## 23.10.27

- 퍼블리싱 사이트 구조 분석.
- 사이트 구축 요구사항 정리.
  [231026\_요구사항+구조분석.pdf](https://ah-oh-team-project.github.io/make_neoDG/%EC%9E%91%EC%97%85%20%EC%9E%90%EB%A3%8C/231026_%EC%9A%94%EA%B5%AC%EC%82%AC%ED%95%AD+%EA%B5%AC%EC%A1%B0%EB%B6%84%EC%84%9D_ah-oh.pdf)

## 23.10.26

- 팀 프로젝트 목표 설정.
- 사이트 구조 분석 및 작업 역할 분담.
- 팀원별 맡은 영역에 대한 퍼블리싱 가이드 분석.

### 목표

1. 플러그인 GSAP를 공부하여 최대한 기존 사이트와 유사하게 구현 할 수 있도록 한다.
2. git organization을 이용한 협업을 통해 팀원들과의 협업이 문제없이 이루어지도록 하는 것을 목표로 한다.
3. 팀 프로젝트 경험을 통해 원활한 커뮤니케이션 능력을 키운다.

### 선정 사이트

[NEO Digital Group](http://neodigitalgroup.co.kr/)

### 사이트 선정 이유

- 이번 팀 프로젝트를 통해 수업 외 새로운 플러그인을 추가로 공부하며 작업하고 싶었다.

### TEAM: ah-oh

- 팀장: 한재영
- 팀원: 김민재, 권지민

- 역할분담

  - Github 관리: 한재영
  - notion 관리: 권지민
  - 자료(site text&img) 관리: 김민재

- 웹사이트 제작 역할 분담
  - 메인페이지 총 6개의 섹션을 난이도별로 나눠, 상-중, 하 순으로 2part씩 작업 분담.
    - 한재영: about / contact
    - 김민재: header+footer / solution
    - 권지민: what we do / our work
