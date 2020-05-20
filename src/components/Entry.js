import React from "react";
import { useParams, useHistory } from "react-router-dom"
import moment from "moment";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Paper, Avatar, Chip } from "@material-ui/core";


const Entry = ({ content }) => {
    const { slug } = useParams();
    const [entry] = content.filter(({ fields }) => fields.postSlug === slug);

    return (

        entry ? (
            <Paper variant="outlined" style={{ margin: "0.5%", width: "50%", minWidth: "360px" }}>
                <div className="blogpost" >
                    <img src={`${entry.fields.headerImage.fields.file.url}`} alt="" />

                    <h2>{entry.fields.postTitle}</h2>
                    <div className="postAuthor">
                        <Avatar className="avatar" style={{ backgroundColor: "orange" }}>{entry.fields.authors.fields.authorName[0]}</Avatar>
                        <div className="postAuthorText">
                            <p>by <b>{entry.fields.authors.fields.authorName}</b> on {moment(entry.fields.creationDate).format('MMMM Do YYYY')}</p>
                        </div>
                        <div className="chips">
                            {entry.fields.postTags.map(entry => <Chip label={entry} style={{ marginLeft: "1%" }} onClick={x => console.log("hey")} />)}
                        </div>
                    </div>
                    {documentToReactComponents(entry.fields.postIntro)}
                    {documentToReactComponents(entry.fields.postContent)}

                </div>
            </Paper>) : (
                <p></p>
            )

    )
}




export default Entry;