export class AuthConfig {
    /**
     * The client's id as registered with the auth server
     */
    clientId?;

    /**
     * The client's redirectUri as registered with the auth server
     */
    redirectUri?;

    /**
     * An optional second redirectUri where the auth server
     * redirects the user to after logging out.
     */
    postLogoutRedirectUri?;

    /**
     * The auth server's endpoint that allows to log
     * the user in when using implicit flow.
     */
    loginUrl?;

    /**
     * The requested scopes
     */
    scope? = 'openid profile';

    resource?;

    rngUrl?;

    /**
     * Defines whether to use OpenId Connect during
     * implicit flow.
     */
    oidc? = true;

    /**
     * Defines whether to request a access token during
     * implicit flow.
     */
    requestAccessToken? = true;

    options?: any;

    /**
     * The issuer's uri.
     */
    issuer?;

    /**
     * The logout url.
     */
    logoutUrl?;

    /**
     * Defines whether to clear the hash fragment after logging in.
     */
    clearHashAfterLogin? = true;

    /**
     * Url of the token endpoint as defined by OpenId Connect and OAuth 2.
     */
    tokenEndpoint?: string;

    /**
     * Url of the userinfo endpoint as defined by OpenId Connect.
     *
     */
    userinfoEndpoint?: string;

    responseType? = 'token';

    /**
     * Defines whether additional debug information should
     * be shown at the console.
     */
    showDebugInformation?;

    /**
     * The redirect uri used when doing silent refresh.
     */
    silentRefreshRedirectUri?;

    silentRefreshMessagePrefix?;

    /**
     * Set this to true to display the iframe used for
     * silent refresh for debugging.
     */
    silentRefreshShowIFrame?;

    /**
     * Timeout for silent refresh.
     * @internal
     * depreacted b/c of typo, see silentRefreshTimeout
     */
    siletRefreshTimeout?: number = 1000 * 20;

    /**
     * Timeout for silent refresh.
     */
    silentRefreshTimeout?: number = 1000 * 20;

    /**
     * Some auth servers don't allow using password flow
     * w/o a client secreat while the standards do not
     * demand for it. In this case, you can set a password
     * here. As this passwort is exposed to the public
     * it does not bring additional security and is therefore
     * as good as using no password.
     */
    dummyClientSecret?: string;

    /**
     * Defines whether https is required.
     * The default value is remoteOnly which only allows
     * http for localhost, while every other domains need
     * to be used with https.
     */
    requireHttps?: boolean | 'remoteOnly' = 'remoteOnly';

    /**
     * Defines whether every url provided by the discovery
     * document has to start with the issuer's url.
     */
    strictDiscoveryDocumentValidation? = true;

    /**
     * JSON Web Key Set (https://tools.ietf.org/html/rfc7517)
     * with keys used to validate received id_tokens.
     * This is taken out of the disovery document. Can be set manually too.
     */
    jwks?: object;

    /**
     * Map with additional query parameter that are appended to
     * the request when initializing implicit flow.
     */
    customQueryParams?: object;

    silentRefreshIFrameName? = 'angular-oauth-oidc-silent-refresh-iframe';

    /**
     * Defines when the token_timeout event should be raised.
     * If you set this to the default value 0.75, the event
     * is triggered after 75% of the token's life time.
     */
    timeoutFactor? = 0.75;

    /**
     * If true, the lib will try to check whether the user
     * is still logged in on a regular basis as described
     * in http://openid.net/specs/openid-connect-session-1_0.html#ChangeNotification
     * @type {boolean}
     */
    sessionChecksEnabled?;

    /**
     * Intervall in msec for checking the session
     * according to http://openid.net/specs/openid-connect-session-1_0.html#ChangeNotification
     * @type {number}
     */
    sessionCheckIntervall? = 3 * 1000;

    /**
     * Url for the iframe used for session checks
     */
    sessionCheckIFrameUrl?: string;

    /**
     * Name of the iframe to use for session checks
     * @type {number}
     */
    sessionCheckIFrameName? = 'angular-oauth-oidc-check-session-iframe';

    /**
     * This property has been introduced to disable at_hash checks
     * and is indented for Identity Provider that does not deliver
     * an at_hash EVEN THOUGH its recommended by the OIDC specs.
     * Of course, when disabling these checks the we are bypassing
     * a security check which means we are more vulnerable.
     */
    disableAtHashCheck?;

    /*
     * Defines wether to check the subject of a refreshed token after silent refresh.
     * Normally, it should be the same as before.
    */
    skipSubjectCheck?;

    useIdTokenHintForSilentRefresh?;

    /*
     * Defined whether to skip the validation of the issuer in the discovery document.
     * Normally, the discovey document's url starts with the url of the issuer.
     */
    skipIssuerCheck?;

}
