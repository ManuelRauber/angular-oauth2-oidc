import './rxjsImports';

import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ModuleWithProviders, NgModule } from '@angular/core';

import { DefaultOAuthInterceptor } from './interceptors/default-oauth.interceptor';
import { OAuthNoopResourceServerErrorHandler, OAuthResourceServerErrorHandler } from './interceptors/resource-server-error-handler';
import { OAuthModuleConfig } from './oauth-module.config';

import { OAuthService } from './oauth-service';
import { OAuthStorage } from './types';
import { UrlHelperService } from './url-helper.service';

export * from './oauth-service';
export * from './token-validation/jwks-validation-handler';
export * from './token-validation/null-validation-handler';
export * from './token-validation/validation-handler';
export * from './url-helper.service';
export * from './auth.config';
export * from './types';
export * from './tokens';
export * from './events';
export * from './interceptors/default-oauth.interceptor';
export * from './interceptors/resource-server-error-handler';
export * from './oauth-module.config';

export function createDefaultStorage() {
    return (typeof sessionStorage !== 'undefined') ? sessionStorage : null;
}

@NgModule({
    imports: [
        CommonModule,
    ],
})
export class OAuthModule {
    static forRoot(config: OAuthModuleConfig = null): ModuleWithProviders {
        return {
            ngModule: OAuthModule,
            providers: [
                OAuthService,
                UrlHelperService,
                { provide: OAuthStorage, useFactory: createDefaultStorage },
                { provide: OAuthResourceServerErrorHandler, useClass: OAuthNoopResourceServerErrorHandler },
                { provide: OAuthModuleConfig, useValue: config },
                { provide: HTTP_INTERCEPTORS, useClass: DefaultOAuthInterceptor, multi: true },
            ],

        };
    }
}


