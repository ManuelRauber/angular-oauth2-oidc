import { HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

export abstract class OAuthResourceServerErrorHandler {
    abstract handleError(err: HttpResponse<any>): Observable<any>;
}

export class OAuthNoopResourceServerErrorHandler implements OAuthResourceServerErrorHandler {
    handleError(err: HttpResponse<any>): Observable<any> {
        return Observable.throw(err);
    }
}
