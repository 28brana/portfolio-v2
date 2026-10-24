import mixpanel from 'mixpanel-browser';

const MIXPANEL_TOKEN = process.env.NEXT_PUBLIC_MIXPANEL_TOKEN;

let initialized = false;

// Initialize lazily on the client; tracking becomes a no-op when no token is configured.
const ensureInit = (): boolean => {
    if (initialized) return true;
    if (typeof window === 'undefined' || !MIXPANEL_TOKEN) return false;
    mixpanel.init(MIXPANEL_TOKEN, {
        persistence: "localStorage",
    });
    initialized = true;
    return true;
};

type MixpanelProperties = Record<string, any>;

export const trackEvent = (eventName: string, properties: MixpanelProperties = {}): void => {
    if (!ensureInit()) return;
    mixpanel.track(eventName, properties);
};

export const identifyUser = (userId: string, properties: MixpanelProperties = {}): void => {
    if (!ensureInit()) return;
    mixpanel.identify(userId);
    mixpanel.people.set({ ...properties, $onesignal_user_id: userId });
};

export const setUserProperties = (properties: MixpanelProperties = {}): void => {
    if (!ensureInit()) return;
    mixpanel.people.set(properties);
};

export const incrementUserProperty = (propertyName: string, count: number = 1): void => {
    if (!ensureInit()) return;
    mixpanel.people.increment(propertyName, count);
};

export const resetMixpanel = (): void => {
    if (!ensureInit()) return;
    mixpanel.reset();
};

export const setSuperProperties = (properties: MixpanelProperties = {}): void => {
    if (!ensureInit()) return;
    mixpanel.register({ ...properties, version: "v2.0.4" });
};

const getUTMParams = (): MixpanelProperties => {
    const searchParams = new URLSearchParams(window.location.search);
    return {
        'UTM source': searchParams.get('utm_source') || undefined,
        utm_medium: searchParams.get('utm_medium') || undefined,
        utm_campaign: searchParams.get('utm_campaign') || undefined,
        utm_term: searchParams.get('utm_term') || undefined,
        utm_content: searchParams.get('utm_content') || undefined,
    };
};

export const trackPageView = (eventName: string, properties: MixpanelProperties = {}): void => {
    if (!ensureInit()) return;
    const utmParams = getUTMParams();
    mixpanel.track(eventName, {
        ...properties,
        ...utmParams
    });
};
