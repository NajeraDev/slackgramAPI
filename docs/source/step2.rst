.. _step2:

Step 2. Slack channel, bot and api tweaks.
==========================================

2.1 Create a work space
-----------------------

The next step is to create a new Slack Work space, you can create one in https://slack.com/,
just follow the instruccions, and create the space.

2.2 Create an Slack app
-----------------------

Go to https://api.slack.com/apps?new_app=1 and select Create New App, and then From Scratch option.
Select your work space, ant then create App.
Once you create your app, you will land on Basic infotmation. Scroll down until you reach App credentials. 
Write down AppID, ClientID, Client Secret and Signing Secret.

Once you do that, scroll down a bit more until you reach App-level tokens.
Click on Generate Token and Scopes, and enter a Token name, and then Add Scope.
You will add both scopes available, and then generate.

You will then get a Token, which you will also save as XAPP token.

2.3 App permissions
--------------------
Go now to OAuth & permissions, on the side bar, and scroll down to scopes.
Add the following: 

.. figure:: /images/2.PNG

Next, scroll up and hit Install to Workspace, click allow, ant then the bot will be installed in your works space.
Also, copy Bot User OAuth Token.

Now go to Incoming webhooks on the sidebar, and Activate Incoming Webhooks, add a new Webhook to workspace.
select a chanel, and then allow.

After this, your Slack API page is almost done, we will comeback after deploy.
Nice, only 1 step to go, you can do it! :ref:`Lets go!<step3>`

