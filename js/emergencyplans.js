function showPlan(element)
{
    $('#information_container').empty().load('/templates/' + element + '.html');
    console.log("Changed to " + element);
}