//  get token from session storage
export const getAccessToken = () => {
    if (typeof window !== 'undefined') {
        let data = sessionStorage.getItem("@frontend_test") || "{}";
        return data && data !== '{}' && Object.values(data)?.length > 0 ? true : false;
    }
};