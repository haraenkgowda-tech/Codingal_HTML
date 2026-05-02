 var choice = prompt("welcome to area calculator!. \n Please enter your choice. \n1.Area of a rectangle. \n2.area of a triangle. \n3.area of a circle. \n4.Area of parallelogram.");
 
 if (choice == 1) {
    var l = prompt('enter the length') 
    var b = prompt('enter the breadth')
    var result = Number(l) * Number(b) 
    alert('the area of rectangle is ' + result)  
        }

    if (choice == 2) {
        var b = prompt('enter the base')
        var h = prompt('enter the height')
        var result = 0.5 * Number(b) * Number(h) 
        alert('the area of triangle is ' + result) 
    }

        if (choice == 3) { 
            var r = prompt('enter the radius')
            var result = 3.14 * Number(r) * Number(r)
            alert('the area of circle is ' + result) 
        }

            if (choice == 4) {
                var b = prompt('enter the corresponding base')
                var h = prompt('enter the height')
                var result = Number(b) * Number(h)
                alert('the area of parallelogram is ' + result)
            }       