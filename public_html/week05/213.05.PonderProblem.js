function Problem1()
{
   // put hello world in the console
   console.log('Hello World');
}

function problem2(name, text2) 
{
   // put the edited text in the console
   console.log(text2.replace(/RICH_GUY/g, name));
}

function problem3(temp)
{
   // show the calculated farenheit to celsius
   console.log(((temp - 32) * 5 / 9).toFixed(1));
}

function problem4(weight)
{
   // use weight to switch which amount is owed
   switch(weight)
      {
         case '1':
            console.log('$0.98');
	    break;
         case '2':
            console.log('$1.19');
	    break;
         case '3':
            console.log('$1.40');
	    break;
         case '4':
            console.log('$1.61');
	    break;
         case '5':
            console.log('$1.82');
	    break;
         default:
            console.log('Invalid weight');
            break;
      }
}

function problem5(apr, term, amount)
{
   // calculate compound interest for an account
   apr = apr * .1;
   for (x = 0; x < term; x++)
     amount = amount *(1 + apr);
   amount = amount.toFixed(2);
   console.log("Future Value: ", amount);
}