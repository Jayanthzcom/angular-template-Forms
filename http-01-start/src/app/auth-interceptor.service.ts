import { HttpInterceptor, HttpRequest, HttpHandler, HttpEventType } from '../../node_modules/@angular/common/http';
import { tap } from '../../node_modules/rxjs/operators';

export class AuthInterceptorService implements HttpInterceptor{
    intercept(req: HttpRequest<any>, next: HttpHandler){
        
        const modifiedRequest = req.clone({ headers: req.headers.append('Auth','xyz')});
        return next.handle(modifiedRequest);
    }
}