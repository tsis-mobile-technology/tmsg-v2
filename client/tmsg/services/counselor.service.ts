import { Injectable } 		from '@angular/core';
import { Headers, Http } 	from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Counselor } 		from '../models/counselor';

@Injectable()
export class CounselorService {
	private counselorsUrl = 'api/counselors'; // URL to web api

	private handleError(error: any): Promise<any> {
		console.error('An error occurred', error); // for demo purposes only
		return Promise.reject(error.message || error);
	}

	private headers = new Headers({'Content-Type': 'application/json'});

	constructor(private http: Http) {}

	getCounselors(): Promise<Counselor[]> {
		//local-data
		//return Promise.resolve(HEROES);
		//.then(response => response.json().data as Counselor[])
		//http-data
		return this.http.get(this.counselorsUrl)
					.toPromise()
					.then(response => response.json())
					.catch(this.handleError);
	}

	getCounselorSlowly(): Promise<Counselor[]> {
		return new Promise<Counselor[]>(resolve => setTimeout(resolve, 2000)) //delay 2 seconds
			.then(() => this.getCounselors());
	}

	getCounselor(idx: number) {
		return this.http.get(this.counselorsUrl + '/' + idx)
            .toPromise()
            .then(res => res.json())
            .catch(this.handleError);
	}

	update(counselor: Counselor): Promise<Counselor> {
		const url = `${this.counselorsUrl}/${counselor.loginid}`;
		return this.http
			.put(url, JSON.stringify(counselor), {headers: this.headers})
			.toPromise()
			.then(() => counselor)
			.catch(this.handleError);
	}

	create(idx: number, loginid: string, status: number, name: string, password: string, issaveid: boolean, isautologin: boolean ): Promise<Counselor> {
		console.log("idx        :" + idx        );
		console.log("loginid    :" + loginid    );
		console.log("status     :" + status     );
		console.log("name       :" + name       );
		console.log("password   :" + password   );
		console.log("issaveid   :" + issaveid   );
		console.log("isautologin:" + isautologin);
		return this.http
			.post(this.counselorsUrl, JSON.stringify({idx: idx, loginid: loginid, status: status, name: name, password: password, issaveid: issaveid, isautologin: isautologin}), {headers: this.headers})
			.toPromise()
			.then(res => res.json().data)
			.catch(this.handleError);
	}

	delete(idx: number): Promise<void> {
	  const url = `${this.counselorsUrl}/${idx}`;
	  return this.http.delete(url, {headers: this.headers})
	    .toPromise()
	    .then(() => null)
	    .catch(this.handleError);
	}

}
