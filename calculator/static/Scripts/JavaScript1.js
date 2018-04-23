var value;
var result;
var flag = 0;
function showValue(i)
{
    if (flag == 0)
    {
        clear();
    }
    if (i == 0) {
        clear();
    }
    else if(i==16)
    {
        document.getElementById("screen").innerHTML = equal();
        flag = 0;
    }
    else {
        flag = 1;
        value = document.getElementsByTagName("button")[i].value;
        document.getElementById("screen").innerHTML = document.getElementById("screen").innerHTML + value;
    }
}

function equal()
{
    result = eval(document.getElementById("screen").innerHTML);
    return result;
}

function clear()
{
    document.getElementById("screen").innerHTML = null;
    value = null;
    result = null;
    flag = 0;
}