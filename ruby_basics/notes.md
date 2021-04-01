RUBY AND RVM SETUP:

Every macOS has ruby installed, so in command line you can use which ruby, or ruby -v to see which ruby version you are using.

With other systems, you might not have it installed, but you can use use "which ruby" to check if you do.

RVM AND GPG KEYS

We use rvm to switch between different ruby versions, depending on what the project requires. Similar to nvm for node versions.  We will need to install rvm for all users (including macOs)

First, we will need to install gpg keys. Try in command line: gpg2 --recv-keys 409B6B1796C275462A1703113804BB82D39DC0E3 7D2BAF1CF37B13E2069D6956105BD0E739499BDB
This is sourced from https://rvm.io/

If it does not work, we will need to install gpg2 first as it does not come with macOS by default as it does for Windows. 

macOs users only: brew install gnupg

Ubuntu users only: sudo apt-get update -y 
                   sudo apt-get install -y gnupg2

When you are done installing GPG2, CLOSE ALL TERMINALS and open back up.

1. Run the command gpg2 --recv-keys 409B6B1796C275462A1703113804BB82D39DC0E3 7D2BAF1CF37B13E2069D6956105BD0E739499BDB

2. If it still does not work, do:
 /usr/local/bin/gpg --keyserver hkp://pool.sks-keyservers.net --recv-keys 409B6B1796C275462A1703113804BB82D39DC0E3 7D2BAF1CF37B13E2069D6956105BD0E739499BDB

3. If no such directory, try:
 cd /usr/local/bin
 If 3 works, then you will be in the bin directory. Then you can try number 2 again

4. If the above directory does not exist for macOs, do
    brew install gnupg gnupg2
    brew install ssh-copy-id
    exit terminal after and open back up
    try numbers 1-3 above again as necessary

5. If none of the above works, Ubuntu users try following the steps in this documentation: https://github.com/rvm/ubuntu_rvm

INSTALLING RVM Ruby Version Manager

Once you have gpg keys installed, you can install rvm.  

1. \curl -sSL https://get.rvm.io | bash -s stable --rails

2. If the above command does not work (it includes rails), then try this:
\curl -sSL https://get.rvm.io | bash -s stable

If step 2 works, it means that you have rvm set up but not rails, so you will need to install rails separately at some other point before rails classes.

3. If none of this works for Ubuntu users, refer to this documentation: https://github.com/rvm/ubuntu_rvm

4. If your system says that rvm is installed, but you can't use the rvm command (bash: rvm: command not found), try:
source /etc/profile.d/rvm.sh
rvm -v 
Then close all terminals and open back up.

or

source ~/.rvm/scripts/rvm
    
USING RVM

use rvm install <version> to install a new version of ruby use rvm use <version> to switch between different ruby versions to set a default ruby version use the --default flag with the use command: rvm use --default <version>

At the moment latest version is 3.0.0

RUBY DEPENDENCIES
Ruby dependencies are called gems, and can be installed using the command "gem". In rails we will use a Gemfile to store all the dependencies, similar to package.json

To install pry: gem install pry