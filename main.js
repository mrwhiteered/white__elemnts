let autoWfadeInParams = document.querySelector('.Wfade-in').style.transform;
let autoWfadeUpParams = document.querySelector('.Wfade-up').style.transform;

function resetStyles(elem) {
    elem.style.opacity = '0';
    elem.style.transform = autoWfadeInParams;
}
// let screen = window.innerWidth;
// let removeWfadeIn = document.querySelectorAll('.screenMedia');

// if (screen<500){
    
//     removeWfadeIn.forEach((mun) =>{
// mun.classList.remove('Wfade-in');

//     });
// }

function WfadeInOnScroll() {
    const WfadeInSectionList = document.querySelectorAll('.Wfade-in');

    WfadeInSectionList.forEach((WfadeInSection) => {
        // const WfadeInSectionContent = WfadeInSection.querySelector('.Wfade-in-content');
        const distanceFromTop = WfadeInSection.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        let speedShow = parseFloat(WfadeInSection.getAttribute('data-speed'));
            if(screen<870 && screen>500){
                
                if (distanceFromTop - windowHeight + 0 <= 0) {
                    WfadeInSection.style.opacity = '1';
                    WfadeInSection.style.transform = 'translateX(0)';
                    WfadeInSection.style.transition = `opacity ${speedShow}s ease-in-out, transform ${speedShow}s ease-in-out`;
                }
                 else { 
                    resetStyles(WfadeInSection);
                 }
            } else if(screen<=500) {
               
                if (distanceFromTop - windowHeight + 30 <= 0) {
                    WfadeInSection.style.opacity = '1';
                    WfadeInSection.style.transform = 'translateX(0)';
                    WfadeInSection.style.transition = `opacity ${speedShow}s ease-in-out, transform ${speedShow}s ease-in-out`;
                }
                 else { 
                    resetStyles(WfadeInSection);
                 }
            } else {
               
                if (distanceFromTop - windowHeight + 100 <= 0) {
                    WfadeInSection.style.opacity = '1';
                    WfadeInSection.style.transform = 'translateX(0)';
                    WfadeInSection.style.transition = `opacity ${speedShow}s ease-in-out, transform ${speedShow}s ease-in-out`;
                }
                 else { 
                    resetStyles(WfadeInSection);
                 }
            }
       
    });
}

function resetStylesUp(elem) {
    elem.style.opacity = '0';
    elem.style.transform = autoWfadeUpParams;
}
// let screenUp = window.innerWidth;
// let removeWfadeUp = document.querySelectorAll('.screenMedia');

// if (screenUp<500){
    
//     removeWfadeUp.forEach((mun) =>{
// mun.classList.remove('Wfade-up');
//     });
// }

function WfadeUPOnScroll() {
    const WfadeUpSectionList = document.querySelectorAll('.Wfade-up');

    WfadeUpSectionList.forEach((WfadeUPSection) => {
        // const WfadeUPSectionContent = WfadeUPSection.querySelector('.Wfade-in-content');
        const distanceFromTop = WfadeUPSection.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        let speedShowUp = parseFloat(WfadeUPSection.getAttribute('data-speed'));
            if(screen<870 && screen>500){
                
                if (distanceFromTop - windowHeight + 0 <= 0) {
                    WfadeUPSection.style.opacity = '1';
                    WfadeUPSection.style.transform = 'translateY(0)';
                    WfadeUPSection.style.transition = `opacity ${speedShowUp}s ease-in-out, transform ${speedShowUp}s ease-in-out`;
                }
                 else { 
                    resetStyles(WfadeUPSection);
                 }
            } else if(screen<=500) {
               
                if (distanceFromTop - windowHeight + 30 <= 0) {
                    WfadeUPSection.style.opacity = '1';
                    WfadeUPSection.style.transform = 'translateY(0)';
                    WfadeUPSection.style.transition = `opacity ${speedShowUp}s ease-in-out, transform ${speedShowUp}s ease-in-out`;
                }
                 else { 
                    resetStyles(WfadeUPSection);
                 }
            } else {
               
                if (distanceFromTop - windowHeight + 100 <= 0) {
                    WfadeUPSection.style.opacity = '1';
                    WfadeUPSection.style.transform = 'translateY(0)';
                    WfadeUPSection.style.transition = `opacity ${speedShowUp}s ease-in-out, transform ${speedShowUp}s ease-in-out`;
                }
                 else { 
                    resetStylesUp(WfadeUPSection);
                 }
            }
       
    });
}

window.addEventListener('scroll', WfadeInOnScroll);
window.addEventListener('scroll', WfadeUPOnScroll);