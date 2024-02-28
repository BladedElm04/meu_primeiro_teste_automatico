export const removeBearer = (data: string) => {
    const token = data.replace("Bearer ", "");

    return token;
}