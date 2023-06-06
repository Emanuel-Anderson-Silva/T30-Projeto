function fieldMatch(formField1,formField2)
{
var field1 = formField1.value;
var field2 = formField2.value;
if (field1 == field2)
{
result = true;
}
else
{
alert(Please be sure that both "+ formField1.name +"and
"+ formField2.name;
+" match!);
formField1.focus();
result = false;
}
return result;
}
function isEmailAddr(email)
{
var result = false;
var theStr = new String(email);
var index = theStr.indexOf("@");
if (index > 0)
{
var pindex = theStr.indexOf(".",index);
if ((pindex > index+1) && (theStr.length > pindex+1))
result = true;
}
return result;
}
function validRequired(formField,fieldLabel)
{
var result = true;

if (formField.value == "")
{
alert(’Please enter a value for the "’ + fieldLabel +’" field.’);
formField.focus();
result = false;
}

return result;
}
function allDigits(str)
{
return inValidCharSet(str,"0123456789");
}
function inValidCharSet(str,charset)
{
var result = true;
for (var i=0;i<str.length;i++)
if (charset.indexOf(str.substr(i,1))<0)
{
result = false;
break;
}
return result;
}
function validEmail(formField,fieldLabel,required)
{
var result = true;
if (required && !validRequired(formField,fieldLabel))
result = false;
if (result && ((formField.value.length < 3)
|| !isEmailAddr(formField.value)) )
{
alert("Please enter a complete email address in the form:
yourname@yourdomain.com");
formField.focus();
result = false;
}

return result;
}
function validNum(formField,fieldLabel,required)
{
var result = true;
if (required && !validRequired(formField,fieldLabel))
result = false;
if (result)
{
if (!allDigits(formField.value))
{
alert(’Please enter a number for the "’ + fieldLabel +’" field.’);
formField.focus();
result = false;
}
}
return result;
}

function validInt(formField,fieldLabel,required)
{
var result = true;
if (required && !validRequired(formField,fieldLabel))
result = false;
if (result)
{
var num = parseInt(formField.value,10);
if (isNaN(num))
{
alert(Please enter a number for the " + fieldLabel +" field);
formField.focus();
result = false;
}
}
return result;
}

function validDate(formField,fieldLabel,required)
{
var result = true;
if (required && !validRequired(formField,fieldLabel))
result = false;
if (result)
{
var elems = formField.value.split("/");
result = (elems.length == 3);
if (result)
{
var month = parseInt(elems[0],10);
var day = parseInt(elems[1],10);
var year = parseInt(elems[2],10);
result = allDigits(elems[0]) && (month > 0) && (month < 13) &&
allDigits(elems[1]) && (day > 0) && (day < 32) &&
allDigits(elems[2]) && ((elems[2].length == 2) ||
(elems[2].length == 4));
}
if (!result)
{
alert(Please enter a date in the format MM/DD/YYYY for the "+
fieldLabel +" field.");
formField.focus();
}
}

return result;
}
function validLength(formField,fieldLabel,reqLength)
{
var result = true;
if(formField.value.length < reqLength)
{
alert(Please enter a " + fieldLabel +" that is at least 
+ reqLength +  characters.);
formField.focus();
result = false;
}

return result;
}
function validRadioRequired(formField,fieldLabel)
{
var result = true;
var radioChoice = false;
for (counter = 0; counter < formField.length; counter++)
{
if (formField[counter].checked)
radioChoice = true;
}
if (!radioChoice)
{
alert(Please enter a value for the " + fieldLabel +".);
formField[0].focus();
result = false;
}
return result;
}
function checkCheckBoxes(formField,alertMsg)
{
var result = true;
if (formField.checked == false)
{
alert (alertMsg);
formField.focus();
result = false;
}

return result;
}
function spamStop(formField,fieldLabel,fieldText,required)
{
var result = true;
formField.value = formField.value.toUpperCase();
if (required && !validRequired(formField,fieldLabel))
result = false;
if (result)
{
if (formField.value != fieldText)
{
alert(Please type " + fieldText +" into the "
+ fieldLabel +" field.");
formField.focus();
result = false;
}
return result;
}

function validateForm(theForm)
{
if (!validRequired(theForm.FullName,"Name"))
return false;
if (!validRequired(theForm.City,"City"))
return false;
//either phone or email are required
if(theForm.Email.value == "")
{
if(theForm.Phone.value == "")
{
alert(Please enter either an Email or a Phone.);
theForm.Email.focus();
return false;
}
}
if(theForm.Email.value != "")
{
if (!validEmail(theForm.Email,"Email",true))
return false;
}
if(theForm.Phone.value != "")
{
if (!validRequired(theForm.Phone,"Phone"))
return false;
}
return true;
}