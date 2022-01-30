// starting project
// take two buttons 1. btn-left and btn-right
// take multiple colors array which included minimum 7 colors
// by default it's has a bg-color with red. set it with js not css
// when clicked btn-left , it's showing the color as bg-color with decrement
// when clicked btn-right , it's showing the color as bg-color with increment
//best of luck

(
    function () {
        // store colors array
        const colors = ['blue', 'pink', 'yellow', 'violet', 'purple', 'green', 'maroon', 'magenta']
        let counter = 0;

        // store all const
        const buttons = document.querySelectorAll('.btn')
        const bgColorDiv = document.querySelector('.bgColor');
        bgColorDiv.style.backgroundColor = 'red';

        // two types button. actually which button is clicked to know that, we have to run a forEach() function of buttons

        buttons.forEach(function(button){
            button.addEventListener('click', function (e) {

                // when clicked and contains btn-left
                if (button.classList.contains('btn-left')){
                    counter--;
                    if ( counter < 0){
                        counter = colors.length - 1;
                        console.log('counter is ' + counter);
                        var getColor = `${colors[counter]}`;
                        // return getColor;
                        // return counter;
                    }

                    bgColorDiv.style.backgroundColor = getColor;
                    // console.log("last " + '${colors}[counter]');

                }
    
                // when clicked and contains btn-right
                if (button.classList.contains('btn-right')){
                    alert('btn right')
                }
    
            })
        })

    } 
    ()
)