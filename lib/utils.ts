export const formatPathname = (path: string): string => {
    let formattedPath = path.split('/').pop()?.toLowerCase() || '';
    formattedPath = formattedPath === 'dashboard' ? 'overview' : formattedPath;
    return formattedPath.charAt(0).toUpperCase() + formattedPath.slice(1);
};