---
path: local-visual-studio-codespace
date: 2020-05-07T13:30:11.339Z
title: Setting up a Local Visual Studio Codespace
---
Yesterday I watched the [Github Satellite Keynot](https://githubsatellite.com/)e and saw that they announced Codespaces! A really cool new feature and I can just see myself developing on my iPad on the go 😁 So I could not wait to try it out - and luckily the Visual Studio Codespace (which Github Codespaces run on) is available for preview now. 

I have a pretty capable desktop (an internet connection) and wanted to see if it was possible to run Visual Studio Codespaces on that instead of paying for a server. And it was actually pretty simple!

To get going you will need an Azure account. Don't worry you don't need to pay for anything if you host your own pc! To sign up for Azure and setup the plan follow this [guide](https://docs.microsoft.com/en-us/visualstudio/online/how-to/browser) BUT stop when reaching "Create an environment" - just setup and account and a plan.

When that is setup you will need to install the Visual Studio Codespace command line utility. This is a one-liner in your terminal but different for each OS so you can find yours [here](https://docs.microsoft.com/en-us/visualstudio/online/reference/vsonline-cli#installation). You can ensure that it works but writing `vso -v`. 

With that installed head to a repository/project to want to have available in a Codespace. Then run `vso start --service` - you will probably be prompted to open a browser window and login with the code in the terminal - go ahead and do so. You are then prompted for a environment name and when that is done you are good to go and it will have given you an url to connect to your Visual Studio Codespace 🔥🎆

Opening the link will give you a fully fleged Visual Studio Code Editor in the browser! 
