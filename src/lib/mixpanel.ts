import mixpanel from 'mixpanel-browser';

mixpanel.init(process.env.NEXT_PUBLIC_MIXPANEL_TOKEN as string, {
    persistence: "localStorage",
});

type MixpanelProperties = Record<string, any>;

export const trackEvent = (eventName: string, properties: MixpanelProperties = {}): void => {
    mixpanel.track(eventName, properties);
};

export const identifyUser = (userId: string, properties: MixpanelProperties = {}): void => {
    mixpanel.identify(userId);
    mixpanel.people.set({ ...properties, $onesignal_user_id: userId });
};

export const setUserProperties = (properties: MixpanelProperties = {}): void => {
    mixpanel.people.set(properties);
};

export const incrementUserProperty = (propertyName: string, count: number = 1): void => {
    mixpanel.people.increment(propertyName, count);
};

export const resetMixpanel = (): void => {
    mixpanel.reset();
};

export const setSuperProperties = (properties: MixpanelProperties = {}): void => {
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
    const utmParams = getUTMParams();
    mixpanel.track(eventName, {
        ...properties,
        ...utmParams
    });
};
