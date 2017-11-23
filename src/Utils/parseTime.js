const parseTime = (timeInput) => {
    return timeInput.replace('T', ' ').replace('Z', '');
};

export default parseTime;
