<div align="center"> <img align="center" alt="dschackfest" src="https://user-images.githubusercontent.com/84925346/193271219-6360d311-ea13-42eb-8822-4ec2fd854ee5.jpeg" height='150' width='350'></div>

<!-- <div>
    <img align=top src="https://miro.medium.com/max/1400/1*c4YgRXYQayOVWxV37ourrw.png" height="100" width="50%"/>
    <img align=top src="https://res.cloudinary.com/de4by5q8o/image/upload/v1633197681/hackfest2021_ocjn5n.svg" height="100" width="49%"/>
<div>
<br> -->

## Table of Content

- [Table of Content](#table-of-content)
- [Share Your Bookmark Description](#share-your-bookmark)
- [Technology Stack Used](#technology-stack-used)
- [Our Contributors](#our-contributors--✨t)
- [License](#license)

## Share-Your-Bookmark

A platform where anyone can make their profile, share their Twitter and LinkedIn bookmarks, see other shared bookmarks, and contribute to the community.

#### Website for this repository : <https://share-your-bookmarks.netlify.app/>

## Technology Stack used:

<img src="https://img.shields.io/badge/html5%20-%23E34F26.svg?&style=for-the-badge&logo=html5&logoColor=white"/> <img src="https://img.shields.io/badge/css3%20-%231572B6.svg?&style=for-the-badge&logo=css3&logoColor=white"/> <img src="https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"/><img src="https://img.shields.io/badge/github%20-%23121011.svg?&style=for-the-badge&logo=github&logoColor=white"/>

<!-- <img src="https://img.shields.io/badge/node.js%20-%2343853D.svg?&style=for-the-badge&logo=node.js&logoColor=white"/>  <img src="https://img.shields.io/badge/heroku%20-%23430098.svg?&style=for-the-badge&logo=heroku&logoColor=white"/> -->

 <!-- <img src="https://img.shields.io/badge/express.js%20-%23404d59.svg?&style=for-the-badge"/> <img src ="https://img.shields.io/badge/MongoDB-%234ea94b.svg?&style=for-the-badge&logo=mongodb&logoColor=white"/> -->

- **Frontend**: HTML5, CSS3, JavaScript
<!-- - **Backend**: Node.js, Express.js -->
- **IDE**: VS Code
- **Version Control**: Git and GitHub
#steps to follow
##1. Fork it 🍴
You can get your own fork (copy) of [Share-Your-Bookmarks](https://github.com/vijayyprajapati/Share-Your-Bookmarks.git) by using the Fork button at the top right of this page.
![Fork Button](https://github-images.s3.amazonaws.com/help/bootcamp/Bootcamp-Fork.png)

##2. Clone it 👥
You must move to your fork of the repository and clone (download) it to your local machine using
`$ git clone https://github.com/Your_Username/Share-Your-Bookmarks.git`
This creates a local copy of the repository on your machine.

After cloning the `Share-Your-Bookmarks` repository on Github, use the change directory command on Linux and Mac to go to that folder.

```python
# This will change directory to a folder Share-Your-Bookmarks                                                                  
$ cd
Share-Your-Bookmarks
```

Move to this folder for all other commands.
Let us now add a reference to the original 'Share-Your-Bookmarks' repository using:
`$ git remote add upstream https://github.com/vijayyprajapati/Share-Your-Bookmarks.git`
This adds a new remote named **_upstream_**.

Examine the modifications using:

```git
 $ git remote -v
 origin https://github.com/Your_Username/Share-Your-Bookmarks.git (fetch)                                                      
 origin https://github.com/Your_Username/Share-Your-Bookmarks.git (push)                                                        
 upstream https://github.com/vijayyprajapati/Share-Your-Bookmarks.git (fetch)                                                     
 upstream https://github.com/vijayyprajapati/Share-Your-Bookmarks.git (push)
 ```
 
## 3. Sync with the Remote 🔄
Remember to keep your local repository up to date with the remote repository.
```python
# Fetch all remote repositories and delete any deleted remote branches
$ git
fetch - -all - -prune
# Switch to main branch
$ git
checkout
main
# Reset local main branch to match upstream repository's main branch
$ git
reset - -hard
upstream / main
# Push changes to your forked DNAnalyzer repo
$ git
push
origin
main
```

## 4. Create a new branch
Whenever you want to make a contribution, use the following command to establish a new branch and keep your main branch uncluttered (i.e. synced with remote branch).

```python
# It will create a new branch <branchname> with name and switch to branch <branchname>
$ git
checkout - b < branchname >
```
To switch to desired branch
```python 
# To switch from one folder to other
$ git
checkout < branchname >
```
To add the changes to the branch. Use

```python
# To add all files to branch
$ git
add.
```

Type in a message relevant for the code reveiwer using
```python
# This message get associated with all files you have changed
$ git
commit - m
"relevant message"
```
Now, Push your awesome work to your remote repository using
```python
# To push your work to your remote repository
$ git
push - u
origin < branchname >
```
Finally, in your browser, navigate to your repository and click Contribute and then Open Pull Request. There, please provide a title and description, with brevity, that describe your much-appreciated effort.

## Our Contributors !! ✨

### Thanks to these wonderful people: ✨

<table>
	<tr>
		<td>
			<a href="https://github.com/vijayyprajapati/Share-Your-Bookmarks/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=vijayyprajapati/Share-Your-Bookmarks" />
</a>
		</td>
	</tr>
</table>

## License

Licensed under the [MIT license](LICENSE).
