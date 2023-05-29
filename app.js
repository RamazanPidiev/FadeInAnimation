 /* The "observer" looks on your screen for classes named "hidden" and adds "show" to it.
    You can rename "show" and "hidden" to whatever name you want if you already used those.
    Make sure to do the same in CSS and HTML. */

 const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)

        /* When you're not looking at the class hidden anymore it removes the show.
           If you prefer the animation to only onces remove the else here. */
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
        
    });
 });

 const hiddenElements = document.querySelectorAll('.hidden');
 hiddenElements.forEach((el) => observer.observe(el));