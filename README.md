# CV Builder

## Fill in your work and education experience, get a nice-looking CV

Done using React. Toggling between edit and preview modes retains previously-entered information, as does refreshing the page.

#### TODO NEXT

- build Skills component

#### TODO LATER

##### Features

- refactor add to work with skills as well
- make form retain information upon refresh
- add sample data button
- add clear data button (with confirmation)

##### Behavior

- prevent dates dash from appearing if no dates are present
- prevent section header from appearing except in edit mode if no jobs, schools, et cetera are listed
- extract edit mode toggle button/s into component

##### Style

- make it fill page in print dialogue preview
- add credit

#### DONE

_0.2.9_

- add 'delete' button for experience
- integrate delete button into education

_0.2.8_

- integrate add button into education
- prevent add button from adding new section if current section is empty

_0.2.7.1_

- clean up console.logs and comments

_0.2.7_

- fix 'add' button changing second key to third when two empty sections are added in a row
  - this is happening because 'const newObj = { ...this.state[section] }' creates a shallow copy and references back to the original variable if an object is nested
  - when you type a change into the text input, I believe it's then making the object unique, so a subsequent job won't reference the same thing
  - fixed it by using JSON.parse(JSON.stringify()) to copy all nested objects as well without referencing them
  - alternatively, I could have used spread syntax in object assignment like I was and additionally specifically passed arguments with the properties that would have needed to be objects as that overwrites the property with whatever you specify ({ ...this.state.experience, job: { ...this.state.experience.job }, jobs: [ ...this.state.experience.jobs ] })

_0.2.6_

- add 'add' button for experience

_0.2.5_

- add all fields to Experience component
- build Education component

_0.2.4_

- build component to make Items for all the props in an object
- integrate AllItems component

_0.2.3_

- create Item component for editing items
- integrate Item component into Contact and Experience
- extract Item css to new file and import to Item.js

_0.2.2_

- add title to static and edit portions of Experience
- remove id parameter from handleChange()

_0.2.1_

- start building Experience component
- refactor handleChange() to accommodate multiple components

_0.2.0_

- add toggle between edit and preview modes
- add preview elements to Contact
- sync name input and preview display for name

_0.1.0_

- build state object for App.js
- create basic Contact component
- create basic Sidebar component

_0.0.0_

- initial commit
