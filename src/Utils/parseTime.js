export const parseTime = (timeInput) => {
    return timeInput.replace('T',' ').replace('Z','');
};