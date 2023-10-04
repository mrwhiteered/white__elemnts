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
