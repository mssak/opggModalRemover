const modalClass = '.fc-ab-root';

// 모달 창을 숨기는 함수
function hideModal() {
    const modal = document.querySelector(modalClass);
    if (modal) {
        modal.remove();  // 모달 요소를 제거
        // console.log('모달이 제거되었습니다.');

        // 스크롤을 다시 활성화
        document.body.style.overflow = '';  // body에 적용된 overflow 속성 초기화
        document.documentElement.style.overflow = '';  // html 태그의 overflow 초기화
    } else {
        // console.log('모달이 없습니다.');
    }
}



// 페이지 로드 시 즉시 모달 숨기기 시도
hideModal();

// MutationObserver 설정
const observer = new MutationObserver((mutationsList, observer) => {
    for (const mutation of mutationsList) {
        if (mutation.type === 'childList') {
            hideModal();
        }
    }
});

// body 요소에 대한 DOM 변화를 감지
observer.observe(document.body, {
    childList: true,
    subtree: true
});
