# Run cgi programs locally for development

Some notes on running cgi programs locally.

## Install Apache 2

We use apache as it has built in cgi support unlike Nginx. If you want to use Nginx, you need to configure it yourself, passing requests to fastCGI.

### Download and install

On Linux, the easiest way is to install the pre-built package using your favourite package management system, e.g. apt, yum, ...

On Mac, you should be able to find a pre-built package in Homebrew (`brew install apache2`).

When Apache has been installed and started, you should be able to see the Apache welcome page by typing `localhost` into your browser address bar.

### Configure

You need to find the root directory Apache is serving. This is usually `/var/www/html`. 

Now make a symlink from that directory to the cgi-scripts directory in SVN, or copy the files there. It is important that GTHOME is set beforehand.

```bash
cd /var/www/html
sudo ln -s $GTHOME/gt/script/cgi-scripts/ cgi-bin
```

Now you should be able to see the source code by visiting `localhost/cgi-bin/smi.cgi` in your browser. If not, then Apache might need to be configured to follow symlinks.


## Dependencies

perl, ...