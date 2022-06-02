# notifications-example

## Notes on the work completed

- Generated a new Create React App
- Added Typescript (for typing), MUI (for iconography), and Axios (for http requests)
- Created a new component called NotificationComponent, and replaced content in App.js with this component.
  - NotificationComponent is responsible for loading the notifications from the server (via an Axios HTTP GET request to a mock server) and adding them to local storage.
  - I created an arbitrary data structure for the notification response data, which includes a unique identifier for the notification and text describing the notification.
  - It only adds new notifications to our storage. If any of the notifications from the server are already stored locally, it ignores them.
  - Defined a function to mark all notifications as viewed
- Created a new component called NotificationIcon, and rendered it from NotificationComponent
  - Accepts an array of notifications, and filters out any that have already been view
  - If there are any unviewed notifications, it renders an "Active Bell" MUI icon with a click action to view the notifications. When the bell is clicked the user sees the notifications, and all notifications are marked as viewed
  - If all notifications have already been viewed, it renders a "Regular Bell" MUI icon
- In order to mimic an API call, I also installed `json-server` which will return dummy notification data
  - The API server is run via `yarn json-server --watch ./mock-api/db.json`
  - The JSON is the db file can be updated while the server is running to change the return data for the API
- The website is started via `yarn start`