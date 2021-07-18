.. _step3:

Step 3. Deploy.
===============

This is the last step!

3.1  Heroku deploy.
-------------------

Go to: heroku.com and signup and fill the form, using Hobbyist and NodeJS as your language. Confirm your email, Create your password, and procced to your account.
Accept conditions and login.

Click create new app, enter your app name, and then select the region closer to you.
Then Create app. Go to Deploy tab, and select Connect to Github, login into your github account and select the repository you just forked.

Go to settings, and then Config Vars section: And Reveal config Vars, and add the following:

.. figure:: /images/3.PNG


SLACK TOKEN will be your Bot User OAuth Token

Tlegram Token will be the one given to you by BotFather.

And the webhook URL you will get it from the Slack API incoming webhook section.

Save, and go to resources tab. Turn off web and turn on worker options.

Then select Deploy tab, and Deploy branch, that will build your api, once its done, scroll up and click Open app, that will send you to a URL. Copy that and go back to your Slac Application site.

Go to Event Subscriptions on the sidebar and Enable Events and enter your app url to request url,  Go to Susbscribe to bot events and add message.channels. and save changes.

Install Heroku CLI, enter heroku login and go to your slackgram directory and enter heroku ps:scale web=1

Now, go to your Slack chanel, and send a message, you should see it now on your Telegram group, you successfully have created a **Slackgram bot!** 

