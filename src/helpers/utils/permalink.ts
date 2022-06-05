export const createPermalink = (text: string): string => {

    if (text.length === 0 || text === ' ') return '';

    return text
        .split(' ')
        .join('-')
        .toLocaleLowerCase();
}