const getIndex = (index, activeIndex, length) => {
    let ret = 1;
    if (index < activeIndex) ret = length - (activeIndex - index - 1);
    if (index > activeIndex) ret = index - activeIndex + 1;
    return ret;
};

export default getIndex;
