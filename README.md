# White__Elemnts

## Connection JS & CSS
- Add CSS --> `<link rel="stylesheet" href="https://mrwhiteered.github.io/white__elemnts/white__style_items.css">`
- Add JavaScript -->  `<script src="https://mrwhiteered.github.io/white__elemnts/white__scripts_file.js"></script>`

## 1.  Mouseover add text
_When you hover over the image, text appears (in a list)_
- [ ] Add CSS --> `<link rel="stylesheet" href="https://mrwhiteered.github.io/white__elemnts/white__style_items.css">`
- [ ] Add JS -->  `<script src="https://mrwhiteered.github.io/white__elemnts/white__scripts_file.js"></script>`
- [ ] Embed HTML in your code
  
HTML

    <ul class="w__moat_list">
        <li class="w__moat_item">
            <img src="white__test_img.jpg" class="w__moat_image" alt="Your-image">
            <h3 class="w__moat_title">Видеосъемка</h3>
            <ul class="w__moat_sub-list">
                <li class="w__moat_sub-item">
                    Lorem ipsum dolor sit, amet consectetur adipisicing
                </li>
                <li class="w__moat_sub-item">
                    Lorem ipsum dolor sit, amet consectetur adipisicing
                </li>
                <li class="w__moat_sub-item">
                    Lorem ipsum dolor sit, amet consectetur adipisicing
                </li>
                <li class="w__moat_sub-item">
                    Lorem ipsum dolor sit, amet consectetur adipisicing
                </li>
                <li class="w__moat_sub-item">
                    Lorem ipsum dolor sit, amet consectetur adipisicing
                </li>
            </ul>
        </li>
    </ul>
## 2. Fade-in & Fade-up
_Elements appearing on the side or bottom when scrolling from left/bottom/right/left_
- [ ] Add CSS --> `<link rel="stylesheet" href="https://mrwhiteered.github.io/white__elemnts/white__style_items.css">`
- [ ] Add JS -->  `<script src="https://mrwhiteered.github.io/white__elemnts/white__scripts_file.js"></script>`
- [ ] To make the element appear on the right you need to add _.Wfade-in_
- [ ] To make the element appear below, you need to add _.Wfade-up_
- [ ] * if you need the element to appear on the left or top just change the styles to negative values
```html
.Wfade-up {
    transform: translateY(150px);
}
.Wfade-in {
    transform: translateX(-200px);
}





