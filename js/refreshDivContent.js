function updateInformation(element)
{
    if(element == "target_solutions")
    {
        location.href = "http://app.targetsafety.com/auth/index.cfm?action=login.showlogin&customerpath=slocountyfire";
    }
    else
    {
        $('#information_container').empty().load('/templates/' + element + '.html');
        console.log("Changed to " + element);
    } 
}