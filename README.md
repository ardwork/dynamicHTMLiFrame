<h2>Qlik Sense Dynamic HTML iFrame window</h2>
This is a simple iFrame window that allows you to construct a dynamic URL to an external web service. A good example of this is connecting to the Windy.tv map service with the latitude longitude being passed dynamically based on selections in the application (See the example gif and the example QVF included in the Git download)
<br>
<img src="https://github.com/ardwork/dynamicHTMLiFrame/blob/master/img/1.gif">
<br>
<br>
<br>
<h3>Points to note</h3>
<ul><li>You need to understand how to construct the dynamic string for the URL, see example application included with <b> $(..) </b>  sections where the dynamic content is added </li>
<li>The end format of the URL you enter should look like ='https://www.abc.com/...'<br>
Please note the = sign and the single quotes around the URL.</li>
</ul>
