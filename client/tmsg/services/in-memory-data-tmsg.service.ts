
export class InMemoryDataTmsgService {
  createDb() {
    let counselors = [
      {idx: 0, loginid: 'administrator', status: 0, name: '관리자', password: '', issaveid: false, isautologin:  false }
    ];
    return {counselors};
  }
}
