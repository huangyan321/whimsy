((doc) => {
  const _oItems = doc.getElementsByClassName('waterfall_item') as HTMLCollectionOf<HTMLDivElement>;
  const oItemsLength = _oItems.length;
  const heights: number[] = [];
  const gap = 10;
  const init = () => {
    setImgPosition();
  };
  const getMinIndex = (arr: number[]) => {
    return arr.indexOf(Math.min.apply(null, arr));
  };
  const setImgPosition = () => {
    for (let i = 0; i < oItemsLength; i++) {
      _oItems[i].style.width = '232px';
      if (i < 5) {
        heights.push(_oItems[i].offsetHeight);
        console.log(heights);
        if (i % 5) {
          _oItems[i].style.left = (_oItems[i].offsetWidth + gap) * (i % 5) + 'px';
        } else {
          _oItems[i].style.left = '0';
        }
      } else {
        const minIndex = getMinIndex(heights);
        const minHeightImg = _oItems[minIndex];
        _oItems[i].style.left = minHeightImg.style.left;
        _oItems[i].style.top = heights[minIndex] + gap + 'px';
        heights[minIndex] += _oItems[i].offsetHeight + gap;
      }
    }
  };
  window.onload = () => {
    init();
  };
})(document);
