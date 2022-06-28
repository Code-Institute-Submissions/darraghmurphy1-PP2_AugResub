



# Sports Quiz

![chrome_YG0gFJP9yY](https://user-images.githubusercontent.com/103134533/176125404-c4056b7f-3772-4001-bb44-56b9d0e52f61.png)


Sports Quiz is a web application created with HTML, CSS and JavaScript. It aims to test sporting knowledge across a wide range of sports and for enjoyment. The quiz will teach the user a few things they did not know about sport and also reaffirm what they do know. 

- User Stories


| User Story | Acceptance Criteria |
| ----------- | ----------- |
| As a user I want to be able to easily navigate the quiz | The quiz has clear instructions on how to move from point to point. |
| As a user I want to know when I am right or wrong | The user will be notified if they are right or wrong by selecting the answer and being met with red or green. |
| The user should be able to use an array of different sized devices | The site is fully responsive and reacts to different screen sizes without sacrificing content or integrity |
| As a user I want all links to work | All links are working proper |
| As a user I want to understand the rules of the quiz | The rules are clearly displayed when the rules button is clicked |
| After the quiz I want to easily replay | Clear retry button on completion to restart the quiz. |





## Site Skeleton

I used the software Balsamiq to draw up simple wireframes to help with the design of the site. The following screenshots show the desktop browser and mobile browser (iPhone 5) for the quiz.

![BalsamiqWireframes_1j4fiW7ZT7](https://user-images.githubusercontent.com/103134533/175974374-706c0b50-2ced-4da5-b087-a1db8884045c.png)
![BalsamiqWireframes_aGOvvGGHHN](https://user-images.githubusercontent.com/103134533/175974381-303f6fd0-171b-4052-a18d-95e45a21063c.png)



## Screenshots of the site

## Features

- Homepage
 
![chrome_lzhQUox7Lh](https://user-images.githubusercontent.com/103134533/175970407-f3b34801-bde3-4fb8-9089-eb07e6da223d.png)

The homepage is fully responsive and allows access to the rules and quiz.

The Homepage is nicely coloured and has clear offset from the background to the content.

- Rules 

![chrome_Vv9lFm0wxg](https://user-images.githubusercontent.com/103134533/176123454-587fbd7e-0796-44d1-95c8-7c017d9cdd99.png)


A javascript function that displays the rules when they are clicked. The rules button disappears when clicked and the rules are displayed. When the begin button is pressed the rules will disappear and the quiz will start.

- Quiz 
![chrome_SVmhPWEcdl](https://user-images.githubusercontent.com/103134533/175970509-143a8db1-9cd3-4ced-ab7b-2e4b0b0a522b.png)

The quiz is simple and consistent and took major inspiration from the WebDevSimplified youtube page. It displays the question and then has four answer buttons with one correct answer and 3 incorrect answers. When the incorrect option is chosen the color will go red and when it is correct the colour will go green. 

- Final Score 

![chrome_Ub01waT7VG](https://user-images.githubusercontent.com/103134533/176134519-a25c0fef-4320-49d0-8545-7263bfd6686f.png)

Final score caluculated through totalScoreAchieved displays after the quiz is over. 

- Timer 

There is a 5 minute (300 second) timer operated by javascript. When the clock reaches 0 the page will refresh and the user will need to restart the quiz.

- Retry Button 

Refreshes the page and restarts the quiz

- Features left to implement 

Unfortunatly, there are a lot of features I would have liked to implement but due to time constraints and general inexperience with javascript i was unable to feature them in this project. 
I would have liked to have a score counter and also a final score at the end of the quiz. I would have liked to animate the page with various javascript. 


## Testing 

### Index

| Test | Outcome | Pass/Fail |
| ----------- | ----------- | ---------- |
| Media | All images load correctly and are consistent with the theme of the site | Pass |
| Responsiveness | Site works on different sized screens from iPhone 5 to Desktop| Pass |
| Links to quiz | The Link correctly goes to the advertised page with no broken links | Pass |



Accessability and Performance
![chrome_aIezEWaFGs](https://user-images.githubusercontent.com/103134533/175970573-f3ffcc99-2ce3-46fa-997a-f089ab3ec1ff.png)


### Quiz


| Test | Outcome | Pass/Fail |
| ----------- | ----------- | -------- |
| Responsiveness | Site works on different sized screens from iPhone 5 to Desktop| Pass |
| Rules Button | The rules button starts the js function and displays the rules | Pass |
| Rules Button hide | rules button is hidden on click due to js function | Pass |
| Begin Button | The begin button starts the quiz | Pass |
| Rules Button hide | beguin button is hidden on click due to js function | Pass |
| Question area unhide | question are is visable | Pass |
| Answer buttons | All answer buttons give a response for correct/incorrect | Pass |
| Next button | After answering question the next button appears to go on to next question | Pass | 
| Question shuffle | Questions appear in a different order every time | Pass |
| Timeout | After time is up the quiz will automatically end | Pass |
| Final Score | The final score shows up | Pass |


Accessability and Performance
![chrome_5bwZxc6fPA](https://user-images.githubusercontent.com/103134533/175970638-e591b232-5b95-43af-a13b-8928d2211a7c.png)


- All pages tested in Safari, Google Chrome and Firefox and on various screen sizes using Google Chrome DevTools.

## Validator Testing

- HTML Testing 
- 
![chrome_YErmDcHjyg](https://user-images.githubusercontent.com/103134533/175967655-b1e2a9cd-24b7-4445-b319-629abd932d76.png)
![chrome_UTfIQ2BZnY](https://user-images.githubusercontent.com/103134533/175967848-5ad57147-3227-4fb6-9634-0c2eea4fb3d5.png)

- CSS 
- 
![chrome_YX2YwU3MNn](https://user-images.githubusercontent.com/103134533/175967899-dbbb19ac-2814-4a9e-a03d-28887a82436e.png)

- Javascript JShint 

![chrome_OfI3nxUwIp](https://user-images.githubusercontent.com/103134533/176124587-7e069ea0-0361-439a-aecf-9fbed4d1d0de.png)




## Deployment

I used GitHub to publish the site by doing the following:
- Log into GitHub
- Access repository
- Click on the pages tab in settings
- Click on main branch and save
- You will be provided with a link to the live site
https://darraghmurphy1.github.io/PP2/


## Technology Used

HTML 5

CSS

JavaScript 

GitHub

Gitpod 

Balsamic

W3C Markup, JShint and Jigsaw validation tools

Google Chrome

Youtube

## Credits

- W3 Schools
- HTML, JS and CSS used from Code Institute modules
- Thank you to my mentor Marcel for various corrections and guidance
- Wireframes were created in Balsamiq
- Testing was done by Google Lighthouse
- WebDevSimplified youtube 
- https://github.com/dhakal79/Portfolio-project-MS2




