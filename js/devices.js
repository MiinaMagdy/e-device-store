function startCamera()
{
    var element = document.getElementById("camera")
    element.style.display = "none"

    var x = document.getElementById("inf_camera")
    x.style.display = "grid"

    infPen()

    infExcellence()

    infBuilt()
}
function infCamera()
{
    var element = document.getElementById("inf_camera")
    element.style.display = "none"

    var x = document.getElementById("camera")
    x.style.display = "grid"
}

function startPen()
{
    var element = document.getElementById("pen")
    element.style.display = "none"

    var x = document.getElementById("inf_pen")
    x.style.display = "grid"

    infCamera()

    infExcellence()

    infBuilt()
}
function infPen()
{
    var element = document.getElementById("inf_pen")
    element.style.display = "none"

    var x = document.getElementById("pen")
    x.style.display = "grid"

}

function startExcellence()
{
    var element = document.getElementById("Excellence")
    element.style.display = "none"

    var x = document.getElementById("inf_Excellence")
    x.style.display = "grid"

    infCamera()

    infPen()

    infBuilt()

}
function infExcellence()
{
    var element = document.getElementById("inf_Excellence")
    element.style.display = "none"

    var x = document.getElementById("Excellence")
    x.style.display = "grid"

}


function startBuilt()
{
    var element = document.getElementById("Built")
    element.style.display = "none"

    var x = document.getElementById("inf_Built")
    x.style.display = "grid"

    infCamera()

    infPen()

    infExcellence()


}
function infBuilt()
{
    var element = document.getElementById("inf_Built")
    element.style.display = "none"

    var x = document.getElementById("Built")
    x.style.display = "grid"

}
