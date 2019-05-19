// p244

const u1 = {name : 'Cynthia'};
const u2 = {name : 'Jackson'};
const u3 = {name : 'Olive'};
const u4 = {name : 'James'};

//맵 생성
const userRoles = new Map();

//set() 메서드 사용하여 사용자 역할 할당
userRoles.set(u1, 'User');
userRoles.set(u2, 'User');
userRoles.set(u3, 'Admin');

//set() 메서드는 체인으로 연결할 수 있어 타이핑하는 수고를 덜어줌. 윗부분을 간소화?!
userRoles
  .set(u1, 'User')
  .set(u2, 'User')
  .set(u3, 'Admin');
