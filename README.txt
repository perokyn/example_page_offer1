=============OFFER1 EXERCISE=============11/19/2020
Technology:
   State managmenet    Flux      npm install flux@3.1.3
   Styling:    Tailwind CSS      npm install tailwindcss@latest postcss@latest autoprefixer@latest
   Navigation: react-router-dom  npm install --save react-router-dom  

Data Flow:
   homes.json --> actions/postActions.js --> stores/postStore.js --> FrontPage.js ==> children

------------NOTES: 
         +  package.json  scripts modifyed "start": " npm run build:css && react-scripts start"
                                                    " build": " npm run build:css && react-scripts build", 
                              post css build files: " build:css": "postcss src/styles/tailwind.css -o src/styles/main.css"  

         +  Only search by City filter is functional. 

         +  Chat and Mail icon under agent profile picture in components/UserCard.js
           was meant for further development. Chat can be implemented via webrtc and a simple
           andorid application can be built to notify agent via phone when user logs in to Chat
           to make site more interactive. Chat uses a simple PHP to record login to txt file on server. App tracks changes in text file and sends note to phone.
           Please see andorid app @  https://github.com/perokyn/LVRRemoteControlApp.git

Folder Tree:      

src
 ┣ actions
 ┃ ┣ actionTypes.js
 ┃ ┗ postActions.js
 ┣ Assets
 ┃ ┣ ap1.jpg
 ┃ ┣ ap2.jpg
 ┃ ┣ ap3.jpg
 ┃ ┣ ap4.jpg
 ┃ ┣ Bathrooms-icon.png
 ┃ ┣ Bedroom-icon.png
 ┃ ┣ constants.js
 ┃ ┣ leavemsg.jpg
 ┃ ┣ like.jpg
 ┃ ┣ main.jpeg
 ┃ ┣ map.jpg
 ┃ ┣ msg.jpg
 ┃ ┣ p1.jpg
 ┃ ┣ Parking-icon.png
 ┃ ┣ sign.jpg
 ┃ ┣ Square-icon.png
 ┃ ┗ user.jpg
 ┣ components
 ┃ ┣ BedBath_modules.js
 ┃ ┣ ContactCard.js
 ┃ ┣ DropDownMenu.js
 ┃ ┣ Login.js
 ┃ ┣ LongButton.js
 ┃ ┣ PorpertyList.js
 ┃ ┣ PropertyCard.js
 ┃ ┣ PropertyDetailsModule.js
 ┃ ┣ ShareModule.js
 ┃ ┣ UserCard.js
 ┃ ┗ UserInfoCard.js
 ┣ Pages
 ┃ ┣ FrontPage.js
 ┃ ┗ PopertyPage.js
 ┣ stores
 ┃ ┗ postStore.js
 ┣ styles
 ┃ ┣ main.css
 ┃ ┗ tailwind.css
 ┣ App.css
 ┣ App.js
 ┣ App.test.js
 ┣ appDispatcher.js
 ┣ homes.json
 ┣ index.css
 ┣ index.js
 ┣ logo.svg
 ┣ Navbar.js
 ┣ reportWebVitals.js
 ┗ setupTests.js