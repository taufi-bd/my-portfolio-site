import React from "react";
import Image from "gatsby-image";
import { FaGithubSquare, FaShareSquare } from "react-icons/fa";
const Project = ({ title, github, stack, url, image, index }) => {
    return (
        <article className="project">
            <div className="project__card">
                <Image
                    fluid={image.childImageSharp.fluid}
                    className="project__card__image"
                />
                <div className="project__card__container">
                    <h3 className="project__card__container__title">
                        {title}
                    </h3>
                    <div className="project__card__container__stacks">
                        {stack.map((item) => {
                            return <span key={item.id}>{item.title}</span>;
                        })}
                    </div>
                </div>
                <div className="project__card__footer">
                    <a
                        href={github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`project__card__container__footer__icon ${
                            github ? "" : "empty-github"
                        }`}
                    >
                        Github Link
                    </a>
                    <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project__card__container__footer__icon"
                    >
                        View Live
                      
                    </a>
                </div>
            </div>
        </article>
    );
};

export default Project;
