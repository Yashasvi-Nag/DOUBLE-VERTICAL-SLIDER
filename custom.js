const sliderContainer = document.querySelector('.slider-container');
        const slideRight = document.querySelector('.right-slide');
        const slideLeft = document.querySelector('.left-slide');
        const slidesLength = slideRight.querySelectorAll('div').length;
    
        let activeSlideIndex = 0;
    
        slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`;
    
        const changeSlide = (direction) => {
            const sliderHeight = sliderContainer.clientHeight;
    
            if (direction === 'up') {
                activeSlideIndex--;
                if (activeSlideIndex < 0) {
                    activeSlideIndex = slidesLength - 1;
                }
            } else {
                activeSlideIndex++;
                if (activeSlideIndex >= slidesLength) {
                    activeSlideIndex = 0;
                }
            }
    
            slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`;
            slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`;
        };
