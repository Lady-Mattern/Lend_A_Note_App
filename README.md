# Lend A Note
## Schools lending their notes to make beautiful music together!

## Live Link to Site
(Most likely deploying this app to heroku)

## Technologies Used
- HTML
- CSS
- SASS
- JavaScript
- React
- Create React App
- Ruby on Rails
- PostgresQL
- SQL
- User Authentication
- (Possibly Gatsby)

## About Lend A Note
Lend A Note is an application designed for school music programs to lend their sheet music out to other schools in need. 

This idea for this application came from my experience teaching music in small school districts. The schools would have large libraries of sheet music, but the music was designed for very large, and well advanced ensembles. The groups that I would see were anywhere from five to maybe twenty students in size.

This may not seem like an issue, but it became quite a challenge for the following reasons.

1. Most pieces of instrumental music are scored for all instrument types from every wind family and quite a lot of percussion. A band of twelve students mya have some flutes, clarinets, trumpets, maybe a tuba if you are incredibly lucky and into bribery. You could have a student on snare drum and maybe even a random violin! 

2. A sixty piece band is going to have featured sections or solos thrown in> Say you are playing a piece with a gorgeous french horn solo but your band does not have a horn. You could transpose the solo for someone else, but that musician might be needed to cover another part at the same time. Decisions, decisions.

3. Lastly, there is the sheer volume of sound to contend with. No matter how a piece is written, twelve musicians does not equal sixty. When students hear themselves playing or singing the piece and they do not sound like the recording it hurts their self esteem and that in turn is hurtful to the program.

The Lend A Note application will allow music teachers across the country to search from a database of sheet music to find the piece they need. When they locate the piece they can view a list of schools that have the sheet music in their library and contact the music teacher or program director and arrange to borrow it for a set period of time. Thus eliminating the huge financial burden of having to purchase new pieces for every program.

Music educators will be able to search from the following criteria right from the home page.

1. **Title:** Search the title of the desired piece.

2. **Composer/Arranger:** Filter the search further by adding the composer. Or search for all pieces available by one particular composer or arrangement.

3. **Instrumentation** For now, search criterial will be pulled from a drop down list and include:
  * Concert Band
  * Jazz Band
  * Marching Band
  * String Orchestra
  * Symphonic Orchestra
  * Four Part Choir
  * Three Part Choir
  * Two Part Choir

4. **Difficulty Level** Music educators and ensemble directors can choose from pieces ranging from the standard grade levels ranging from 1 - 6.

  * Level 1 (Easy)
  * Level 1.5 (Easy)
  * Level 2 (Easy)
  * Level 2.5 (Easy-Medium)
  * Level 3 (Medium)
  * Level 3.5 (Medium)
  * Level 4 (Medium)
  * Level 4.5 (Medium-Hard)
  * Level 5 (Hard)
  * Level 5.5 (Hard)
  * Level 6 (Hard)
 
## Data Modeling 
This project will require me to us Ruby on Rails as **(currently it looks like)** I will need to have a **many to many** table relationship. Here is how I came to this conclusion.

### Table One: Schools
Schools table will contain:
- School Name
- Region
- Educator Name
- School Email
- School Phone

One school may have many songs listed in their library.

| School | Song_Id | Region |
| ------ | ------- | ------ |
| Emmett High School | 1 | Emmett, ID |
| Emmett High School | 2 | Emmett, ID |
| Emmett High School | 3 | Emmett, ID |

### Table Two: Songs
Songs table will contain:
- Song Title
- Composer/Arrange
- Instrumentation
- Difficulty Level
- (Maybe Cover Image?)

One song may be found in many school's libraries.

| Song | School_Id | Composer/Arranger |
| ---- | --------- | ----------------- |
| October | 1 | Eric Whitacre |
| October | 2 | Eric Whitacre |

## Anticipated Working Timeline

### Week One

| Day | Task | Time |
| --- | ---- | ---- |
| Sun | Set up the tables | 30 min |
|     | Create the data and seed database | 3 hrs |
|     | Create routes with browser router | 3 hrs |
|     | Begin user authentication | 2 hrs |
| Mon | Most likely more user auth/create account page/sign in | 4 hrs |
| Tues | Work on the search webform on homepage | 2 hrs |
| Wed | Nav bar content and positioning | 1 |
|     | Footer content and styleing | 1 |
| Thurs | Continued route set up. Information displayed on page | 3 - 4 hrs |
| Fri | All routes set up by this time? 
| Sat | 

### Week Two

| Day | Task | Time |
| --- | ---- | ---- |
| Sun | Work in media queries | 4 hrs |
| Mon | Home page, sign-up page, sign-in page styling | 4 hrs |
|     | Search display page styling | 2 hrs |
| Tues | Additional styling | TBD |
| Wed | Additional styling | TBD |
| Thurs | Additional styling, leftover content debugging | TBD |
| Fri | Final styling, fix bugs, fix deployment issues | TBD |
| Sat | Project Presentation | |

## Wireframes

### Home Page
The 'Sign In' webform will appear as a modal
![Home Page View](/lendanote_client/public/images/LendANote-Home.png)

### Sign-Up Page
![Sign Up Page](/lendanote_client/public/images/LendANote-SignUp.png)

### User Information Page/Add Songs To School Library
The 'Add A Song' webform will appear as a modal


### Song Search Results Page (Index Page)

## Moodboard and Design Ideas
(Design features coming soon)

## Challenges 
(Challenges to be added at a later date)

## Ideas for the Future
(This section to be added before presentation)