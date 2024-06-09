<h1>CountDown Timer</h1>
<p>This project is a simple web application that allows users to search for various events and view a countdown timer for each event. The application is designed to handle events from Pakistan for the year 2024, but can be extended to include other events and locations.
</p>
<h3>Features</h3>
<pre>
Search for events by name.
Display event date and name.
Countdown timer to the selected event.
Automatically adjust the countdown timer to the next year if the event date has passed.
Display the event date in a readable format.
</pre>
<h3>How It Works
</h3>
The application is divided into two main sections:

<h5>Event Search and Selection:
</h5>
<pre>
Users can type the event name in the search box to find matching events from the predefined list.
The search results are displayed in real-time as the user types.
Users can click on an event from the search results to view the countdown timer for that event.</pre>
<h5>Countdown Timer:
</h5>
<pre>
Once an event is selected, the user is redirected to a new page (counter.html) that displays the countdown timer for the selected event.
The timer automatically updates every second.
If the event date has passed, the timer will adjust to show the countdown to the event date in the next year.
</pre>


<h3>Note on API Usage
</h3>
<p>I initially attempted to use an API to fetch event data dynamically. However, I could not find a suitable API that met the project requirements. As a result, I used a predefined object array to store event information. This approach provides the necessary functionality for the application but can be updated to use an API if a suitable one is found in the future.
</p>
