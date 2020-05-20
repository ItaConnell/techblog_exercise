import React from "react";
import moment from "moment";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Paper, Link, Avatar, Chip } from "@material-ui/core";
import MoreHorizRoundedIcon from '@material-ui/icons/MoreHorizRounded';

const ContentStream = ({ content, authors }) => {


    return (
        content.map(entry => {
            return (
                <>
                    {console.log(entry.fields.headerImage.fields.file.url)}
                    <Paper variant="outlined" style={{ margin: "0.5%", width: "50%", minWidth: "360px" }}>
                        <div className="blogpost">
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
                            <Link className="articleLink" href={`/${entry.fields.postSlug}`} style={{ alignSelf: "center", color: "orange" }}>
                                <MoreHorizRoundedIcon fontSize="large" />
                            </Link>
                        </div>
                    </Paper>
                </>
            )
        })
    )

}

export default ContentStream;