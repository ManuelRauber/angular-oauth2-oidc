import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable, Optional } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { OAuthModuleConfig } from '../oauth-module.config';
import { OAuthStorage } from '../types';
import { OAuthResourceServerErrorHandler } from './resource-server-error-handler';

@Injectable()
export class DefaultOAuthInterceptor implements HttpInterceptor {
    constructor(private authStorage: OAuthStorage,
                private errorHandler: OAuthResourceServerErrorHandler,
                @Optional() private moduleConfig: OAuthModuleConfig) {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const url = req.url.toLowerCase();

        if (!this.checkUrl(url)) return next.handle(req);

        const sendAccessToken = this.moduleConfig.resourceServer.sendAccessToken;

        if (sendAccessToken) {

            const token = this.authStorage.getItem('access_token');
            const header = `Bearer ${token}`;

            const headers = req.headers
                .set('Authorization', header);

            req = req.clone({ headers });
        }

        return next.handle(req)
            .catch(err => this.errorHandler.handleError(err));
    }

    private checkUrl(url: string): boolean {
        if (this.moduleConfig && this.moduleConfig.resourceServer && this.moduleConfig.resourceServer.allowedUrls)
            return !!this.moduleConfig.resourceServer.allowedUrls.find(u => url.startsWith(u));

        return false;
    }
}
