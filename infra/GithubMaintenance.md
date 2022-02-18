# Github maintenance

Initial documenation for how to maintain the infra on GitHub.


Follow these instructions:


[https://help.github.com/en/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent#adding-your-ssh-key-to-the-ssh-agent]


The paste the following into your `.profile` or equivalent file:


```
# Make sure that the ssh agent has touched git@github.com.
# Required for smooth operation of https://github.com/divvun/project-dadmin:
ssh -T git@github.com &>/dev/null
```
