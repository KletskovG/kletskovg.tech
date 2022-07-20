import React from 'react'
import { ArticleImage } from '../ArticleImage/ArticleImage';
import { ArticleTitle } from '../ArticleTitle/ArticleTitle';
import { ArticleHeader } from '../ArticleHeader/ArticleHeader';
import Page from '../../../shared/Page/Page';
import Gist from "react-gist";

import './Article.scss';

export const DeployReactWithDocker = () => {
    return (
        <Page >
            <div className="article">
                <ArticleTitle  title={"Deploy React application with Docker to DigitalOcean"} />
                <ArticleImage  src={'react-docker.png'} />

                <p className="article__text">
                    So, a lot of developers face the problem when the project is ready, but they don’t know how to deploy project to production. In this article we will learn how to deploy React application with Docker and NGINX to DigitalOcean droplet.
                </p>

                <ArticleHeader  title={'Prepare NGINX config ⚙️'} />

                <p className="article__text">
                    First of all, you will need to setup NGINX config for serving static files from React build.
                </p>

                <p className="article__text-bold">
                    Create nginx.conf file in the root directory of your project.
                </p>

                <p className="article__text-code">
                    touch nginx.conf
                </p>

                {/* <ArticleImage  src="nginx-article.png" /> */}

                <p className={"article__text"}> Write down this code into the file </p>

                <Gist id='a5e51c416863dbcb6e6eb7ff60128330' file='nginx.conf' />

                <p className="article__text"> Thats it! NGINX will serve our static files from Docker container. </p>

                <ArticleHeader  title={"Docker 🐳"} />

                <p className="article__text">
                    Docker is one of the important nowadays technologies. It helps us with build, run, and share applications with containers.
                </p>

                <p className="article__text">
                    Create Dockerfile
                </p>

                <p className="article__text">
                    Dockerfile is needed to build docker images which we will use on our DigitalOcean droplet. Create it in root directory of project.
                </p>

                <p className="article__text-code">
                    touch Dockerfile
                </p>

                <p className="article__text">
                    Write down this code to file
                </p>

                <Gist id="62f9e3d545b6b396ef35348f210f3ed7" file="Dockerfile" />

                <ArticleHeader  title={"Deploy 📦"} />

                <p className="article__text">
                    Build Docker image
                </p>

                <p className="article__text">
                    Make sure that you are in root directory of your project.
                </p>

                <p className="article__text-code">
                    docker build . -t yournickname/yournameofcontainer:latest <br/>
                    docker push yournickname/yournameofcontainer
                </p>

                <p className="article__text">
                    All the are images is pushed to https://hub.docker.com by default . So, your image will be public and anyone will able to pull it. If you want your images to be private you should create private repository on DockerHub or host your own registry.
                </p>

                {/* List item */}
                <p className="article__text">
                    Pull image from DockerHub
                </p>

                <p className="article__text">
                    Connect via SSH to your DigitalOcean droplet. And then pull image:
                </p>

                <p className="article__text-code">
                    docker pull yournickname/yournameofcontainer:latest
                </p>
            </div>
        </Page>
    )
}


