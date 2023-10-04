// --------------------------------
// START mouseOver add text element
// --------------------------------
let wMOAT_item = document.querySelectorAll('.w__moat_item');
let wMOAT_screenSize = window.innerWidth;

if (wMOAT_screenSize > 960) {
    wMOAT_item.forEach(function (wMOAT_item) {
        wMOAT_item.addEventListener('mouseover', function () {

            let wMOAT_includeItems = wMOAT_item.querySelectorAll('.w__moat_sub-item');

            wMOAT_includeItems.forEach(function (wMOAT_item, i) {
               
                wMOAT_item.classList.add('w__moat_active');
                
                let wMOAT_animationDuration = (i + 1) * 0.3 + 's'; // Например, 0.2s, 0.4s, 0.6s и так далее
                wMOAT_item.style.transition = 'all ' + wMOAT_animationDuration;

            });
        });

        wMOAT_item.addEventListener('mouseout', function () {
            let wMOAT_includeItems = wMOAT_item.querySelectorAll('.w__moat_sub-item');

            wMOAT_includeItems.forEach(function (wMOAT_item, i) {
                
                wMOAT_item.classList.remove('w__moat_active');
                
                let wMOAT_animationDuration = 1.2 - (i * 0.3) + 's'; // Например, 0.2s, 0.4s, 0.6s и так далее
                wMOAT_item.style.transition = 'all ' + wMOAT_animationDuration;

            });
        })
    });
} else {
   
    wMOAT_item.forEach(function (wMOAT_item) {
        let wMOAT_flag = false;
        
        wMOAT_item.addEventListener('touchend', function () {

            if (!wMOAT_flag) {
                
                let wMOAT_includeItems = wMOAT_item.querySelectorAll('.w__moat_sub-item');

                wMOAT_includeItems.forEach(function (wMOAT_item, i) {
                    
                    wMOAT_item.classList.add('w__moat_active');

                    let wMOAT_animationDuration = (i + 1) * 0.3 + 's'; // Например, 0.2s, 0.4s, 0.6s и так далее
                    wMOAT_item.style.transition = 'all ' + wMOAT_animationDuration;

                });

                wMOAT_flag = true;

            } else {
                
                let wMOAT_includeItems = wMOAT_item.querySelectorAll('.w__moat_sub-item');

                wMOAT_includeItems.forEach(function (wMOAT_item, i) {
                    
                    wMOAT_item.classList.remove('w__moat_active');
  
                    let wMOAT_animationDuration = 1.2 - (i * 0.3) + 's'; // Например, 0.2s, 0.4s, 0.6s и так далее
                    wMOAT_item.style.transition = 'all ' + wMOAT_animationDuration;

                });

                wMOAT_flag = false;
            }
        });
    });
}
// --------------------------------
// END mouseOver add text element
// --------------------------------


// --------------------------------
// START Wfade-in & Wfade-up 
// --------------------------------
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