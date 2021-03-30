import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable()
export class MyHttpInterceptor implements HttpInterceptor {
	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

		const authToken = localStorage.getItem('access_token');
		if (!!authToken) {
			const authReq = req.clone({
				headers:req.headers.set('Authorization', `bearer ${authToken}`)
			});
			return next.handle(authReq);
		} else {
			return next.handle(req);
		}
	}
}