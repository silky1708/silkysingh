import React from 'react';
import styled from 'styled-components';
import Codeblock from '../components/Codeblock.js';

const Styles = styled.div`
font-family: "Georgia", sans-serif;
`;

class Page1 extends React.Component{
    render(){
        return (
            <Styles>
                <div className="container-fluid p-2">
                    <div className="row no-gutters justify-content-center align-items-center">
                        <div className="col-md-2"></div>
                        <div className="col-md-8 my-2">
                            <h2 className="p-1" style={{color: '#000000', backgroundColor:'orange'}}>git cheatsheet</h2>
                            <br/>
                            <span style={{color:'blue', fontWeight:'bold'}}>tech./</span>
                            <br/><br/>

                            A quick guide to some git commands:
                            <br/><br/>
                            <ol>
                                <li>To initialize a git repo locally:
                                <Codeblock content="git init"/>
                                </li>

                                <br/>

                                <li >
                                    To add files to the local repo:<br/>
                                    adds all files from the current directory: <Codeblock content="git add -A"/>
                                    or, 
                                    <Codeblock content="git add ."/>
                                    <br/>
                                    To add only some of the files(in this e.g., file1.txt & file2.txt)
                                    <Codeblock content="git add file1.txt file2.txt"/> 
                                    Remember to put quotes if the filename has space in it e.g., 'file 3.ipynb'
                                </li>
                                <br/>
                                <li>
                                    To commit to the local repo:
                                    <Codeblock content="git commit -m <commit message>"/>
                                </li>
                                <br/>
                                <li>
                                    To add remote:
                                    <Codeblock content="git remote add <remote name> <url>"/>
                                    url can be found in the Code tab in the repo itself
                                </li>
                                <br/>
                                <li>
                                    To verify remote immediately after Step 4:
                                    <Codeblock content="git remote -v"/>
                                </li>
                                <br/>
                                <li>
                                    To fetch & merge content from the remote:
                                    <Codeblock content="git pull <remote name> <branch name>"/>
                                    <br/>
                                    However, if you wish to just use {"git pull"}, set upstream from local branch to remote branch:
                                    <Codeblock content="git branch --set-upstream-to=<remote name>/<branch> <remote branch>"/>
                                    Having done this, {"<branch>"} is set up to track remote branch {"<remote branch>"} from {"<remote name>"}
                                </li>

                                <br/>
                                <li>
                                    To push the changes to the remote:
                                    <Codeblock content="git push <remote name> <branch>"/>
                                </li>
                                <br/>
                                <li>
                                    To remove a file/directory already pushed to the remote:
                                    <Codeblock content="git rm -r --cached <filename or dir name>"/>
                                </li>
                                <br/>
                                <li>
                                    To delete local repo(.git):
                                    <Codeblock content="rm -rf .git"/>
                                </li>
                                <br/>
                                <li>
                                    To rename a branch:
                                    <Codeblock content="git branch -m <old branch name> <new branch name>"/>
                                </li>
                                <br/>
                                <li>
                                    Delete a remote branch:
                                    <Codeblock content="git push -d <remote name> <branch to be deleted>"/>
                                </li>
                                <br/>
                                <li>
                                    Create and edit .gitignore from the command line:
                                    <Codeblock content="cat .gitignore"/>
                                    displays the contents of .gitignore<br/>
                                    <br/>
                                    <Codeblock content="cat > .gitignore"/>
                                    Opens editor to write to .gitignore. Close the editor by Ctrl+D (on Windows)
                                    <br/><br/>
                                    <Codeblock content="cat >> .gitignore"/>
                                    Opens the editor to append new content to .gitignore. (This prevents overwrites to existing .gitignore)
                                </li>
                                <br/>
                                <li>
                                    To reorder commits or to push only a select commit, check out: <a href="https://www.dennisrobinson.name/blog/reorder-commits-with-git/">this</a> and <a href="https://www.dennisrobinson.name/blog/push-only-one-commit-with-git/">this</a>
                                </li>
                                
                                <li>
                                    I've collected a list of branch & merge commands <a href="https://github.com/silky1708/branching-and-merging/blob/master/README.md">here</a>
                                </li>

                            </ol>


                        </div>
                        <div className="col-md-2"></div>
                    </div>
                </div>
            </Styles>
        )
    }
}
export default Page1;

