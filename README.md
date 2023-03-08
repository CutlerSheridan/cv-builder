# CV Builder

## Fill in your work and education experience, get a nice-looking CV

Created using React.

Click the toggle to switch between preview mode and edit mode.

See a demo by clicking "Add sample data." Clear the sample data and anything you've manually input by clicking "Clear data."

Toggling between edit and preview modes retains previously-entered information, as does refreshing the page.

Use your browser's print preview to save your résumé as a PDF.

#### TODO NEXT

#### TODO LATER

##### Features

##### Behavior

##### Style

#### DONE

_1.1.3_

- adjust experience section width
- adjust instructional text
- fix credit link

_1.1.2_

- move all the localStorage updates to a useEffect
- move localStorage mount check to initial useState() argument as conditional
- fix preview section spacing + sidebar alignment

_1.1.1_

- refactor App.js as a functional component with hooks

_1.1.0_

- refactor component classes into functional components using hooks
  - refactor Footer
  - refactor Item
  - refactor AllItems
  - refactor Sidebar
  - refactor Skills
  - refactor Education
  - refactor Experience
  - refactor Contact
  - refactor Add
  - refactor Remove

_1.0.1_

- add a max-width to the cv body

_1.0.0_

- get sample data to persist upon refresh
- get cleared data to persist upon refresh
- get manually-input data to persist upon refresh
- clean up comments and console.logs

_0.4.11_

- make description boxes display three rows of text
- fix form skill labels so they don't say 'SkillName:'
- add credit

_0.4.10_

- style form control buttons
- add header with instructions
- make edit toggle display different text depending on your view
- add third job to sample data

_0.4.9_

- round form borders
- style Remove buttons
- style group edit borders
- add section separators for edit form
- refactor form section divider css so it appears even if that section is empty
- style Add button

_0.4.8_

- get sidebar to at least fill page but also to keep growing if page gets too long, while also having cv background or border do the same
  - this has been excruciating. It was a flex and I tried a million iterations of parents and children at different heights, min-heights
  - finally got this to work by switching the .cv-container from a flex to a grid... but now the sidebar footer filler no longer fills in the print preview
  - changed .cv min-height from 100% to 100vh and it WORKS. Thank god

_0.4.7_

- add more sample skills
- give everything a max-width in the pdf
- restructure sections' DOM
- give each section a line to the left visually grouping all items in that section
- force print preview to display background colors
- add some touches of color
- add icons for email and phone
- add header filler section
- adjust spacing around items
- adjust spacing around groups

_0.4.6_

- style Contact
- style Experience
- style Education

_0.4.5_

- make width fill page in print dialogue preview
- give Sidebar a border so it shows up in pdf
- add extra Sidebar filler to fill sidebar in pdf
- Restyle list bullets as ::before elements for greater control over their distance from the bulleted item

_0.4.4_

- make description form boxes bigger
- add second sample job

_0.4.3_

- prevent content from appearing in sections if all content is empty
- prevent sections from appearing if no content exists at all

_0.4.2_

- prevent dates dash from appearing if no dates are present
- prevent empty jobs or school programs from displaying

_0.4.1_

- add confirmation to Clear Data button

_0.4.0_

- make other section edit groups display as grids with description taking up bottom two rows
- add sample data button
- add clear data button

_0.3.2_

- make static skills display as grid
- make edit skills display as grid

_0.3.1_

- refactor handleChange() to work with Skills
- refactor add to work with Skills

_0.3.0_

- build Skills component
- refactor remove to work with Skills

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
