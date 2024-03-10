# Architecture

This file can be used to detail:

* Architecture decisions.
* Future implementation details that cannot (or should not!) be attempted in the alotted time.

## Should do
* Validation of input to make sure the value is not numerical 
  * Having said that, in the future, you should consider allowing users to enter the postcode OR suburb
* A loading animation to notify the user that the API has been contacted and a result is awaiting
* Consider mobile resolutions
  * Make the elements responsive

## If I had more time
* I would have made a delay of reaching the API so it would not have made a call after each key stroke
* I also would have made sure the API did not call until after the user has entered at least 3 characters so the API does not respond to a single character entry