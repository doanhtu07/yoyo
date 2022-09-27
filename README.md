# yoyo
A custom routing search engine that allows you jump to your favorite websites in a blink of an eye.

## Example

An example would be at https://yoyo-shortcut.herokuapp.com/

To try out the search engine in Chrome, do the following steps:

**Step 1**
  
- Go to chrome://settings/searchEngines

**Step 2**

- Click on Add

<img width="675" alt="Screen Shot 2022-09-26 at 11 35 34 PM" src="https://user-images.githubusercontent.com/55064969/192433083-39631fa5-4dc5-4156-a087-f73dd0e86519.png">

**Step 3**

- Add and save the search engine as follow

<img width="503" alt="Screen Shot 2022-09-26 at 11 37 34 PM" src="https://user-images.githubusercontent.com/55064969/192433338-507fd01f-06e2-4e81-a422-26665eba2e73.png">

**Step 4**

- Try out some commands yourself. 
- To test, you can start by typing "yo" on your Chrome search bar.
- Then type "h" for help

<img width="654" alt="Screen Shot 2022-09-26 at 11 41 17 PM" src="https://user-images.githubusercontent.com/55064969/192433827-7753b16f-e40e-4996-91f5-2afaf70311c7.png">

- Then hit Enter
- After you hit Enter, you will enter Yoyo Guide, where it shows different default shortcuts I already set.

## Make it your own

You can actually customize this project to your need.

I recommend you host it on Heroku because I already setup everything and have a cron job to keep your free server alive, so no worries!

You can adjust things in `src/app/commands.ts` according to your needs.

You also need to edit your Heroku env variables:
- NODE_ENV = production
- SERVER_URL = Your heroku server url here (Example: https://yoyo-shortcut.herokuapp.com/)

## Have fun!
