export type EventType =
    'discovery_document_loaded'
    | 'received_first_token'
    | 'jwks_load_error'
    | 'invalid_nonce_in_state'
    | 'discovery_document_load_error'
    | 'discovery_document_validation_error'
    | 'user_profile_loaded'
    | 'user_profile_load_error'
    | 'token_received'
    | 'token_error'
    | 'token_refreshed'
    | 'token_refresh_error'
    | 'silent_refresh_error'
    | 'silently_refreshed'
    | 'silent_refresh_timeout'
    | 'token_validation_error'
    | 'token_expires'
    | 'session_changed'
    | 'session_error'
    | 'session_terminated'
    | 'logout';

export abstract class OAuthEvent {
    constructor(public readonly type: EventType) {
    }
}

export class OAuthSuccessEvent extends OAuthEvent {
    constructor(type: EventType,
                public readonly info?: any) {
        super(type);
    }
}

export class OAuthInfoEvent extends OAuthEvent {
    constructor(type: EventType,
                public readonly info?: any) {
        super(type);
    }
}

export class OAuthErrorEvent extends OAuthEvent {

    constructor(type: EventType,
                public readonly reason?: object,
                public readonly params?: object) {
        super(type);
    }
}
