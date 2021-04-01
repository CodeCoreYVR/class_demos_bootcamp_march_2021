Ruby Basics setup:

Every macOS has ruby installed, so in command line you can use which ruby, or ruby -v to see which ruby version you are using

We use rvm to switch between different ruby versions, depending on what the project requires. Similar to nvm for node versions.  We will need to install rvm for all users (including macOs)

First, we will need to install gpg keys. Try in command line: gpg2 --recv-keys 409B6B1796C275462A1703113804BB82D39DC0E3 7D2BAF1CF37B13E2069D6956105BD0E739499BDB
This is sourced from https://rvm.io/

If it does not work, we will need to install gpg2 first as it does not come with macOS by default as it does for Windows. 

macOs users only: brew install gnupg

Ubuntu users only: sudo apt-get update -y 
                   sudo apt-get install -y gnupg2

When you are done installing GPG2, close all terminals and open back up.

1. Run the command gpg2 --recv-keys 409B6B1796C275462A1703113804BB82D39DC0E3 7D2BAF1CF37B13E2069D6956105BD0E739499BDB

2. If it still does not work, do:
 /usr/local/bin/gpg --keyserver hkp://pool.sks-keyservers.net --recv-keys 409B6B1796C275462A1703113804BB82D39DC0E3 7D2BAF1CF37B13E2069D6956105BD0E739499BDB

3. If no such directory, try:
 cd /usr/local/bin

If the above directory does not exist for macOs, do
    brew install gnupg gnupg2
    brew install ssh-copy-id
    exit terminal after and open back up
    try numbers 1-3 above again as necessary

If 3 works, then you will be in the bin directory. Then you can try number 2 again

For Ubuntu users, try following the steps in this documentation: https://github.com/rvm/ubuntu_rvm
    
RVM Ruby Version Manager

use rvm install <version> to install a new version of ruby use rvm use <version> to switch between different ruby versions to set a default ruby version use the --default flag with the use command: rvm use --default <version>

At the moment latest version is 3.0.0


To install pry: gem install pry