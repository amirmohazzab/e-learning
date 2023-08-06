export const courseIdValidator = (courseId: string): boolean => {
    const hexRegExp = new RegExp("^[0-9a-fA-F]{24}$");
    return hexRegExp.test(courseId);
};
